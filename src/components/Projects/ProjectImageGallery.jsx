import { useState, useEffect } from 'react';
import { getAssetUrl } from '../../config';
import './ProjectImageGallery.scss';

function getYoutubeId(value) {
    if (!value) return null;
    const id = String(value).trim();
    const m = id.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : (id.length === 11 ? id : null);
}

function isVideoSrc(src) {
    if (!src || typeof src !== 'string') return false;
    return /\.mp4$/i.test(src);
}

/** Strip HTML tags for use in aria-label, alt, title. */
function captionPlainText(html) {
    if (!html || typeof html !== 'string') return '';
    return html.replace(/<[^>]*>/g, '').trim();
}

function normalizeItem(item) {
    if (typeof item === 'string') {
        const type = isVideoSrc(item) ? 'video' : 'image';
        return { type, src: item, caption: '', offsetX: 0, offsetY: 0 };
    }
    if (item.type === 'youtube' || item.youtubeId) {
        const youtubeId = getYoutubeId(item.youtubeId);
        const timestamp = item.timestamp != null ? Number(item.timestamp) : null;
        return youtubeId
            ? {
                type: 'youtube',
                youtubeId,
                caption: item.caption || '',
                offsetX: item.offsetX ?? 0,
                offsetY: item.offsetY ?? 0,
                ...(timestamp >= 0 && { timestamp: Math.floor(timestamp) })
            }
            : null;
    }
    const type = isVideoSrc(item.src) ? 'video' : 'image';
    return {
        type,
        src: item.src,
        caption: item.caption || '',
        offsetX: item.offsetX ?? 0,
        offsetY: item.offsetY ?? 0
    };
}

function ProjectImageGallery({ images, projectName }) {
    const [enlargedIndex, setEnlargedIndex] = useState(null);
    const items = images && images.length > 0 ? images.map(normalizeItem).filter(Boolean) : [];

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
                    {item.type === 'youtube' ? (
                        <button
                            type="button"
                            className="gallery-tile-trigger"
                            onClick={() => setEnlargedIndex(index)}
                            aria-label={`View ${captionPlainText(item.caption) || 'video'} full size`}
                        >
                            <div className="gallery-tile-youtube-thumb">
                                <img
                                    src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                                    alt={captionPlainText(item.caption) || `Video ${index + 1}`}
                                    className="gallery-tile-image"
                                    loading="lazy"
                                    style={{
                                        objectPosition: `${item.offsetX}% ${item.offsetY}%`
                                    }}
                                    onError={(e) => {
                                        e.target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                                    }}
                                />
                                <span className="gallery-tile-youtube-play" aria-hidden="true" />
                            </div>
                        </button>
                    ) : item.type === 'video' ? (
                        <button
                            type="button"
                            className="gallery-tile-trigger"
                            onClick={() => setEnlargedIndex(index)}
                            aria-label={`View ${captionPlainText(item.caption) || 'video'} full size`}
                        >
                            <video
                                src={getAssetUrl(item.src)}
                                className="gallery-tile-video-native"
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{
                                    objectPosition: `${item.offsetX}% ${item.offsetY}%`
                                }}
                            />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="gallery-tile-trigger"
                            onClick={() => setEnlargedIndex(index)}
                            aria-label={`View ${captionPlainText(item.caption) || `image ${index + 1}`} full size`}
                        >
                            <img
                                src={getAssetUrl(item.src)}
                                alt={captionPlainText(item.caption) || `${projectName} - Image ${index + 1}`}
                                className="gallery-tile-image"
                                style={{
                                    objectPosition: `${item.offsetX}% ${item.offsetY}%`
                                }}
                            />
                        </button>
                    )}
                    {item.caption && (
                        <figcaption className="gallery-tile-caption" dangerouslySetInnerHTML={{ __html: item.caption }} />
                    )}
                </figure>
            ))}
            {enlargedIndex !== null && (
                <div
                    className="gallery-lightbox-backdrop"
                    onClick={closeOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-label={items[enlargedIndex].type === 'youtube' || items[enlargedIndex].type === 'video' ? 'Enlarged video' : 'Enlarged image'}
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
                        {items[enlargedIndex].type === 'youtube' ? (
                            <>
                                <div className="gallery-lightbox-video-wrap">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${items[enlargedIndex].youtubeId}?autoplay=1${items[enlargedIndex].timestamp != null ? `&start=${items[enlargedIndex].timestamp}` : ''}`}
                                        title={captionPlainText(items[enlargedIndex].caption) || 'Video'}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="gallery-lightbox-video"
                                    />
                                </div>
                                {items[enlargedIndex].caption && (
                                    <p className="gallery-lightbox-caption" dangerouslySetInnerHTML={{ __html: items[enlargedIndex].caption }} />
                                )}
                            </>
                        ) : items[enlargedIndex].type === 'video' ? (
                            <>
                                <div className="gallery-lightbox-video-wrap">
                                    <video
                                        src={getAssetUrl(items[enlargedIndex].src)}
                                        className="gallery-lightbox-video-native"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                    />
                                </div>
                                {items[enlargedIndex].caption && (
                                    <p className="gallery-lightbox-caption" dangerouslySetInnerHTML={{ __html: items[enlargedIndex].caption }} />
                                )}
                            </>
                        ) : (
                            <>
                                <img
                                    src={getAssetUrl(items[enlargedIndex].src)}
                                    alt={captionPlainText(items[enlargedIndex].caption) || `${projectName} - Image ${enlargedIndex + 1}`}
                                    className="gallery-lightbox-image"
                                />
                                {items[enlargedIndex].caption && (
                                    <p className="gallery-lightbox-caption" dangerouslySetInnerHTML={{ __html: items[enlargedIndex].caption }} />
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectImageGallery;
