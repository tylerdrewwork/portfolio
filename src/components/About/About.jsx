import TableOfContents from './TableOfContents';
import AboutLinks from './AboutLinks';
import './About.scss';

function About() {
    return (
        <section id="about" className="about-section about-section-toc">
            <div className="about-links-particle-wrap">
                <div className="about-links-particles" aria-hidden="true">
                    <div className="light x1" />
                    <div className="light x2" />
                    <div className="light x3" />
                    <div className="light x4" />
                    <div className="light x5" />
                    <div className="light x6" />
                    <div className="light x7" />
                    <div className="light x8" />
                    <div className="light x9" />
                </div>
                <AboutLinks layout="row" className="sidebar-links" />
            </div>
            <TableOfContents />
        </section>
    );
}

export default About;
