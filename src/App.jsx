import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Media from './pages/Media/Media';
import contactInfo from './config';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <aside className="sidebar">
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
        </aside> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

