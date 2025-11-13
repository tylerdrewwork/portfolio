import './PlaceholderImage.scss';

function PlaceholderImage({ 
  width = 600, 
  height = 400, 
  text = 'Placeholder Image',
  backgroundColor = '000000',
  textColor = 'FFFFFF',
  format = 'png',
  className = '',
  overlayText = '',
  overlayPosition = 'center'
}) {
  // Build the placehold.co URL
  const imageUrl = `https://placehold.co/${width}x${height}/${backgroundColor}/${textColor}.${format}?text=${encodeURIComponent(text)}`;

  return (
    <div className={`placeholder-image-container ${className}`}>
      <img 
        src={imageUrl} 
        alt={text}
        className="placeholder-image"
      />
      {overlayText && (
        <div className={`placeholder-overlay overlay-${overlayPosition}`}>
          <p className="overlay-text">{overlayText}</p>
        </div>
      )}
    </div>
  );
}

export default PlaceholderImage;

