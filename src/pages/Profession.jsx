import { useParams, Navigate, Link } from 'react-router-dom';
import { professions } from '../data/courses';
import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import * as LucideIcons from 'lucide-react';

const Profession = () => {
  const { id } = useParams();
  const profession = professions.find((p) => p.id === id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  }, [id]);

  if (!profession) {
    return <Navigate to="/" />;
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`animate-fade-in profession-dashboard ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle-btn glass-panel" onClick={toggleSidebar}>
        {isSidebarOpen ? <LucideIcons.X size={20} /> : <LucideIcons.Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <aside className={`learning-sidebar glass-panel ${isSidebarOpen ? 'show' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-group">
            <h4 className="sidebar-label">Navigation</h4>
            <Link to="/" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>
              <LucideIcons.Home size={18} /> Home
            </Link>
            <Link to="/all-paths" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>
              <LucideIcons.Grid size={18} /> All Paths
            </Link>
          </div>

          <div className="sidebar-group">
            <h4 className="sidebar-label">Other Careers</h4>
            <div className="sidebar-paths">
              {professions.map((p) => (
                <Link 
                  key={p.id} 
                  to={`/profession/${p.id}`} 
                  className={`sidebar-link ${p.id === id ? 'active' : ''}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <span className="path-dot" style={{ backgroundColor: p.color }}></span>
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="dashboard-content">
        <section className="profession-header">
          <div className="container-wide">
            <h1 className="gradient-text">{profession.title}</h1>
            <p>{profession.description}</p>
          </div>
        </section>

        <section className="course-grid section-padding">
          <div className="container-wide">
            <div className="grid reveal">
              {profession.steps.map((step, index) => (
                <div 
                  key={index} 
                  className="course-card glass-panel reveal"
                >
                  <div className="card-header">
                    <span className="step-number" style={{ color: profession.color }}>{index + 1}</span>
                    <h2>{step.title.replace(/^\d+\.\s*/, '')}</h2>
                  </div>
                  {step.videoUrl && (
                    <div className="video-container">
                      <iframe 
                        src={step.videoUrl} 
                        title={step.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profession;
