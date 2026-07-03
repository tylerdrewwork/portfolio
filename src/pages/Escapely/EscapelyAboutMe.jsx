import AboutLinks from '../../components/About/AboutLinks';
import PrettyHeaderSVG from '../../components/Utils/PrettyHeaderSVG';
import AnimatedText from '../../components/Utils/AnimatedText';
import '../../components/About/About.scss';

function EscapelyAboutMe() {
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
                    D<AnimatedText animation="flashglow" color="#00ff41">e</AnimatedText>veloping for 10 years in Unity C#, and 4+ years profes<AnimatedText animation="flashglow" color="#00ff41">s</AnimatedText>ionally
                </p>
                <p>
                    I <AnimatedText animation="bounce">LOVE</AnimatedText> building games, toys, tools, and <AnimatedText animation="flashglow" color="#00ff41">c</AnimatedText>ommunity-engaging experiences th<AnimatedText animation="flashglow" color="#00ff41">a</AnimatedText>t people can enjoy or learn from. 
                    I have an es<AnimatedText animation="flashglow" color="#00ff41">p</AnimatedText>ecially strong passion for physics and simulation games, which you can see in my projects below.
                </p>
                <p>
                    My recent work includes <span id="aiw-fx-1">AI</span><span id="aiw-fx-2"> Warehouse</span>, where I led the game development of videos, architected systems, tooling, agents, video mechanics, and environments. I helped driv<AnimatedText animation="flashglow" color="#00ff41">e</AnimatedText> over <b>60 million views</b> and brought over <b>15k members</b> into our Discord community!<AnimatedText animation="flashglow" color="#00ff41">!</AnimatedText> I take a lot of pride in our videos and the amazing community we have.
                </p>
            </div>
            <AboutLinks className="about-links-intro" />
        </section>
    );
}

export default EscapelyAboutMe;
