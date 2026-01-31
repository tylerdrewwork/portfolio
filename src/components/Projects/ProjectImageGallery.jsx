import './ProjectImageGallery.scss';

function normalizeImage(item) {
    if (typeof item === 'string') {
        return { src: item, caption: '' };
    }
    return { src: item.src, caption: item.caption || '' };
}

function ProjectImageGallery({ images, projectName }) {
    if (!images || images.length === 0) {
        return null;
    }

    const items = images.map(normalizeImage);

    return (
        <div className="project-image-gallery">
            {items.map((item, index) => (
                <figure key={index} className="gallery-tile">
                    <img
                        src={item.src}
                        alt={item.caption || `${projectName} - Image ${index + 1}`}
                        className="gallery-tile-image"
                    />
                    {item.caption && (
                        <figcaption className="gallery-tile-caption">
                            {item.caption}
                        </figcaption>
                    )}
                </figure>
            ))}
        </div>
    );
}

export default ProjectImageGallery;
