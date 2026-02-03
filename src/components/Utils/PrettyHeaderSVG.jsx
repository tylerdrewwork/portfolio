/**
 * Animated header with gradient background and optional emoji decorations.
 * Original idea: https://www.css-tricks.com
 * Version 1.0 by Sakiskid | https://github.com/Sakiskid
 * Pass emojiPool (array of emoji strings) to pick one at random on each page load for both sides.
 */
import { useState } from 'react';
import './PrettyHeaderSVG.scss';

function pickRandom(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

function PrettyHeaderSVG({
    title = "Hey! I'm Tyler Smith",
    subtitle = "this is my profile",
    leftEmoji = "🏆",
    rightEmoji = "🏆",
    emojiPool,
    width = 800,
    height = 140,
    className = "",
}) {
    const [chosenEmoji] = useState(() => {
        if (emojiPool && emojiPool.length > 0) {
            return pickRandom(emojiPool);
        }
        return null;
    });

    const left = chosenEmoji ?? leftEmoji;
    const right = chosenEmoji ?? rightEmoji;
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
                                <div className="pretty-header-stagger-0">{left}</div>
                                <div className="pretty-header-stagger-1">{left}</div>
                                <div className="pretty-header-stagger-2">{left}</div>
                            </div>
                            <div className="pretty-header-emoji right">
                                <div className="pretty-header-stagger-0">{right}</div>
                                <div className="pretty-header-stagger-1">{right}</div>
                                <div className="pretty-header-stagger-2">{right}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </foreignObject>
        </svg>
    );
}

export default PrettyHeaderSVG;
