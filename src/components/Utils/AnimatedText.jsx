/**
 * Wraps text (or any children) and applies a wiggle, bounce, or glitch animation.
 * Use animation="wiggle" | "bounce" | "glitch" | "none" (default: "wiggle").
 */
import { useEffect, useRef } from 'react';
import './AnimatedText.scss';

function AnimatedText({ children, animation = 'wiggle', className = '' }) {
    const animClass = animation === 'none' ? '' : `animated-text--${animation}`;
    const containerRef = useRef(null);

    useEffect(() => {
        if (animation !== 'glitch' || !containerRef.current) return;

        const letters = containerRef.current.querySelectorAll('.animated-text--glitch-letter');
        letters.forEach((el, i) => {
            el.style.animationPlayState = 'paused';
            setTimeout(() => {
                el.style.animationPlayState = 'running';
            }, i * 150);
        });
    }, [animation]);

    if (animation === 'glitch' && typeof children === 'string') {
        return (
            <span ref={containerRef} className={`animated-text ${animClass} ${className}`.trim()}>
                {children.split('').map((char, i) => (
                    <span
                        key={i}
                        className="animated-text--glitch-letter"
                        data-text={char}
                    >
                        {char}
                    </span>
                ))}
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
