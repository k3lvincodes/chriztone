"use client"
import React, { useState, useEffect } from 'react';

const Bubbles = () => {
    const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

    useEffect(() => {
        // This component now generates empty bubble divs.
        // All styling and animation is handled in globals.css with nth-child selectors
        // to match the user's request.
        const bubbleElements = Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="bubble"></div>
        ));
        setBubbles(bubbleElements);

    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 2000 }}>
            {bubbles}
        </div>
    );
};

export default Bubbles;
