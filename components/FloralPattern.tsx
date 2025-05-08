// components/FloralPattern.tsx
import React from 'react';

interface FloralPatternProps {
    color?: string;
    size?: number;
}

const FloralPattern: React.FC<FloralPatternProps> = ({ color, size = 20 }) => {
    const patternColor = color || 'var(--foreground)'; // Default to foreground green

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 24 24`}
            fill="none"
            stroke={patternColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply" // Adjust opacity and blend mode as needed
        >
            {/* Simple 4-petal flower motif */}
            <circle cx="12" cy="12" r="5" fill="none" />
            <path d="M12 5 L12 2" /> {/* Top petal */}
            <path d="M19 12 L22 12" /> {/* Right petal */}
            <path d="M12 19 L12 22" /> {/* Bottom petal */}
            <path d="M5 12 L2 12" />  {/* Left petal */}
        </svg>
    );
};

export default FloralPattern;
