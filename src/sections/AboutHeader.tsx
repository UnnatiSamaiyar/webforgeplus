"use client";

import { useEffect, useState } from "react";

export default function AboutHeader() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const bubbleCount = 15;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-600 to-blue-100 text-white">
      {/* Bubble bunch that follows the cursor */}
      {[...Array(bubbleCount)].map((_, index) => {
        const angle = (index / bubbleCount) * 2 * Math.PI;
        const radius = 30 + Math.random() * 20; // distance from center

        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;

        const bubbleStyle: React.CSSProperties = {
          position: "absolute",
          left: mousePosition.x + offsetX,
          top: mousePosition.y + offsetY,
          width: `${8 + Math.random() * 10}px`,
          height: `${8 + Math.random() * 10}px`,
          borderRadius: "50%",
          backgroundColor: `rgba(255, 255, 255, 0.15)`,
          pointerEvents: "none",
          transform: `translate(-50%, -50%)`,
          animation: `fishBubble ${3 + Math.random() * 2}s ease-in-out infinite`,
        };

        return <div key={index} style={bubbleStyle} className="bubble" />;
      })}

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
        <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-xl">
          Luxury Feel
        </h1>
        <p className="text-xl text-center mt-4 text-white drop-shadow-xl">
          Experience the movement of luxury in every pixel.
        </p>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes fishBubble {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
