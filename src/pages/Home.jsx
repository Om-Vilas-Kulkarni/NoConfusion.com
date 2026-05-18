import { Link } from 'react-router-dom';
import { professions } from '../data/courses';
import { useReveal } from '../hooks/useReveal';
import * as LucideIcons from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  useReveal();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Are these roadmaps truly free?",
      a: "Yes, 100%. We curate the best free educational content from high-quality creators on YouTube so you don't have to pay for expensive bootcamps."
    },
    {
      q: "How are the videos selected?",
      a: "Every video is handpicked based on clarity, depth, and how well it fits into a logical learning sequence for beginners and pros alike."
    },
    {
      q: "Can I suggest a new career path?",
      a: "Absolutely! We are constantly expanding. If you'd like to see a specific roadmap added, feel free to reach out."
    },
    {
      q: "Is this enough to get a job?",
      a: "These paths provide a massive head start. However, we always recommend building your own portfolio projects alongside these lessons to truly master the skills."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Stop the <span className="gradient-text">Confusion.</span><br />
            Start Learning.
          </h1>
          <p className="hero-subtitle">
            Tech courses are scattered everywhere. We've curated the ultimate learning paths for different tech professions using the best free resources on YouTube so you don't miss a thing.
          </p>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>
      </section>

      {/* Professions Grid */}
      <section id="professions" className="container section-padding">
        <h2 className="section-title reveal">Choose Your Path</h2>
        <div className="grid reveal">
          {professions.slice(0, 6).map((prof) => {
            const Icon = LucideIcons[prof.iconName];
            return (
              <Link
                key={prof.id}
                to={`/profession/${prof.id}`}
                className="card glass-panel"
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

        <div className="view-all-container reveal">
          <Link to="/all-paths" className="btn-secondary view-all-btn">
            View All Learning Paths <LucideIcons.ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Skills Carousel Section */}
      <section className="skills-carousel-section section-padding">
        <div className="container">
          <h2 className="section-title text-center reveal">Relevant Industry Skills</h2>
        </div>
        <div className="skills-carousel">
          <div className="marquee-content">
            {/* Slide 1 */}
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
              <span>AWS</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
              <span>Kubernetes</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" />
              <span>GCP</span>
            </div>
            <div className="marquee-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" />
              <span>Power BI</span>
            </div>
            <div className="marquee-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" alt="Tableau" />
              <span>Tableau</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" alt="PySpark" />
              <span>PySpark</span>
            </div>
            <div className="marquee-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png" alt="Airflow" />
              <span>Airflow</span>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              <span>PostgreSQL</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
              <span>AWS</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <span>Java</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
              <span>Kubernetes</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" />
              <span>GCP</span>
            </div>
            <div className="marquee-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" />
              <span>Power BI</span>
            </div>
            <div className="marquee-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" alt="Tableau" />
              <span>Tableau</span>
            </div>
            <div className="marquee-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" alt="PySpark" />
              <span>PySpark</span>
            </div>
            <div className="marquee-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png" alt="Airflow" />
              <span>Airflow</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section container">
        <h2 className="section-title reveal">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item glass-panel reveal ${openFaq === index ? 'faq-open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
