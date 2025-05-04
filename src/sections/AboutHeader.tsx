// "use client"

// import { useEffect, useState } from 'react';

// export default function AboutHeader() {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         // Update mouse position when the mouse moves
//         const handleMouseMove = (event) => {
//             setMousePosition({
//                 x: event.clientX,
//                 y: event.clientY,
//             });
//         };

//         // Add event listener for mouse move
//         window.addEventListener('mousemove', handleMouseMove);

//         // Cleanup the event listener on component unmount
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-600 to-blue-100 text-white">
//             {/* Bubbles */}
//             <div
//                 className="absolute top-0 left-0 w-full h-full pointer-events-none"
//                 style={{
//                     background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 80%)`,
//                     zIndex: 1,
//                 }}
//             >
//                 {[...Array(20)].map((_, index) => {
//                     const size = Math.random() * 50 + 20; // Random size for the bubbles
//                     const positionX = Math.random() * 100; // Random horizontal position
//                     const positionY = Math.random() * 100; // Random vertical position
//                     const animationDelay = Math.random() * 5; // Random animation delay
//                     const bubbleStyle = {
//                         position: 'absolute',
//                         width: `${size}px`,
//                         height: `${size}px`,
//                         borderRadius: '50%',
//                         backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
//                         left: `${positionX}%`,
//                         top: `${positionY}%`,
//                         animation: `bubbleAnimation ${Math.random() * 5 + 2}s ease-in-out infinite`,
//                         animationDelay: `${animationDelay}s`,
//                     };

//                     return <div key={index} style={bubbleStyle} className="bubble" />;
//                 })}
//             </div>

//             <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
//                 <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-xl">Luxury Feel</h1>
//                 <p className="text-xl text-center mt-4 text-white drop-shadow-xl">
//                     Experience the movement of luxury in every pixel.
//                 </p>
//             </div>

//             {/* Add the tailwind bubble animation */}
//             <style jsx>{`
//                 @keyframes bubbleAnimation {
//                     0% {
//                         transform: translate(0, 0) scale(1);
//                     }
//                     50% {
//                         transform: translate(10px, 10px) scale(1.3);
//                     }
//                     100% {
//                         transform: translate(0, 0) scale(1);
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// }
