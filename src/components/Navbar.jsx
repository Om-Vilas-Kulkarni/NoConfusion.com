import { Link, useLocation } from 'react-router-dom';
import { Compass, Sun, Moon, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDark]);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <Compass size={28} color="var(--primary)" />
            <span>No<span className="gradient-text">Confusion</span></span>
          </Link>
          <div className="nav-actions">
            <button 
              className="btn btn-outline" 
              onClick={() => setIsDark(!isDark)}
              style={{ padding: '0.6rem', width: '42px', height: '42px' }}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
      
      {location.pathname === '/' && (
        <div className="announcement-bar">
          <div className="marquee-content">
            <div className="marquee-item">
              <Zap size={14} fill="currentColor" />
              <span>Data Analytics new course added!</span>
            </div>
            <div className="marquee-item">
              <Zap size={14} fill="currentColor" />
              <span>Explore our updated Software Engineering roadmap</span>
            </div>
            <div className="marquee-item">
              <Zap size={14} fill="currentColor" />
              <span>Personal Finance mastery path now live!</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-item">
              <Zap size={14} fill="currentColor" />
              <span>Data Analytics new course added!</span>
            </div>
            <div className="marquee-item">
              <Zap size={14} fill="currentColor" />
              <span>Explore our updated Software Engineering roadmap</span>
            </div>
            <div className="marquee-item">
              <Zap size={14} fill="currentColor" />
              <span>Personal Finance mastery path now live!</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default Navbar;
