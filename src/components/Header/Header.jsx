import './Header.scss';
import './RotateText.scss';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div id="resume-link"className="rotate-text-container">
                    <p className="rotate-text">Download Resume</p>
                </div>
                <div>
                    <p id="contact-link">Contact</p>
                </div>
                
                {/* <a href="#hero" className="navbar-logo">TYLER'S PLACE</a>
                <div className="navbar-links">
                    <a href="#portfolio" className="navbar-link">Portfolio</a>
                    <a href="#about" className="navbar-link">About Me</a>
                    <a href="#contact" className="navbar-link">Contact</a>
                </div> */}
            </nav>
        </header>
    );
}

export default Header;

