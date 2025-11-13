import PlaceholderImage from '../../components/PlaceholderImage';

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <div className="illustration-placeholder">
        <div className="illustration-content">
          <div className="illustration-bg"></div>
          <div className="illustration-figure"></div>
          <PlaceholderImage width={800} height={400} text="Placeholder Image" />
        </div>
      </div>
    </div>
  );
}

export default HeroIllustration;