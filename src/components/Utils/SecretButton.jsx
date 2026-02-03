/**
 * Button that only becomes visible when the user's mouse is near it.
 * Optional: always show on mobile/touch (no hover).
 */
import { useState, useRef, useCallback, useEffect } from 'react';
import './SecretButton.scss';

function distanceToRect(clientX, clientY, rect) {
    const x = Math.max(rect.left, Math.min(clientX, rect.right));
    const y = Math.max(rect.top, Math.min(clientY, rect.bottom));
    return Math.hypot(clientX - x, clientY - y);
}

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' && window.matchMedia('(max-width: 768px), (hover: none)').matches
    );
    useEffect(() => {
        const mql = window.matchMedia('(max-width: 768px), (hover: none)');
        const handler = () => setIsMobile(mql.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);
    return isMobile;
}

function SecretButton({
    children,
    onClick,
    className = '',
    wrapperClassName = '',
    alwaysShowOnMobile = false,
    proximity = 120,
    hideDelayMs = 400,
    ...rest
}) {
    const wrapperRef = useRef(null);
    const [isNearby, setIsNearby] = useState(false);
    const hideTimeoutRef = useRef(null);
    const isMobile = useIsMobile();

    const updateNearby = useCallback(
        (clientX, clientY) => {
            const el = wrapperRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            // Don't show as "near" if the wrapper isn't laid out yet (avoids false positive)
            if (rect.width <= 0 || rect.height <= 0) return;
            const d = distanceToRect(clientX, clientY, rect);
            const near = d <= proximity;

            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
                hideTimeoutRef.current = null;
            }

            if (near) {
                setIsNearby(true);
            } else {
                hideTimeoutRef.current = setTimeout(() => {
                    setIsNearby(false);
                    hideTimeoutRef.current = null;
                }, hideDelayMs);
            }
        },
        [proximity, hideDelayMs]
    );

    useEffect(() => {
        const onMove = (e) => updateNearby(e.clientX, e.clientY);
        const onLeave = () => {
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
            setIsNearby(false);
        };
        document.addEventListener('mousemove', onMove, { passive: true });
        document.body.addEventListener('mouseleave', onLeave);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.body.removeEventListener('mouseleave', onLeave);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };
    }, [updateNearby]);

    // Only show when in range (desktop) or always on mobile when allowed
    const visible = alwaysShowOnMobile && isMobile ? true : isNearby;

    return (
        <span
            ref={wrapperRef}
            className={`secret-button-wrap ${visible ? 'secret-button-visible' : ''} ${wrapperClassName}`.trim()}
        >
            <button
                type="button"
                className={`secret-button ${className}`.trim()}
                onClick={onClick}
                aria-hidden={!visible}
                tabIndex={visible ? 0 : -1}
                {...rest}
            >
                {children}
            </button>
        </span>
    );
}

export default SecretButton;
