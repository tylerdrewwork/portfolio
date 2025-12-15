import './Home.scss';

function Home() {
    return (
        <main className="main-content">
            {/* Hero section with space for your MP4 */}
            <section id="hero" className="hero-section">
                <div className="hero-media">
                    <video
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        {/* Replace this src with the path to your MP4 */}
                        <source src="/public/hero_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-text-overlay">
                        <h1 className="hero-title rotate-text">TYLER SMITH</h1>
                        <p className="hero-subtitle">
                            A small corner of the internet for my work, story, and ways to reach me.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio / achievements section */}
            <section id="portfolio" className="portfolio-section">
                <div className="section-header">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        Some projects I'm proud of.
                    </p>
                </div>
                <div className="portfolio-gallery">
                    <div className="portfolio-track">
                        <article className="portfolio-item">
                            <div className="portfolio-image-placeholder">Project 1</div>
                            <h3 className="portfolio-item-title">Highlight Project</h3>
                            <p className="portfolio-item-text">
                                Short description of a flagship project, outcome, or achievement.
                            </p>
                        </article>
                        <article className="portfolio-item">
                            <div className="portfolio-image-placeholder">Project 2</div>
                            <h3 className="portfolio-item-title">Visual Explorations</h3>
                            <p className="portfolio-item-text">
                                A place for visuals, motion studies, or experimental pieces.
                            </p>
                        </article>
                        <article className="portfolio-item">
                            <div className="portfolio-image-placeholder">Project 3</div>
                            <h3 className="portfolio-item-title">Client Work</h3>
                            <p className="portfolio-item-text">
                                Space to feature collaborations, commissions, or shipped features.
                            </p>
                        </article>
                        <article className="portfolio-item">
                            <div className="portfolio-image-placeholder">Project 4</div>
                            <h3 className="portfolio-item-title">In Progress</h3>
                            <p className="portfolio-item-text">
                                Room for upcoming or in-progress ideas you want to tease.
                            </p>
                        </article>
                    </div>
                </div>
                <p className="portfolio-caption">
                    Scroll horizontally to browse — swap these placeholders with your own images and copy.
                </p>
            </section>

            {/* About me section */}
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

            {/* Contact section */}
            <section id="contact" className="contact-section">
                <div className="section-header">
                    <h2 className="section-title">Contact</h2>
                </div>
                <div className="contact-card">
                    <p className="contact-text">
                        Drop a quick note, or swap this area out with your preferred contact links.
                    </p>
                    <form
                        className="contact-form"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <div className="form-row">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="form-input"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="form-row">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="form-input form-textarea"
                                placeholder="What would you like to talk about?"
                                rows="4"
                            />
                        </div>
                        <button type="submit" className="form-submit">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Home;

