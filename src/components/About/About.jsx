import './About.scss';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-card">
                <p>
                    This is a space to write a few honest paragraphs about who you are, what you&apos;re
                    curious about, and how you like to work. Talk about your background, the kind of
                    problems you enjoy solving, and what you&apos;re exploring next.
                </p>
                <p>
                    You can keep this conversational and human — it&apos;s meant to feel like a short
                    introduction rather than a resume.
                </p>
            </div>
        </section>
    );
}

export default About;
