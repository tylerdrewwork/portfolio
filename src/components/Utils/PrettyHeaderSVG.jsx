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
    tracerCount = 2,
    tracerDelay = 250,
    tracerAnimationAmount,
    rainbowTracers = false,
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

    const numTracers = Math.max(1, Math.min(6, Math.floor(Number(tracerCount)) || 2));

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
        ...(tracerDelay != null && { '--pretty-header-tracer-delay': Number(tracerDelay) }),
        ...(tracerAnimationAmount != null && { '--pretty-header-tracer-amount': Number(tracerAnimationAmount) }),
    };

    return (
        <div
            className={`pretty-header ${className}`.trim()}
        >
            <div
                className={`pretty-header-root${showEmoji ? '' : ' pretty-header-no-emoji'}${titleTracers ? ' pretty-header-title-tracers' : ''}${rainbowTracers ? ' pretty-header-rainbow-tracers' : ''}`}
                style={Object.keys(rootStyle).length ? rootStyle : undefined}
            >
                <div className="pretty-header-container">
                    <div ref={titleBlockRef} className="pretty-header-title-block">
                        {titleTracers ? (
                            <div className="pretty-header-title-wrap">
                                {/* h1 is the main text in front; only the spans are tracers (they use text-shadow and stagger for the trail effect). */}
                                <h1 className="pretty-header-title-stagger-0">{title}</h1>
                                {[...Array(numTracers)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`pretty-header-title-tracer pretty-header-title-stagger-${i + 1}${rainbowTracers ? ' pretty-header-tracer-rainbow' : ''}`}
                                        aria-hidden="true"
                                    >
                                        {title}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <h1>{title}</h1>
                        )}
                        {subtitle != null && String(subtitle).trim() !== '' && <p>{subtitle}</p>}
                    </div>
                    <div ref={emojiContainerRef} className="pretty-header-emoji-container">
                        <div className="pretty-header-emoji left">
                            <div className="pretty-header-stagger-0">{left}</div>
                            {[...Array(numTracers)].map((_, i) => (
                                <div key={i} className={`pretty-header-stagger-${i + 1}`}>{left}</div>
                            ))}
                        </div>
                        <div className="pretty-header-emoji right">
                            <div className="pretty-header-stagger-0">{right}</div>
                            {[...Array(numTracers)].map((_, i) => (
                                <div key={i} className={`pretty-header-stagger-${i + 1}`}>{right}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrettyHeaderSVG;
