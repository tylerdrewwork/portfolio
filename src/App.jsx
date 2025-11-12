function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">Logo</div>
          <nav className="nav">
            <a href="#" className="nav-link">Work</a>
            <a href="#" className="nav-link">Resume</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-illustration">
              <div className="illustration-circle"></div>
            </div>
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="highlight">Tyler Smith</span>
              </h1>
              <p className="hero-description">
                I am a <span className="highlight">creative professional</span> exploring the intersection of design, technology, and innovation to craft digital experiences that are both visually striking and highly functional.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

