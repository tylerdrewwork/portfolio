import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import EscapelyHome from './pages/Escapely/EscapelyHome';
import EscapelyHireMe from './pages/Escapely/EscapelyHireMe';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escapely" element={<EscapelyHome />} />
        <Route path="/escapely/hireme" element={<EscapelyHireMe />} />
      </Routes>
    </div>
  )
}

export default App

