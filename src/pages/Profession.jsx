import { useParams, Navigate } from 'react-router-dom';
import { professions } from '../data/courses';
import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

const getCorrectedWatchUrl = (embedUrl) => {
  if (!embedUrl) return '';
  if (embedUrl.includes('videoseries?list=')) {
    const listId = embedUrl.split('videoseries?list=')[1];
    return `https://www.youtube.com/playlist?list=${listId}`;
  } else if (embedUrl.includes('/embed/')) {
    const videoId = embedUrl.split('/embed/')[1];
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
  return embedUrl;
};

const Profession = () => {
  const { id } = useParams();
  const profession = professions.find((p) => p.id === id);
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!profession) {
    return <Navigate to="/" />;
  }

  return (
    <div className="animate-fade-in profession-dashboard">
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
                    <div className="video-section">
                      <div className="video-container" style={{ position: 'relative' }}>
                        <iframe 
                          src={step.videoUrl} 
                          title={step.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                        
                        {/* Hover Overlay as the Link */}
                        <a 
                          href={getCorrectedWatchUrl(step.videoUrl)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="video-hover-overlay"
                        >
                          <span className="youtube-hover-btn">
                            Watch on YouTube ↗
                          </span>
                        </a>
                      </div>
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
