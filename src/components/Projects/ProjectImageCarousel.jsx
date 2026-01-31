import { useState, useEffect } from 'react';
import './ProjectImageCarousel.scss';

function ProjectImageCarousel({ images, projectName }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="project-image-carousel">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${projectName} - Image ${index + 1}`}
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
            {images.length > 1 && (
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectImageCarousel;
