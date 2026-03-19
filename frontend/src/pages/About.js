import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const subjectsByClass = [
  {
    classes: 'Class 9 & 10',
    icon: '🏫',
    subjects: [
      { name: 'Physics', teacher: 'Vishal Verma', icon: '⚡' },
      { name: 'Chemistry', teacher: 'Vishal Verma', icon: '🧪' },
      { name: 'Mathematics', teacher: 'Vishal Verma', icon: '📐' },
    ]
  },
  {
    classes: 'Class 11 & 12',
    icon: '🎓',
    subjects: [
      { name: 'Physics', teacher: 'Vishal Verma', icon: '⚡' },
      { name: 'Mathematics', teacher: 'Vishal Verma', icon: '📐' },
      { name: 'Chemistry', teacher: 'Expert Faculty', icon: '🧪' },
      { name: 'Biology', teacher: 'Expert Faculty', icon: '🌿' },
    ]
  }
];

const teacherQualities = [
  { icon: '🎯', text: 'Student-centric teaching approach' },
  { icon: '📖', text: 'Deep subject matter expertise' },
  { icon: '💡', text: 'Concept clarity before practice' },
  { icon: '📊', text: 'Regular performance tracking' },
  { icon: '🤝', text: 'Personal attention to each student' },
  { icon: '⏰', text: 'Timely doubt resolution' },
];

const milestones = [
  { year: '2013', title: 'Founded Target Coaching Classes', desc: 'Started with a vision to provide quality education to local students' },
  { year: '2015', title: 'Expanded to Class 11 & 12', desc: 'Added senior secondary classes with Physics and Mathematics' },
  { year: '2018', title: 'Added Biology & Chemistry Faculty', desc: 'Expert teachers joined for Chemistry and Biology for Class 11 & 12' },
  { year: '2020', title: 'Online + Offline Mode', desc: 'Adapted to hybrid learning during challenging times' },
  { year: '2024', title: '500+ Students Milestone', desc: 'Proudly shaped the academic journey of 500+ students' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* ===== PAGE HEADER ===== */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">Home <span>/</span> About Us</div>
          <h1>About Target Coaching Classes</h1>
          <p>Learn about our faculty, philosophy, and teaching approach</p>
        </div>
      </div>

      {/* ===== TEACHER PROFILE ===== */}
      <section className="section teacher-profile-section">
        <div className="container">
          <div className="teacher-profile-grid">
            {/* Avatar side */}
            <div className="teacher-visual">
              <div className="teacher-avatar-lg">VV</div>
              <div className="teacher-badges">
                <div className="t-badge">🏅 10+ Years Experience</div>
                <div className="t-badge">🎓 Expert in PCM</div>
                <div className="t-badge">📚 500+ Students</div>
                <div className="t-badge">🏆 Top Results</div>
              </div>
            </div>

            {/* Info side */}
            <div className="teacher-detail">
              <div className="section-tag">👨‍🏫 Faculty Profile</div>
              <h2 className="section-title" style={{textAlign:'left'}}>
                <span>Vishal Verma</span>
              </h2>
              <div className="divider divider-left"></div>
              <p className="teacher-bio">
                Vishal Verma is a dedicated and passionate educator with over a decade of teaching experience. 
                His specialization in Physics, Chemistry, and Mathematics makes him one of the most sought-after 
                teachers in the region for students preparing for board exams and competitive entrance tests.
              </p>
              <p className="teacher-bio" style={{marginTop: '16px'}}>
                His teaching philosophy revolves around building a rock-solid foundation in every subject,
                ensuring students understand concepts deeply rather than relying on memorization. 
                He believes every student has the potential to excel, and his personalized approach 
                helps bring out the best in each learner.
              </p>

              <div className="teacher-qualities">
                {teacherQualities.map((q, i) => (
                  <div className="quality-item" key={i}>
                    <span>{q.icon}</span> {q.text}
                  </div>
                ))}
              </div>

              <div className="teacher-cta-row">
                <Link to="/contact" className="btn btn-primary">📝 Book a Free Demo</Link>
                <Link to="/batches" className="btn btn-outline">📅 View Schedule</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEACHING STRUCTURE ===== */}
      <section className="section teaching-structure">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">🏛️ Teaching Structure</div>
            <h2 className="section-title">Faculty & <span>Subjects</span></h2>
            <div className="divider"></div>
            <p className="section-subtitle">A complete academic structure designed to prepare students for boards and beyond</p>
          </div>

          <div className="structure-grid">
            {subjectsByClass.map((cls, i) => (
              <div className="structure-card card" key={i}>
                <div className="structure-header">
                  <span className="structure-icon">{cls.icon}</span>
                  <h3>{cls.classes}</h3>
                </div>
                <div className="structure-subjects">
                  {cls.subjects.map((sub, j) => (
                    <div className={`subject-row ${sub.teacher === 'Vishal Verma' ? 'primary' : 'secondary'}`} key={j}>
                      <div className="subject-left">
                        <span className="subject-icon-sm">{sub.icon}</span>
                        <span className="subject-name">{sub.name}</span>
                      </div>
                      <div className="subject-teacher">
                        {sub.teacher === 'Vishal Verma' ? (
                          <span className="teacher-pill primary-teacher">👨‍🏫 {sub.teacher}</span>
                        ) : (
                          <span className="teacher-pill secondary-teacher">👩‍🏫 {sub.teacher}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOURNEY / MILESTONES ===== */}
      <section className="section milestones-section">
        <div className="milestones-bg"></div>
        <div className="container">
          <div className="text-center">
            <div className="section-tag">📅 Our Journey</div>
            <h2 className="section-title">Growing Through <span>Years</span></h2>
            <div className="divider"></div>
          </div>

          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="timeline-dot"></div>
                <div className="timeline-card card">
                  <div className="timeline-year">{m.year}</div>
                  <h4 className="timeline-title">{m.title}</h4>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
