'use client';

import React, { useState, useCallback } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD}/upload`, formData);
    return res.data.secure_url;
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image,
      Placeholder.configure({ placeholder: 'Start writing here...' }),
      BubbleMenu.configure({
        element: document.querySelector('.bubble-menu'),
      }),
    ],
    content: '',
  });

  const addImageToEditor = async (file) => {
    const url = await uploadToCloudinary(file);
    editor.chain().focus().setImage({ src: url }).run();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !featuredImage || !editor?.getHTML()) {
      toast.error('Please fill all fields.');
      return;
    }
    try {   
      await axios.post('/api/blogs', {
        title,
        description,
        featuredImage,
        content: editor.getHTML(),
      });
      toast.success('Blog saved!');
    } catch (err) {
      toast.error('Failed to save blog.');
    }
  };

  const exportPDF = async () => {
    const editorDiv = document.getElementById('editor-content');
    const canvas = await html2canvas(editorDiv);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save(`${title || 'blog'}.pdf`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded shadow"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded shadow h-24"
        />
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files[0];
            const url = await uploadToCloudinary(file);
            setFeaturedImage(url);
          }}
          className="w-full"
        />
        {featuredImage && (
          <img src={featuredImage} alt="Preview" className="w-full h-48 object-cover rounded" />
        )}
        <button
          onClick={handleFormSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded shadow"
        >
          Save Blog
        </button>
        <button
          onClick={exportPDF}
          className="w-full border border-gray-600 py-2 rounded shadow"
        >
          Export PDF
        </button>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2">
        <div className="border rounded shadow p-4" id="editor-content">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
