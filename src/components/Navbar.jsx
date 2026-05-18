import { Link, useLocation } from 'react-router-dom';
import { Compass, Sun, Moon, Zap, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { professions } from '../data/courses';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false);
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
            <img src="/favicon.svg" alt="Logo" style={{ width: '28px', height: '28px' }} />
            <span>No<span className="gradient-text">Confusion</span></span>
          </Link>
          <div className="nav-actions">
            {/* Home Link - Desktop */}
            <Link to="/" className="nav-link">Home</Link>

            {/* Courses Dropdown - Desktop */}
            <div className="dropdown">
              <button className="nav-dropdown-btn">
                Courses <ChevronDown size={16} />
              </button>
              <div className="dropdown-menu">
                {professions.slice(0, 5).map((p) => (
                  <Link 
                    key={p.id} 
                    to={`/profession/${p.id}`} 
                    className="dropdown-item"
                  >
                    {p.title}
                  </Link>
                ))}
                {professions.length > 5 && (
                  <Link 
                    to="/all-paths" 
                    className="dropdown-item view-more"
                  >
                    View More
                  </Link>
                )}
              </div>
            </div>

            {/* Certifications Link - Desktop */}
            <Link to="/certifications" className="nav-link">Certifications</Link>

            {/* Theme Toggle */}
            <button 
              className="btn btn-outline" 
              onClick={() => setIsDark(!isDark)}
              style={{ padding: '0.6rem', width: '42px', height: '42px' }}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger - Mobile */}
            <button 
              className="hamburger-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="mobile-menu-content">
            {/* Home Link - Mobile */}
            <Link 
              to="/" 
              className="mobile-menu-item" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="mobile-menu-item-group">
              <button 
                className="mobile-menu-item"
                onClick={() => setIsCoursesExpanded(!isCoursesExpanded)}
              >
                <span>Courses</span>
                <ChevronDown size={16} style={{ transform: isCoursesExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </button>
              {isCoursesExpanded && (
                <div className="mobile-submenu">
                  {professions.slice(0, 5).map((p) => (
                    <Link 
                      key={p.id} 
                      to={`/profession/${p.id}`} 
                      className="mobile-submenu-item"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {p.title}
                    </Link>
                  ))}
                  {professions.length > 5 && (
                    <Link 
                      to="/all-paths" 
                      className="mobile-submenu-item view-more"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View More
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Certifications Link - Mobile */}
            <Link 
              to="/certifications" 
              className="mobile-menu-item" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Certifications
            </Link>
          </div>
        </div>
      )}
      
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
