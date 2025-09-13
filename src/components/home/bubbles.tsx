"use client"
import React, { useState, useEffect } from 'react';

const Bubbles = () => {
    const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const colors = [
            'hsl(var(--primary) / 0.7)',
            'hsl(var(--accent) / 0.7)',
            'hsl(var(--secondary) / 0.7)',
            'hsl(var(--chart-1) / 0.7)',
            'hsl(var(--chart-2) / 0.7)',
            'hsl(var(--chart-3) / 0.7)',
            'hsl(var(--chart-4) / 0.7)',
            'hsl(var(--chart-5) / 0.7)',
        ];

        const createBubble = (id: number) => {
            const size = Math.random() * 60 + 10; // 10px to 70px
            const style = {
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 10}s`, // 10s to 25s
                animationDelay: `${Math.random() * 10}s`,
                filter: `blur(${Math.random() * 2}px)`,
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
                opacity: 0,
            };
            return (
                <div
                    key={id}
                    className="absolute bottom-0 rounded-full animate-[rise_25s_infinite] motion-reduce:animate-none"
                    style={style}
                ></div>
            );
        };
        
        const bubbleElements = Array.from({ length: 40 }).map((_, i) => createBubble(i));
        setBubbles(bubbleElements);

    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden" style={{ zIndex: 2000 }}>
            {bubbles}
        </div>
    );
};

export default Bubbles;
