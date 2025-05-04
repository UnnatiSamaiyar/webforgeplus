'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion';
import sphere from '@/assets/sphere.png';

const GRID_SIZE = 12;

const ContactHeader = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 60, damping: 15 });
    const springY = useSpring(y, { stiffness: 60, damping: 15 });

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const ballX = e.clientX - 250;
            const ballY = e.clientY - 250;
            x.set(ballX);
            y.set(ballY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    useMotionValueEvent(springX, 'change', (latestX) => {
        setMousePos((prev) => ({ ...prev, x: latestX }));
    });

    useMotionValueEvent(springY, 'change', (latestY) => {
        setMousePos((prev) => ({ ...prev, y: latestY }));
    });

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-600 to-blue-100 text-white">
            {/* Luxurious Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] z-0"></div>

            {/* Content Section */}
            <div className="absolute inset-0 flex items-center flex-col z-30 text-center">
                <h1 className="py-24 text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-8">
                    Elevate Your Brand with Professional Web & App Development
                </h1>

                {/* <p className="text-lg max-w-3xl mt-8 mb-8">
          We specialize in creating stunning, user-friendly websites and mobile apps that elevate your brand and help you connect with your audience in a meaningful way. 
          Whether youre an agency, startup, or established business, we craft custom solutions tailored to your needs.
        </p> */}
                <button className="btn btn-primary">
                    Get Started
                </button>
            </div>

            {/* Ball */}
            <motion.img
                src={sphere.src}
                alt="3D Ball"
                className="absolute pointer-events-none z-10"
                style={{
                    x: springX,
                    y: springY,
                    width: '400px',
                    height: '400px',
                    filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.3))',
                }}
            />

            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none z-20">
                {[...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => {
                    const row = Math.floor(i / GRID_SIZE);
                    const col = i % GRID_SIZE;

                    const cellCenterX = (screenWidth / GRID_SIZE) * (col + 0.5);
                    const cellCenterY = (screenHeight / GRID_SIZE) * (row + 0.5);

                    const dx = cellCenterX - (mousePos.x + 250);
                    const dy = cellCenterY - (mousePos.y + 250);
                    const dist = Math.hypot(dx, dy);
                    const visible = dist < 150;

                    const repel = visible ? 10 : 0;
                    const offsetX = (dx / dist) * repel || 0;
                    const offsetY = (dy / dist) * repel || 0;

                    return (
                        <motion.div
                            key={i}
                            className="w-full h-full"
                            animate={{
                                x: offsetX,
                                y: offsetY,
                                backgroundColor: visible ? 'rgba(255,255,255,0.1)' : 'transparent',
                                borderRadius: visible ? '12px' : '0px',
                            }}
                            style={{
                                backdropFilter: visible ? 'blur(10px)' : 'none',
                                WebkitBackdropFilter: visible ? 'blur(10px)' : 'none',
                                boxShadow: visible ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ContactHeader;
