/**
 * Wraps text (or any children) and applies a wiggle, bounce, or flashglow animation.
 * Use animation="wiggle" | "bounce" | "flashglow" | "none" (default: "wiggle").
 */
import { useEffect, useState, useRef } from 'react';
import './AnimatedText.scss';

function AnimatedText({ children, animation = 'wiggle', className = '', color }) {
    const animClass = animation === 'none' ? '' : `animated-text--${animation}`;
    const [flashing, setFlashing] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (animation !== 'flashglow') return;

        function scheduleFlash() {
            const delay = 1000 + Math.random() * 1000;
            timerRef.current = setTimeout(() => {
                setFlashing(true);
                setTimeout(() => {
                    setFlashing(false);
                    scheduleFlash();
                }, 400);
            }, delay);
        }

        const initialDelay = Math.random() * 2000;
        timerRef.current = setTimeout(scheduleFlash, initialDelay);

        return () => clearTimeout(timerRef.current);
    }, [animation]);

    if (animation === 'flashglow') {
        const flashStyle = flashing && color ? {
            color,
            textShadow: `0 0 8px ${color}99, 0 0 20px ${color}59, 0 0 40px ${color}26`,
        } : undefined;

        return (
            <span
                className={`animated-text ${animClass} ${flashing ? 'animated-text--flashglow-active' : ''} ${className}`.trim()}
                style={flashStyle}
            >
                {children}
            </span>
        );
    }

    return (
        <span className={`animated-text ${animClass} ${className}`.trim()}>
            {children}
        </span>
    );
}

export default AnimatedText;
