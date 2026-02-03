/**
 * Animated header with gradient background and optional emoji decorations.
 * Original idea: https://www.css-tricks.com
 * Version 1.0 by Sakiskid | https://github.com/Sakiskid
 */
import './PrettyHeaderSVG.scss';

function PrettyHeaderSVG({
    title = "Hey! I'm Tyler Smith",
    subtitle = "this is my profile",
    leftEmoji = "🏆",
    rightEmoji = "🏆",
    width = 800,
    height = 140,
    className = "",
}) {
    const viewBox = `0 0 ${width} ${height}`;

    return (
        <svg
            fill="none"
            viewBox={viewBox}
            width="100%"
            height="auto"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ maxWidth: width, display: 'block' }}
        >
            <foreignObject width="100%" height="100%">
                <div xmlns="http://www.w3.org/1999/xhtml" className="pretty-header-root">
                    <div className="pretty-header-container">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        <div className="pretty-header-emoji-container">
                            <div className="pretty-header-emoji left">
                                <div className="pretty-header-stagger-0">{leftEmoji}</div>
                                <div className="pretty-header-stagger-1">{leftEmoji}</div>
                                <div className="pretty-header-stagger-2">{leftEmoji}</div>
                            </div>
                            <div className="pretty-header-emoji right">
                                <div className="pretty-header-stagger-0">{rightEmoji}</div>
                                <div className="pretty-header-stagger-1">{rightEmoji}</div>
                                <div className="pretty-header-stagger-2">{rightEmoji}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </foreignObject>
        </svg>
    );
}

export default PrettyHeaderSVG;
