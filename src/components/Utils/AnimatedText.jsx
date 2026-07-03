/**
 * Wraps text (or any children) and applies a wiggle, bounce, or glitch animation.
 * Use animation="wiggle" | "bounce" | "glitch" | "none" (default: "wiggle").
 */
import './AnimatedText.scss';

function AnimatedText({ children, animation = 'wiggle', className = '' }) {
    const animClass = animation === 'none' ? '' : `animated-text--${animation}`;

    if (animation === 'glitch' && typeof children === 'string') {
        return (
            <span className={`animated-text ${animClass} ${className}`.trim()}>
                {children.split('').map((char, i) => (
                    <span
                        key={i}
                        className="animated-text--glitch-letter"
                        data-text={char}
                        style={{ animationDelay: `${i * 0.15}s` }}
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
