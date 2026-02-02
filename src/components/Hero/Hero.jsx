import { getAssetUrl } from '../../config';
import './Hero.scss';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-media">
                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={getAssetUrl('assets/videos/hero_video.mp4')} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-text-overlay">
                    <h1 className="hero-title rotate-text">TYLER SMITH</h1>
                    <p className="hero-subtitle">
                        A small corner of the internet for my work, story, and ways to reach me.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
