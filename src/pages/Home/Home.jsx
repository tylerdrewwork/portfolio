import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import './Home.scss';

function Home() {
    return (
        <main className="main-content">
            {/* <Hero /> */}
            <div className="content-grid">
                <About />
                <div className="content-panel" data-content-panel>
                    <Projects />
                </div>
            </div>
            <Contact />
        </main>
    );
}   

export default Home;

