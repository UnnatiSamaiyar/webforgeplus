import dbConnect from '../../lib/dbConnect';
import Blog from '../../models/Blog';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { title, description, featuredImage, content } = req.body;
      const blog = new Blog({ title, description, featuredImage, content });
      await blog.save();
      res.status(201).json({ success: true, blog });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
