// src/components/PianoKey.js
import React, { useState, useEffect } from 'react';

const PianoKey = ({ sound, className, playSound, isActive }) => {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        if (isActive) {
            setIsPressed(true);
            setTimeout(() => setIsPressed(false), 100); // Briefly show the pressed effect
        }
    }, [isActive]);

    const handlePlaySound = () => {
        setIsPressed(true);
        playSound();
        setTimeout(() => setIsPressed(false), 100); // Brief highlight for mouse click
    };

    return (
        <button
            onClick={handlePlaySound}
            className={`piano-key ${className} ${isPressed ? 'pressed' : ''}`}
            tabIndex="-1" // Prevent button focus outline
        >
        </button>
    );
};

export default PianoKey;
