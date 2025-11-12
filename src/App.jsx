import contactInfo from './config';

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="profile-card">
            {contactInfo.openToWork && (
              <div className="open-badge">Open to Work</div>
            )}
            <div className="profile-image">
              <div className="profile-avatar"></div>
            </div>
            <h2 className="profile-name">{contactInfo.fullname}</h2>
            <p className="profile-handle">{contactInfo.handle}</p>
            <p className="profile-location">{contactInfo.location}</p>
            <p className="profile-role">{contactInfo.role}</p>
            <div className="profile-experience">
              <span>{contactInfo.yearsExperience} Years Experience</span>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            <button className="nav-item">Profile</button>
            <button className="nav-item active">Portfolio</button>
          </nav>
          
          <button className="bookmark-btn">Bookmark</button>
        </div>
      </aside>
      
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text-container">
            <div className="hero-label">
              <span className="pause-icon">⏸</span>
              <span>DESIGNING</span>
            </div>
            <h1 className="hero-title">WORLD OF PLAY</h1>
            <nav className="hero-nav">
              <a href="#" className="hero-link">Game design</a>
              <a href="#" className="hero-link">Product design</a>
              <a href="#" className="hero-link">About me</a>
              <a href="#" className="hero-link">Resume</a>
            </nav>
          </div>
          <div className="hero-illustration">
            <div className="illustration-placeholder">
              <div className="illustration-content">
                <div className="illustration-bg"></div>
                <div className="illustration-figure"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

