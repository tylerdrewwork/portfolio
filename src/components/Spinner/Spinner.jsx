import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import spinnerData from './spinnerData';
import './Spinner.scss';

// Make jQuery available globally for slick
if (typeof window !== 'undefined') {
    window.jQuery = window.$ = $;
}

function InitializeSlick(carouselRef) {
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
                    const $placeholder = $slide.find('.spinner-image-placeholder');
                    
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
}

function Spinner() {
    const carouselRef = useRef(null);

    useEffect(() => {
        InitializeSlick(carouselRef);
    }, []);

    return (
        <section id="spinner" className="spinner-section">
            <div className="section-header">
                {/* <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Some projects I'm proud of.
                </p> */}
            </div>
            <div className="spinner-carousel" ref={carouselRef}>
                {spinnerData.map((project) => (
                    <article key={project.id} className="spinner-item">
                        <div 
                            className="spinner-image-placeholder" 
                            data-image={project.thumbnailImage}
                        >
                            Project {project.id}
                        </div>
                        <h3 className="spinner-item-title">{project.projectName}</h3>
                        <p className="spinner-item-text">
                            {project.description}
                        </p>
                    </article>
                ))}
            </div>
            <p className="spinner-caption">
                Use arrows or swipe to browse — swap these placeholders with your own images and copy.
            </p>
        </section>
    );
}

export default Spinner;
