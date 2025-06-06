import { Sparkles, Lightbulb, Rocket, Code } from 'lucide-react'; 
import about from '../assets/about.jpg'
import Image from 'next/image';

export default function AboutContent() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white px-4 md:px-8 py-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <div className="flex flex-col gap-8 items-start max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
            Who We Are
          </h2>
          <p className="mt-4 text-base md:text-lg text-black/70 max-w-2xl pointer-events-none">
            At WebForgePlus, we merge innovation with design to build web experiences that convert. 
            From branding to deployment — we craft stories that stick.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
              <Rocket className="text-[#183ec2] mb-2" />
              <h4 className="font-semibold">Startup Mindset</h4>
              <p className="text-sm text-gray-600">Fast iterations, real traction — we move like founders.</p>
            </div>
            <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
              <Lightbulb className="text-[#183ec2] mb-2" />
              <h4 className="font-semibold">Creative Engineering</h4>
              <p className="text-sm text-gray-600">Design and code blend to form functional beauty.</p>
            </div>
            <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
              <Code className="text-[#183ec2] mb-2" />
              <h4 className="font-semibold">Clean Code</h4>
              <p className="text-sm text-gray-600">We architect maintainable, scalable systems from day one.</p>
            </div>
            <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
              <Sparkles className="text-[#183ec2] mb-2" />
              <h4 className="font-semibold">Impact-First</h4>
              <p className="text-sm text-gray-600">Results, not just deliverables. We&apos;re here to scale.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
        <div className="w-full max-w-md md:max-w-full px-4 md:px-0">
          <Image 
            src={about} 
            alt="Creative Collaboration" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
