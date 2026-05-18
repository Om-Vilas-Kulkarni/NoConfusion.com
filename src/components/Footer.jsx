import { Link } from 'react-router-dom';
import { professions } from '../data/courses';
import { Compass, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/favicon.svg" alt="Logo" style={{ width: '24px', height: '24px' }} />
              <span>No<span className="gradient-text">Confusion</span></span>
            </Link>
            <p className="footer-tagline">Curated learning paths to help you master tech — no confusion, no overwhelm.</p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="/#professions">All Paths</a></li>
              <li><Link to="/certifications">Certifications</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Learning Paths</h4>
            <ul className="footer-links">
              {professions.slice(0, 4).map((prof) => (
                <li key={prof.id}>
                  <Link to={`/profession/${prof.id}`}>{prof.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">More Paths</h4>
            <ul className="footer-links">
              {professions.slice(4).map((prof) => (
                <li key={prof.id}>
                  <Link to={`/profession/${prof.id}`}>{prof.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <Heart size={14} className="footer-heart" fill="#ec4899" stroke="#ec4899" /> by <span className="footer-author">Om Kulkarni</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
