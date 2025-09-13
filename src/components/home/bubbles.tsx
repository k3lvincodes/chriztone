"use client"
import React, { useState, useEffect } from 'react';

const Bubbles = () => {
    const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const colors = [
            'hsl(var(--primary))',
            'hsl(var(--accent))',
            '#00CC99',
            '#9966FF'
        ];

        const createBubble = (id: number) => {
            const size = Math.random() * 4 + 1; // 1rem to 5rem
            const style = {
                width: `${size}rem`,
                height: `${size}rem`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 10}s`,
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
        
        const bubbleElements = Array.from({ length: 30 }).map((_, i) => createBubble(i));
        setBubbles(bubbleElements);

    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
            {bubbles}
        </div>
    );
};

export default Bubbles;
