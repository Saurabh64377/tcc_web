import React from 'react';
import './Achievements.css';

const toppers = [
  { name: 'Priya Sharma', class: 'Class 12', year: '2023-24', percent: '98.4%', subject: 'PCM', rank: '🥇' },
  { name: 'Rahul Gupta', class: 'Class 10', year: '2023-24', percent: '97.2%', subject: 'Science & Math', rank: '🥈' },
  { name: 'Anjali Singh', class: 'Class 12', year: '2023-24', percent: '96.8%', subject: 'PCB', rank: '🥉' },
  { name: 'Vikash Kumar', class: 'Class 10', year: '2022-23', percent: '96.0%', subject: 'Science & Math', rank: '⭐' },
  { name: 'Sneha Yadav', class: 'Class 12', year: '2022-23', percent: '95.6%', subject: 'PCM', rank: '⭐' },
  { name: 'Aditya Tiwari', class: 'Class 10', year: '2022-23', percent: '95.2%', subject: 'Science & Math', rank: '⭐' },
  { name: 'Pooja Verma', class: 'Class 12', year: '2021-22', percent: '94.8%', subject: 'PCM', rank: '⭐' },
  { name: 'Rohan Mishra', class: 'Class 10', year: '2021-22', percent: '94.4%', subject: 'Science & Math', rank: '⭐' },
];

const yearStats = [
  {
    year: '2023-24',
    class10: { students: 48, above90: 32, above95: 12, topScore: '97.2%' },
    class12: { students: 42, above90: 28, above95: 10, topScore: '98.4%' },
  },
  {
    year: '2022-23',
    class10: { students: 45, above90: 29, above95: 10, topScore: '96.0%' },
    class12: { students: 38, above90: 24, above95: 8, topScore: '95.6%' },
  },
  {
    year: '2021-22',
    class10: { students: 40, above90: 25, above95: 8, topScore: '94.4%' },
    class12: { students: 35, above90: 21, above95: 7, topScore: '94.8%' },
  },
];

const overallStats = [
  { number: '500+', label: 'Total Students', icon: '👨‍🎓' },
  { number: '95%', label: 'Pass Rate', icon: '✅' },
  { number: '200+', label: 'Scored Above 90%', icon: '🏆' },
  { number: '50+', label: 'Scored Above 95%', icon: '🌟' },
  { number: '15+', label: 'District Toppers', icon: '🥇' },
  { number: '10+', label: 'Years of Results', icon: '📅' },
];

const Achievements = () => {
  return (
    <div className="achievements-page">
      {/* ===== PAGE HEADER ===== */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">Home <span>/</span> Achievements</div>
          <h1>Our Achievements & Results</h1>
          <p>Celebrating the success of our dedicated students over the years</p>
        </div>
      </div>

      {/* ===== OVERALL STATS ===== */}
      <section className="section overall-stats-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">🏆 At a Glance</div>
            <h2 className="section-title">Numbers That <span>Speak</span></h2>
            <div className="divider"></div>
          </div>
          <div className="overall-grid">
            {overallStats.map((stat, i) => (
              <div className="overall-card card" key={i}>
                <div className="overall-icon">{stat.icon}</div>
                <div className="overall-number">{stat.number}</div>
                <div className="overall-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOPPERS SECTION ===== */}
      <section className="section toppers-section">
        <div className="toppers-bg"></div>
        <div className="container">
          <div className="text-center">
            <div className="section-tag">🌟 Hall of Fame</div>
            <h2 className="section-title">Our Star <span>Performers</span></h2>
            <div className="divider"></div>
            <p className="section-subtitle">Students who made us proud with their extraordinary performance in board exams</p>
          </div>

          <div className="toppers-grid">
            {toppers.map((t, i) => (
              <div className={`topper-card card ${i < 3 ? 'top-three' : ''}`} key={i}>
                <div className="topper-rank">{t.rank}</div>
                <div className="topper-avatar">{t.name.charAt(0)}</div>
                <div className="topper-name">{t.name}</div>
                <div className="topper-meta">
                  <span className="badge badge-navy">{t.class}</span>
                  <span className="badge badge-gold">{t.year}</span>
                </div>
                <div className="topper-percent">{t.percent}</div>
                <div className="topper-subject">{t.subject}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== YEAR-WISE RESULTS ===== */}
      <section className="section yearwise-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">📊 Year-wise Analysis</div>
            <h2 className="section-title">Result <span>Highlights</span></h2>
            <div className="divider"></div>
            <p className="section-subtitle">Consistent improvement year after year across both Class 10 and Class 12</p>
          </div>

          <div className="yearwise-tables">
            {yearStats.map((ys, i) => (
              <div className="year-block card" key={i}>
                <div className="year-header">
                  <span className="year-label">📅 {ys.year}</span>
                </div>
                <div className="year-content">
                  {/* Class 10 */}
                  <div className="class-result">
                    <div className="class-result-title">
                      <span>🏫 Class 10 Results</span>
                    </div>
                    <div className="result-row">
                      <span>Total Students</span>
                      <span className="result-val">{ys.class10.students}</span>
                    </div>
                    <div className="result-row highlight">
                      <span>Scored above 90%</span>
                      <span className="result-val">{ys.class10.above90} students</span>
                    </div>
                    <div className="result-row highlight-gold">
                      <span>Scored above 95%</span>
                      <span className="result-val">{ys.class10.above95} students</span>
                    </div>
                    <div className="result-row top-score">
                      <span>🏆 Top Score</span>
                      <span className="result-val">{ys.class10.topScore}</span>
                    </div>
                  </div>
                  {/* Class 12 */}
                  <div className="class-result">
                    <div className="class-result-title">
                      <span>🎓 Class 12 Results</span>
                    </div>
                    <div className="result-row">
                      <span>Total Students</span>
                      <span className="result-val">{ys.class12.students}</span>
                    </div>
                    <div className="result-row highlight">
                      <span>Scored above 90%</span>
                      <span className="result-val">{ys.class12.above90} students</span>
                    </div>
                    <div className="result-row highlight-gold">
                      <span>Scored above 95%</span>
                      <span className="result-val">{ys.class12.above95} students</span>
                    </div>
                    <div className="result-row top-score">
                      <span>🏆 Top Score</span>
                      <span className="result-val">{ys.class12.topScore}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="section testimonial-banner">
        <div className="container">
          <div className="testimonial-content">
            <div className="quote-mark">"</div>
            <blockquote>
              Target Coaching Classesr transformed my understanding of Physics and Mathematics.
              The way Vishal Sir explains complex concepts with real-world examples is absolutely brilliant.
              I scored 96% in Class 12 and it wouldn't have been possible without his guidance.
            </blockquote>
            <div className="testimonial-author">
              <strong>— Priya Sharma</strong>
              <span>Class 12 Topper, 2023-24</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
