import Spline from '@splinetool/react-spline';

export default function ContactHeader() {
    return (
        <div className="relative pt-0 h-[90vh] md:h-[100vh] pb-20 md:pt-0 md:pb-0 overflow-x-clip 
        bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] md:bg-none">
            
            {/* Background Spline – hidden on small screens */}
            <div className="hidden md:block">
                <Spline scene="/contactbackground.splinecode" />
            </div>

            {/* Overlapping Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0 pointer-events-none">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
                    Let&apos;s Build Something Great Together
                </h1>
                <p className="mt-4 text-lg md:text-xl text-black/70 max-w-2xl pointer-events-none">
                    We&apos;re a creative agency building stunning websites that convert — fast, responsive, and built for impact.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto">
                    <a href="#contact-form" className="btn btn-primary">
                        Get in Touch
                    </a>
                    <a href="tel:+1234567890" className="btn btn-text gap-1">
                        Call Us
                    </a>
                </div>
            </div>
        </div>
    );
}
