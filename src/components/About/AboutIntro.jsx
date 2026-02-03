import AboutLinks from './AboutLinks';
import './About.scss';
import PrettyHeaderSVG from '../Utils/PrettyHeaderSVG';

function AboutIntro() {
    return (
        <section className="about-intro">
            <PrettyHeaderSVG className="about-name-svg" title="Hi! I'm Tyler Smith" />
            <div className="about-bio">
                <p>
                    Developing for 10 years in Unity C#, and 4+ years professionally.
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
            <AboutLinks className="about-links-intro" />
        </section>
    );
}

export default AboutIntro;
