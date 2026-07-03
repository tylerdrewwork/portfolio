import { useEffect, useRef, useState } from 'react';
import './EscapelyHireMe.scss';

const CONFETTI_COLORS = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6fff', '#ffa94d', '#a78bfa'];
const CONFETTI_COUNT = 80;

function createConfettiPiece(side, canvasWidth, canvasHeight) {
    const margin = canvasWidth * 0.18;
    const x = side === 'left'
        ? Math.random() * margin
        : canvasWidth - Math.random() * margin;

    return {
        x,
        y: -20 - Math.random() * canvasHeight * 0.5,
        width: 6 + Math.random() * 6,
        height: 10 + Math.random() * 10,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        fallSpeed: 1.5 + Math.random() * 2.5,
        wobbleSpeed: 0.5 + Math.random() * 1.5,
        wobbleAmp: 15 + Math.random() * 25,
        wobbleOffset: Math.random() * Math.PI * 2,
        opacity: 0.8 + Math.random() * 0.2,
    };
}

function EscapelyHireMe() {
    const canvasRef = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRevealed(true), 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animId;
        let pieces = [];
        let elapsed = 0;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < CONFETTI_COUNT; i++) {
            const side = i < CONFETTI_COUNT / 2 ? 'left' : 'right';
            pieces.push(createConfettiPiece(side, canvas.width, canvas.height));
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            elapsed++;

            for (const p of pieces) {
                p.y += p.fallSpeed;
                p.rotation += p.rotationSpeed;
                const wobble = Math.sin(elapsed * 0.03 * p.wobbleSpeed + p.wobbleOffset) * p.wobbleAmp;

                ctx.save();
                ctx.translate(p.x + wobble, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
                ctx.restore();

                if (p.y > canvas.height + 40) {
                    const side = p.x < canvas.width / 2 ? 'left' : 'right';
                    Object.assign(p, createConfettiPiece(side, canvas.width, canvas.height));
                    p.y = -20 - Math.random() * 60;
                }
            }

            animId = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="escapely-hireme-wrap">
            <canvas ref={canvasRef} className="escapely-confetti-canvas" />
            <div className={`escapely-fade-in ${revealed ? 'revealed' : ''}`} />
            <main className={`escapely-hireme ${revealed ? 'revealed' : ''}`}>
                <h1>You escaped!</h1>
                <p>Thanks for finding this page.</p>
            </main>
        </div>
    );
}

export default EscapelyHireMe;
