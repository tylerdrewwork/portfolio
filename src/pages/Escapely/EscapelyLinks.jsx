import { useState, useCallback, useEffect } from 'react';
import '../../components/About/About.scss';
import { contactInfo } from '../../config';
import PrettyHeaderSVG from '../../components/Utils/PrettyHeaderSVG';

function EscapelyLinks({ className = '' }) {
    const { linkedin, resume, email } = contactInfo;
    const [copyLabel, setCopyLabel] = useState('Copy email');
    const [popup, setPopup] = useState(null);

    const copyEmail = useCallback(async (e) => {
        const x = e?.clientX ?? 0;
        const y = e?.clientY ?? 0;
        try {
            await navigator.clipboard.writeText(email);
            setCopyLabel('Copied!');
            setPopup({ x, y });
            setTimeout(() => setCopyLabel('Copy email'), 2000);
            setTimeout(() => setPopup(null), 5000);
        } catch {
            setCopyLabel('Copy failed');
        }
    }, [email]);

    const closePopup = useCallback(() => setPopup(null), []);

    const openAndDownloadResume = useCallback((e) => {
        e.preventDefault();
        if (!resume) return;
        window.open(resume, '_blank', 'noopener,noreferrer');
        const a = document.createElement('a');
        a.href = resume;
        a.download = 'Tyler_Smith_Experienced_C#_Engineer.pdf';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }, [resume]);

    useEffect(() => {
        if (!popup) return;
        const { x: originX, y: originY } = popup;
        const handleMove = (e) => {
            const dist = Math.hypot(e.clientX - originX, e.clientY - originY);
            if (dist >= 400) setPopup(null);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [popup]);

    return (
        <nav
            className={`about-links ${className}`.trim()}
            aria-label="Profile links"
        >
            <div className="about-links-email-block" onClick={(e) => copyEmail(e)}>
                <PrettyHeaderSVG
                    title="Email"
                    subtitle=""
                    showEmoji={false}
                    fontSize="1.75rem"
                    animationSpeed={6}
                    animationAmount={10}
                    titleTracers={true}
                    rainbowTracers={true}
                    tracerCount={3}
                    tracerDelay={150}
                    tracerAnimationAmount={30}
                />
            </div>
            {popup && (
                <div
                    className="about-links-copy-popup"
                    style={{ left: popup.x + 12, top: popup.y + 12 }}
                    role="tooltip"
                >
                    <p className="about-links-copy-popup-text">Copied to clipboard!</p>
                    <a href={`mailto:${email}`} className="about-links-copy-popup-link" onClick={closePopup}>
                        Click here to open it in email app.
                    </a>
                    <button type="button" className="about-links-copy-popup-close" onClick={(e) => { e.preventDefault(); closePopup(); }} aria-label="Close">×</button>
                </div>
            )}
            <a href={resume} className="about-links-resume-block" onClick={openAndDownloadResume} target="_blank" rel="noopener noreferrer" aria-label="Open and download resume (PDF)">
                <PrettyHeaderSVG
                    title="Resume"
                    subtitle=""
                    showEmoji={false}
                    fontSize="1.25rem"
                    animationSpeed={4}
                    animationAmount={2}
                    titleTracers={false}
                />
            </a>

            <a href={linkedin} className="about-links-resume-block" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <PrettyHeaderSVG
                    title="LinkedIn"
                    subtitle=""
                    showEmoji={false}
                    fontSize="1.25rem"
                    animationSpeed={4}
                    animationAmount={2}
                    titleTracers={false}
                />
            </a>
        </nav>
    );
}

export default EscapelyLinks;
