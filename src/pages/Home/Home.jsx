import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import AboutIntro from '../../components/About/AboutIntro';
import Projects from '../../components/Projects/Projects';
import AboutLinks from '../../components/About/AboutLinks';
import Contact from '../../components/Contact/Contact';
import './Home.scss';

function Home() {
    return (
        <main className="main-content">
            {/* <Hero /> */}
            <div className="content-grid">
                <aside className="content-sidebar">
                    <About />
                </aside>
                <div className="content-panel" data-content-panel>
                    <div className="content-panel-inner">
                        <AboutIntro />
                        <Projects />
                        <section className="about-links-footer-wrap" aria-label="Links">
                            <AboutLinks className="about-links-footer" />
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}   

export default Home;

