import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const statsData = [
  { number: '500+', label: 'Students Taught' },
  { number: '10+', label: 'Years Experience' },
  { number: '95%', label: 'Board Pass Rate' },
  { number: '4', label: 'Classes Offered' },
];

const whyUsData = [
  {
    icon: '🎯',
    title: 'Result-Oriented Teaching',
    desc: 'Our teaching methodology focuses on board exams and competitive entrance preparation with proven track records.'
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Faculty',
    desc: 'Vishal Verma with 10+ years of teaching experience in Physics, Chemistry, and Mathematics.'
  },
  {
    icon: '📚',
    title: 'Comprehensive Study Material',
    desc: 'Meticulously designed study notes, practice sheets, and previous year papers provided to all students.'
  },
  {
    icon: '🔬',
    title: 'Concept-Based Learning',
    desc: 'Strong emphasis on building fundamentals rather than rote learning, ensuring long-term academic success.'
  },
  {
    icon: '📊',
    title: 'Regular Assessments',
    desc: 'Weekly tests, monthly exams, and detailed performance analysis to track each student\'s progress.'
  },
  {
    icon: '🏆',
    title: 'Proven Results',
    desc: 'Hundreds of students have scored 90%+ in board exams under expert guidance from Target Coaching Classes.'
  },
];

const subjectCards = [
  { class: 'Class 9 & 10', subjects: ['Physics', 'Chemistry', 'Mathematics'], color: '#e8eaf6', accent: '#3949ab' },
  { class: 'Class 11 & 12', subjects: ['Physics', 'Mathematics'], color: '#e3f2fd', accent: '#1565c0', note: 'by Vishal Verma' },
  { class: 'Class 11 & 12', subjects: ['Chemistry', 'Biology'], color: '#e8f5e9', accent: '#2e7d32', note: 'by Expert Faculty' },
];

const Home = () => {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text animate-fadeInUp">
            <div className="section-tag">🎯 Welcome to Excellence</div>
            <h1 className="hero-title">
              Shape Your Future with <span className="gold-text">Target Coaching</span> Classes
            </h1>
            <p className="hero-subtitle">
              Expert coaching for Class 9–12 in Physics, Chemistry, Mathematics & Biology.
              Led by <strong>Vishal Verma</strong> — building toppers since over a decade.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary hero-btn">
                🚀 Enroll Now
              </Link>
              <Link to="/batches" className="btn btn-secondary hero-btn">
                📅 View Batches
              </Link>
            </div>
          </div>

          <div className="hero-card animate-fadeIn">
            <div className="teacher-spotlight">
              <div className="teacher-avatar">VV</div>
              <div className="teacher-info">
                <div className="teacher-name">Vishal Verma</div>
                <div className="teacher-role">Head Faculty & Director</div>
                <div className="teacher-subjects">
                  <span className="badge badge-navy">Physics</span>
                  <span className="badge badge-gold">Chemistry</span>
                  <span className="badge badge-green">Maths</span>
                </div>
              </div>
              <div className="teacher-exp">
                <div className="exp-num">10+</div>
                <div className="exp-label">Years Teaching</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="container stats-grid">
            {statsData.map((stat, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUBJECTS ===== */}
      <section className="section subjects-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">📚 Our Curriculum</div>
            <h2 className="section-title">Subjects We <span>Teach</span></h2>
            <div className="divider"></div>
            <p className="section-subtitle">Comprehensive coverage of Science and Mathematics for Classes 9 to 12</p>
          </div>

          <div className="subject-cards">
            {subjectCards.map((card, i) => (
              <div className="subject-card card" key={i} style={{ '--card-accent': card.accent }}>
                <div className="subject-card-header" style={{ background: card.color }}>
                  <h3>{card.class}</h3>
                  {card.note && <span className="subject-note">{card.note}</span>}
                </div>
                <div className="subject-card-body">
                  {card.subjects.map((sub, j) => (
                    <div className="subject-tag" key={j} style={{ borderColor: card.accent, color: card.accent }}>
                      {sub === 'Physics' && '⚡'} 
                      {sub === 'Chemistry' && '🧪'} 
                      {sub === 'Mathematics' && '📐'} 
                      {sub === 'Biology' && '🌿'}
                      {' '}{sub}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-section">
        <div className="why-bg"></div>
        <div className="container">
          <div className="text-center">
            <div className="section-tag">⭐ Why Choose Us</div>
            <h2 className="section-title">The Target <span>Advantage</span></h2>
            <div className="divider"></div>
            <p className="section-subtitle">What makes Target Coaching Classes the preferred choice for students and parents alike</p>
          </div>

          <div className="why-grid">
            {whyUsData.map((item, i) => (
              <div className="why-card card" key={i}>
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-bg"></div>
        <div className="container cta-content">
          <div className="cta-text">
            <h2>Ready to Start Your Academic Journey?</h2>
            <p>Join Target Coaching Classes and experience education that makes a difference.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Enquire Now →</Link>
            <Link to="/achievements" className="btn btn-secondary">See Results</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
