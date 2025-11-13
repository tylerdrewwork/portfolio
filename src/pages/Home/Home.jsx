import HeroIllustration from './HeroIllustration';
import './Home.scss';

function Home() {
    return (
        <main className="main-content">
            <div className="hero-section">
                <div className="hero-text-container">
                    <div className="hero-label">
                        <span className="pause-icon">⏸</span>
                        <span>DESIGNING</span>
                    </div>
                    <HeroIllustration />
                    <h1 className="hero-title">TYLER'S PLACE</h1>
                    <nav className="hero-nav">
                        <a href="#" className="hero-link">Game design</a>
                        <a href="#" className="hero-link">Product design</a>
                        <a href="#" className="hero-link">About me</a>
                        <a href="#" className="hero-link">Resume</a>
                    </nav>
                </div>
            </div>
        </main>
    );
}

export default Home;

