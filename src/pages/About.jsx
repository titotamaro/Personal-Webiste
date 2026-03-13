import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, TerminalSquare, Briefcase, Share2, Users, LayoutDashboard, MonitorPlay } from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="about-nav fade-in-up">
        <Link to="/" className="about-logo">
          <div className="logo-icon">
            <LayoutDashboard size={20} />
          </div>
          <span className="logo-text">Tito Tamaro</span>
        </Link>
        <div className="about-nav-links">
          <Link to="/about" className="nav-link active">About</Link>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <button className="hire-me-btn">Hire Me</button>
      </nav>

      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero fade-in-up delay-100">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              AVAILABLE FOR STRATEGIC LEADERSHIP
            </div>
            <h1 className="hero-title">
              Strategic<br />
              Management &<br />
              <span className="text-blue">Value Delivery</span>
            </h1>
            <p className="hero-subtitle">
              Project & Product Manager. Agile & SAFe Certified.<br />
              Leveraging Data & AI to drive organizational<br />
              excellence.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                View Portfolio <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                Download Resume <Download size={18} />
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Tito Tamaro"
              className="hero-image"
            />
          </div>
        </section>

        {/* Core Expertise Section */}
        <section className="core-expertise fade-in-up delay-200">
          <div className="expertise-header">
            <div className="expertise-title-area">
              <h4 className="section-label text-blue">CORE EXPERTISE</h4>
              <h2 className="section-heading">Empowering teams with strategic<br/>frameworks and technical precision.</h2>
            </div>
            <div className="expertise-subtitle-area">
              <p className="section-label right-align">Core Capabilities</p>
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="icon-wrapper bg-blue-light text-blue"><TerminalSquare size={24} /></div>
              <h3>Project & Product<br/>Management</h3>
              <p>Driving value from initial concept to final delivery with meticulous planning and execution.</p>
            </div>
            <div className="expertise-card">
              <div className="icon-wrapper bg-purple-light text-purple"><Share2 size={24} /></div>
              <h3>Agile & SAFe<br/>Methodologies</h3>
              <p>Expertise in scaled agile frameworks to synchronize alignment, collaboration, and delivery.</p>
            </div>
            <div className="expertise-card">
              <div className="icon-wrapper bg-blue-light text-blue"><MonitorPlay size={24} /></div>
              <h3>AI Integration & Data<br/>Analytics</h3>
              <p>Leveraging data-driven insights and cutting-edge AI to inform strategic decision-making.</p>
            </div>
            <div className="expertise-card">
              <div className="icon-wrapper bg-slate-light text-slate"><Users size={24} /></div>
              <h3>Stakeholder<br/>Management</h3>
              <p>Building strong professional relationships and managing expectations across all levels.</p>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="featured-work fade-in-up delay-300">
          <h2 className="section-heading center">Featured Work & Experience</h2>
          <div className="featured-divider"></div>
          
          <div className="work-grid">
            <div className="work-card">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Supply Chain" className="work-bg" />
              <div className="work-content">
                <span className="work-category">ENTERPRISE SOLUTIONS</span>
                <h3>Global Supply Chain Optimization</h3>
                <p>Implemented a SAFe framework for a Fortune 500 logistics provider, increasing delivery speed by 35%.</p>
              </div>
            </div>
            <div className="work-card">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" alt="AI Analytics" className="work-bg" />
              <div className="work-content">
                <span className="work-category">AI INTEGRATION</span>
                <h3>AI-Driven Predictive Analytics</h3>
                <p>Led the development of a proprietary machine learning model for retail demand forecasting.</p>
              </div>
            </div>
          </div>
          
          <div className="center-btn-wrapper">
             <button className="btn-outline">View All Case Studies</button>
          </div>
        </section>
      </main>

      {/* Personal Touch Section */}
      <section className="personal-touch bg-dark fade-in-up delay-400">
        <div className="touch-container">
          <div className="touch-content">
            <h2>A Unique Personal Touch</h2>
            <p className="touch-desc">
              Beyond the metrics and methodologies, I bring a human-centric approach to leadership. I believe that the best products are built at the intersection of empathy, strategy, and robust technology.
            </p>
            
            <div className="touch-traits">
              <div className="trait">
                <div className="trait-icon"><Briefcase size={16} /></div>
                <div>
                  <h4>Growth Mindset</h4>
                  <p>Continuously evolving skills in emerging technologies like Generative AI.</p>
                </div>
              </div>
              <div className="trait">
                <div className="trait-icon fill-icon"><Users size={16} /></div>
                <div>
                  <h4>Empathetic Leadership</h4>
                  <p>Mentoring cross-functional teams to reach their highest potential.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="touch-terminal">
             <div className="terminal-window">
               <div className="terminal-header">
                 <div className="dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                 </div>
               </div>
               <div className="terminal-body">
                 <p className="comment"># Initializing Tito.Tamaro.Profile.sh...</p>
                 <p><span className="prompt">tito@tamaro:~$</span> <strong>whoami</strong></p>
                 <p className="output">Strategic Project & Product Manager with 10+ years experience in digital transformation.</p>
                 
                 <p><span className="prompt">tito@tamaro:~$</span> <strong>fetch --skills</strong></p>
                 <div className="skills-grid">
                   <span className="skill text-green">▶ Project Governance</span>
                   <span className="skill text-green">▶ SAFe Framework</span>
                   <span className="skill text-green">▶ Data Viz (Tableau)</span>
                   <span className="skill text-green">▶ Product Lifecycle</span>
                   <span className="skill text-green">▶ Stakeholder ROI</span>
                   <span className="skill text-green">▶ AI Automation</span>
                 </div>
                 
                 <p><span className="prompt">tito@tamaro:~$</span> <strong>contact --now</strong></p>
                 <p className="output">Ready to collaborate on your next big thing<span className="cursor">_</span></p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon small"><LayoutDashboard size={14} /></div>
            <span className="logo-text">Tito Tamaro</span>
          </div>
          <div className="social-links">
             <a href="#linkedin">In</a>
             <a href="#twitter">Tw</a>
          </div>
          <div className="copyright">
            © 2024 Tito Tamaro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
