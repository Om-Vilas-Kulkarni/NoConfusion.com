import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useEffect } from 'react';

const certificationsData = [
  {
    id: 1,
    name: 'HackerRank',
    description: 'Best platform to practice coding and get certificates in various skills like Problem Solving, Python, SQL and Java to put on your resume.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
    url: 'https://www.hackerrank.com/certificates',
  },
  {
    id: 2,
    name: 'LeetCode',
    description: 'Best platform to learn & solve DSA problems and prepare for technical interviews.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    url: 'https://leetcode.com/explore/',
  },
  {
    id: 3,
    name: 'Coursera',
    description: 'Build skills with courses, certificates, and degrees from top universities and companies.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg',
    url: 'https://www.coursera.org/',
  }
];

const Certifications = () => {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in profession-dashboard">
      <main className="dashboard-content">
        <section className="profession-header">
          <div className="container-wide">
            <h1 className="gradient-text">Top Certification Platforms</h1>
            <p>Validate your skills and boost your resume with these industry-recognized certifications.</p>
          </div>
        </section>

        <section className="course-grid section-padding">
          <div className="container-wide">
            <div className="grid reveal">
              {certificationsData.map((cert, index) => (
                <div
                  key={cert.id}
                  className="course-card glass-panel reveal"
                >
                  <div className="card-header">
                    <span className="step-number" style={{ color: 'var(--primary)' }}>{index + 1}</span>
                    <h2>{cert.name}</h2>
                  </div>

                  <div className="cert-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="cert-image-container" style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid var(--glass-border)' }}>
                      <img src={cert.image} alt={cert.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className="cert-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <p className="cert-description" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{cert.description}</p>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-action"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}
                      >
                        <span>Visit Website</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Certifications;
