import Hero from '../../components/Hero/Hero';
import Spinner from '../../components/Spinner/Spinner';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import './Home.scss';

function Home() {
    return (
        <main className="main-content">
            {/* <Hero /> */}
            {/* <Spinner /> */}
            <About />
            <Contact />
        </main>
    );
}

export default Home;

