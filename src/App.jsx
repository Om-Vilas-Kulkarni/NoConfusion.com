import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Profession from './pages/Profession';
import AllPaths from './pages/AllPaths';
import BackgroundIcons from './components/BackgroundIcons';

function App() {
  return (
    <Router>
      <BackgroundIcons />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-paths" element={<AllPaths />} />
        <Route path="/profession/:id" element={<Profession />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
