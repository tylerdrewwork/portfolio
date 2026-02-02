import TableOfContents from './TableOfContents';
import AboutLinks from './AboutLinks';
import './About.scss';

function About() {
    return (
        <section id="about" className="about-section about-section-toc">
            <AboutLinks layout="row" className="sidebar-links" />
            <TableOfContents />
        </section>
    );
}

export default About;
