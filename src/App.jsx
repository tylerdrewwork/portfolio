import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escapely" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

