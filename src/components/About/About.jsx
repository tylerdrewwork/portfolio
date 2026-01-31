import TableOfContents from './TableOfContents';
import './About.scss';

function About() {
    return (
        <section id="about" className="about-section">
            <h1 className="about-name">Hi, I&apos;m Tyler Smith</h1>
            <div className="about-bio">
                <p>
                    This is a space to write a few honest paragraphs about who you are, what you&apos;re
                    curious about, and how you like to work. Talk about your background, the kind of
                    problems you enjoy solving, and what you&apos;re exploring next.
                </p>
                <p>
                    You can keep this conversational and human — it&apos;s meant to feel like a short
                    introduction rather than a resume.
                </p>
                <p>
                    Recent work includes:
                    <ul>
                        <li>AI Warehouse lead dev - producing videos, creating systems, tooling, agents, environments.</li>
                    </ul>
                </p>
            </div>
            <TableOfContents />
            <div className="about-links">
                <a href="#" className="about-link">→ Resumé</a>
                <a href="#" className="about-link">→ LinkedIn</a>
                <a href="#" className="about-link">→ Twitter</a>
                <a href="#" className="about-link">→ GitHub</a>
            </div>
        </section>
    );
}

export default About;
