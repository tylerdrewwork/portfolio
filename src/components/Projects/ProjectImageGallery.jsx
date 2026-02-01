import { useState, useEffect } from 'react';
import './ProjectImageGallery.scss';

function normalizeImage(item) {
    if (typeof item === 'string') {
        return { src: item, caption: '', offsetX: 0, offsetY: 0 };
    }
    return {
        src: item.src,
        caption: item.caption || '',
        offsetX: item.offsetX ?? 0,
        offsetY: item.offsetY ?? 0
    };
}

function ProjectImageGallery({ images, projectName }) {
    const [enlargedIndex, setEnlargedIndex] = useState(null);
    const items = images && images.length > 0 ? images.map(normalizeImage) : [];

    useEffect(() => {
        if (enlargedIndex === null) return;
        const onEscape = (e) => e.key === 'Escape' && setEnlargedIndex(null);
        document.addEventListener('keydown', onEscape);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onEscape);
            document.body.style.overflow = '';
        };
    }, [enlargedIndex]);

    const closeOverlay = () => setEnlargedIndex(null);

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="project-image-gallery">
            {items.map((item, index) => (
                <figure key={index} className="gallery-tile">
                    <button
                        type="button"
                        className="gallery-tile-trigger"
                        onClick={() => setEnlargedIndex(index)}
                        aria-label={`View ${item.caption || `image ${index + 1}`} full size`}
                    >
                        <img
                            src={item.src}
                            alt={item.caption || `${projectName} - Image ${index + 1}`}
                            className="gallery-tile-image"
                            style={{
                                objectPosition: `${item.offsetX}% ${item.offsetY}%`
                            }}
                        />
                    </button>
                    {item.caption && (
                        <figcaption className="gallery-tile-caption">
                            {item.caption}
                        </figcaption>
                    )}
                </figure>
            ))}
            {enlargedIndex !== null && (
                <div
                    className="gallery-lightbox-backdrop"
                    onClick={closeOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Enlarged image"
                >
                    <button
                        type="button"
                        className="gallery-lightbox-close"
                        onClick={closeOverlay}
                        aria-label="Close"
                    />
                    <div
                        className="gallery-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={items[enlargedIndex].src}
                            alt={items[enlargedIndex].caption || `${projectName} - Image ${enlargedIndex + 1}`}
                            className="gallery-lightbox-image"
                        />
                        {items[enlargedIndex].caption && (
                            <p className="gallery-lightbox-caption">{items[enlargedIndex].caption}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectImageGallery;
