import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../../components/About/About';
import EscapelyAboutMe from './EscapelyAboutMe';
import Projects from '../../components/Projects/Projects';
import AboutLinks from '../../components/About/AboutLinks';
import '../Home/Home.scss';
import './Escapely.scss';

function EscapelyHome() {
    const [input, setInput] = useState('');
    const [fading, setFading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        if (value.toLowerCase() === 'escape!' && !fading) {
            setFading(true);
            setTimeout(() => {
                navigate('/escapely/hireme');
            }, 800);
        }
    };

    return (
        <>
            <div className={`escapely-fade-overlay ${fading ? 'active' : ''}`} />
            <main className="main-content">
                <div className="content-grid">
                    <aside className="content-sidebar">
                        <About />
                    </aside>
                    <div className="content-panel" data-content-panel>
                        <div className="content-panel-inner">
                            <EscapelyAboutMe />
                            <div className="escapely-input-box">
                                <input
                                    className="escapely-input"
                                    type="text"
                                    value={input}
                                    onChange={handleChange}
                                    placeholder="What could it be...?"
                                />
                            </div>
                            <Projects />
                            <section className="about-links-footer-wrap" aria-label="Links">
                                <AboutLinks className="about-links-footer" />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default EscapelyHome;
