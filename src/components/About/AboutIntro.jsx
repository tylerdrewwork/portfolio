import './About.scss';

function AboutIntro() {
    return (
        <section className="about-intro">
            <h1 className="about-name">Hi! I'm Tyler Smith</h1>
            <div className="about-bio">
                <p>
                    Software Engineer with almost 10 years of C# Unity experience and 4+ years of professional experience.
                </p>
                <p>
                    My strengths are in game design, development, and systems architecture.
                    I LOVE building games, toys, tools, and experiences that people can enjoy or learn from. I especially have a strong passion for physics and simulation games.
                </p>
                <p>
                    Recent work includes:
                    <br />
                    AI Warehouse, lead dev - producing videos, creating systems, tooling, agents, environments. Responsible for architecture of mechanics and systems.
                    <br />
                    WipeRecord, lead dev - built tools for sales team, paralegal team, and our client base. 
                </p>
            </div>
            <div className="about-links">
                <a href="#" className="about-link">→ Resumé</a>
                <a href="#" className="about-link">→ LinkedIn</a>
                <a href="#" className="about-link">→ Twitter</a>
                <a href="#" className="about-link">→ GitHub</a>
            </div>
        </section>
    );
}

export default AboutIntro;
