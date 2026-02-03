import AboutLinks from './AboutLinks';
import './About.scss';
import PrettyHeaderSVG from '../Utils/PrettyHeaderSVG';
import AnimatedText from '../Utils/AnimatedText';

function AboutIntro() {
    return (
        <section className="about-intro">
            <PrettyHeaderSVG
                className="about-name-svg"
                title="Hi! I'm Tyler Smith"
                subtitle=""
                emojiPool={['🏆', '😌', '😲', '🤠', '🙀', '🐈‍⬛', '👨‍💻', '🧙', '🤹‍♂️', '🎊', '🎩', '🔊', '🎧', '🎙️', '🎹']}
                showEmoji={false}
            />
            <div className="about-bio">
                 <p style={{ textAlign: 'center' , fontSize: '1.25rem' , fontWeight: '600' }}>
                    Developing for 10 years in Unity C#, and 4+ years professionally
                </p>
                <p>
                    I <AnimatedText animation="bounce">LOVE</AnimatedText> building games, toys, tools, and community-engaging experiences that people can enjoy or learn from. 
                    I have an especially strong passion for physics and simulation games, which you can see in my projects below.
                </p>
                <p>
                    My recent work includes <span id="aiw-fx-1">AI</span><span id="aiw-fx-2"> Warehouse</span>, where I led the game development of videos, architected systems, tooling, agents, video mechanics, and environments. I helped drive over <b>60 million views</b> and brought over <b>15k members</b> into our Discord community!! I take a lot of pride in our videos and the amazing community we have.
                </p>
            </div>
            <AboutLinks className="about-links-intro" />
        </section>
    );
}

export default AboutIntro;
