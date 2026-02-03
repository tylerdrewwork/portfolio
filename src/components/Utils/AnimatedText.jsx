/**
 * Wraps text (or any children) and applies a wiggle or bounce animation.
 * Use animation="wiggle" | "bounce" | "none" (default: "wiggle").
 */
import './AnimatedText.scss';

function AnimatedText({ children, animation = 'wiggle', className = '' }) {
    const animClass = animation === 'none' ? '' : `animated-text--${animation}`;

    return (
        <span className={`animated-text ${animClass} ${className}`.trim()}>
            {children}
        </span>
    );
}

export default AnimatedText;
