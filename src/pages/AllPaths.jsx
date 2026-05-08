import { Link } from 'react-router-dom';
import { professions } from '../data/courses';
import * as LucideIcons from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useEffect, useState } from 'react';

const AllPaths = () => {
  const [searchTerm, setSearchTerm] = useState('');
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPaths = professions.filter(path => 
    path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    path.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in all-paths-page">
      <section className="profession-header">
        <div className="container">
          <h1 className="gradient-text">All Learning Paths</h1>
          <p>Explore our complete catalog of curated tech career roadmaps.</p>
          
          <div className="search-wrapper reveal">
            <div className="search-bar glass-panel">
              <LucideIcons.Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search career paths (e.g. 'Data', 'Engineering'...)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-btn" onClick={() => setSearchTerm('')}>
                  <LucideIcons.X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container section-padding">
        {filteredPaths.length > 0 ? (
          <div className="grid">
            {filteredPaths.map((prof) => {
              const Icon = LucideIcons[prof.iconName];
              return (
                <Link
                  key={prof.id}
                  to={`/profession/${prof.id}`}
                  className="card glass-panel reveal"
                >
                  <div className="card-icon" style={{ backgroundColor: `${prof.color}15`, color: prof.color }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="card-title">{prof.title}</h3>
                  <p className="card-description">{prof.description}</p>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="no-results reveal">
            <LucideIcons.SearchX size={48} className="no-results-icon" />
            <h3>No paths found for "{searchTerm}"</h3>
            <p>Try searching for different keywords or browse the full catalog.</p>
            <button className="btn-secondary" onClick={() => setSearchTerm('')}>Clear Search</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllPaths;
