/**
 * Animated header with gradient background and optional emoji decorations.
 * Original idea: https://www.css-tricks.com
 * Version 1.0 by Sakiskid | https://github.com/Sakiskid
 * Pass emojiPool (array of emoji strings) to pick one at random on each page load for both sides.
 */
import { useState, useRef, useEffect } from 'react';
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
    showEmoji = true,
    titleTracers = false,
    tracerOpacity = 1,
    fontSize,
    animationSpeed = 1,
    animationAmount = 1,
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

    const titleBlockRef = useRef(null);
    const emojiContainerRef = useRef(null);

    useEffect(() => {
        if (!showEmoji || !titleBlockRef.current || !emojiContainerRef.current) return;
        const titleEl = titleBlockRef.current;
        const emojiEl = emojiContainerRef.current;

        const syncWidth = () => {
            const w = titleEl.getBoundingClientRect().width;
            var padding = 300;
            var newWidth = w + padding;
            emojiEl.style.width = `${newWidth}px`;
        };

        syncWidth();
        const ro = new ResizeObserver(syncWidth);
        ro.observe(titleEl);
        return () => ro.disconnect();
    }, [showEmoji, title, subtitle, titleTracers]);

    const rootStyle = {
        ...(fontSize != null && {
            '--pretty-header-font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
            '--pretty-header-subtitle-size': typeof fontSize === 'number' ? `${fontSize * 0.5}px` : `calc(${fontSize} * 0.5)`,
            '--pretty-header-emoji-size': typeof fontSize === 'number' ? `${fontSize * 2}px` : `calc(${fontSize} * 2)`,
        }),
        ...(animationSpeed != null && { '--pretty-header-speed': Number(animationSpeed) }),
        ...(animationAmount != null && { '--pretty-header-amount': Number(animationAmount) }),
        ...(tracerOpacity != null && { '--pretty-header-tracer-opacity': Number(tracerOpacity) }),
    };

    return (
        <div
            className={`pretty-header ${className}`.trim()}
            style={{
                width: '100%',
                maxWidth: width,
                aspectRatio: `${width} / ${height}`,
                display: 'block',
            }}
        >
            <div
                className={`pretty-header-root${showEmoji ? '' : ' pretty-header-no-emoji'}${titleTracers ? ' pretty-header-title-tracers' : ''}`}
                style={Object.keys(rootStyle).length ? rootStyle : undefined}
            >
                <div className="pretty-header-container">
                    <div ref={titleBlockRef} className="pretty-header-title-block">
                        {titleTracers ? (
                            <div className="pretty-header-title-wrap">
                                <h1 className="pretty-header-title-tracer pretty-header-title-stagger-0">{title}</h1>
                                <span className="pretty-header-title-tracer pretty-header-title-stagger-1" aria-hidden="true">{title}</span>
                                <span className="pretty-header-title-tracer pretty-header-title-stagger-2" aria-hidden="true">{title}</span>
                            </div>
                        ) : (
                            <h1>{title}</h1>
                        )}
                        {subtitle != null && String(subtitle).trim() !== '' && <p>{subtitle}</p>}
                    </div>
                    <div ref={emojiContainerRef} className="pretty-header-emoji-container">
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
        </div>
    );
}

export default PrettyHeaderSVG;
