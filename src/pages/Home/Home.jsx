import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.scss';

// Make jQuery available globally for slick
if (typeof window !== 'undefined') {
    window.jQuery = window.$ = $;
}

function Home() {
    const carouselRef = useRef(null);

    useEffect(() => {
        // Dynamically import slick after component mounts
        import('slick-carousel/slick/slick.min.js').then(() => {
            if (carouselRef.current && window.$) {
                const $carousel = $(carouselRef.current);
                
                $(carouselRef.current).slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '60px',
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: true,
                    customPaging: function(slider, i) {
                        // Get the slide element
                        const slide = slider.$slides[i];
                        const $slide = $(slide);
                        
                        // Try to find an image in the slide
                        const $img = $slide.find('img');
                        const $placeholder = $slide.find('.portfolio-image-placeholder');
                        
                        let imageSrc = '';
                        let altText = `Slide ${i + 1}`;
                        
                        if ($img.length > 0) {
                            // If there's an actual image, use it
                            imageSrc = $img.attr('src') || $img.attr('data-src') || '';
                            altText = $img.attr('alt') || altText;
                        } else if ($placeholder.length > 0) {
                            // If there's a placeholder with a data-image attribute, use it
                            imageSrc = $placeholder.attr('data-image') || '';
                            altText = $placeholder.text() || altText;
                        }
                        
                        // Return custom HTML for the dot
                        if (imageSrc) {
                            return `<a><img src="${imageSrc}" alt="${altText}" class="slick-dot-image" /></a>`;
                        } else {
                            // Fallback to default dot if no image
                            return `<a>${i + 1}</a>`;
                        }
                    },
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                centerMode: true,
                                centerPadding: '20px',
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
        });

        return () => {
            if (carouselRef.current && window.$ && $(carouselRef.current).hasClass('slick-initialized')) {
                $(carouselRef.current).slick('unslick');
            }
        };
    }, []);

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
                    {/* <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        Some projects I'm proud of.
                    </p> */}
                </div>
                <div className="portfolio-carousel" ref={carouselRef}>
                    <article className="portfolio-item">
                        <div className="portfolio-image-placeholder" data-image="/public/assets/images/thumb-aiw.png">Project 1</div>
                        <h3 className="portfolio-item-title">Highlight Project</h3>
                        <p className="portfolio-item-text">
                            Short description of a flagship project, outcome, or achievement.
                        </p>
                    </article>
                    <article className="portfolio-item">
                        <div className="portfolio-image-placeholder" data-image="">Project 2</div>
                        <h3 className="portfolio-item-title">Visual Explorations</h3>
                        <p className="portfolio-item-text">
                            A place for visuals, motion studies, or experimental pieces.
                        </p>
                    </article>
                    <article className="portfolio-item">
                        <div className="portfolio-image-placeholder" data-image="">Project 3</div>
                        <h3 className="portfolio-item-title">Client Work</h3>
                        <p className="portfolio-item-text">
                            Space to feature collaborations, commissions, or shipped features.
                        </p>
                    </article>
                    <article className="portfolio-item">
                        <div className="portfolio-image-placeholder" data-image="">Project 4</div>
                        <h3 className="portfolio-item-title">In Progress</h3>
                        <p className="portfolio-item-text">
                            Room for upcoming or in-progress ideas you want to tease.
                        </p>
                    </article>
                </div>
                <p className="portfolio-caption">
                    Use arrows or swipe to browse — swap these placeholders with your own images and copy.
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

