import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Batches.css';

const batchData = [
  {
    id: 1,
    class: 'Class 9',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    teacher: 'Vishal Verma',
    timing: '7:00 AM – 8:30 AM',
    days: 'Mon, Wed, Fri',
    batchSize: '20 students max',
    fee: '₹500/month',
    status: 'Open',
    color: '#e8eaf6',
    accent: '#3949ab',
    icon: '🏫',
  },
  {
    id: 2,
    class: 'Class 10',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    teacher: 'Vishal Verma',
    timing: '8:30 AM – 10:00 AM',
    days: 'Mon, Wed, Fri',
    batchSize: '20 students max',
    fee: '₹500/month',
    status: 'Open',
    color: '#e3f2fd',
    accent: '#1565c0',
    icon: '📚',
  },
  {
    id: 3,
    class: 'Class 11 – PCM',
    subjects: ['Physics', 'Mathematics'],
    teacher: 'Vishal Verma',
    timing: '5:00 PM – 7:00 PM',
    days: 'Tue, Thu, Sat',
    batchSize: '18 students max',
    fee: '₹500/month',
    status: 'Open',
    color: '#f3e5f5',
    accent: '#6a1b9a',
    icon: '⚡',
  },
  {
    id: 4,
    class: 'Class 11 – PCB',
    subjects: ['Chemistry', 'Biology'],
    teacher: 'Expert Faculty',
    timing: '3:00 PM – 5:00 PM',
    days: 'Tue, Thu, Sat',
    batchSize: '18 students max',
    fee: '₹500/month',
    status: 'Open',
    color: '#e8f5e9',
    accent: '#2e7d32',
    icon: '🌿',
  },
  {
    id: 5,
    class: 'Class 12 – PCM',
    subjects: ['Physics', 'Mathematics'],
    teacher: 'Vishal Verma',
    timing: '7:00 PM – 9:00 PM',
    days: 'Mon, Wed, Fri',
    batchSize: '18 students max',
    fee: '₹500/month',
    status: 'Open',
    color: '#fff3e0',
    accent: '#e65100',
    icon: '🎯',
  },
  {
    id: 6,
    class: 'Class 12 – PCB',
    subjects: ['Chemistry', 'Biology'],
    teacher: 'Expert Faculty',
    timing: '5:00 PM – 7:00 PM',
    days: 'Mon, Wed, Fri',
    batchSize: '18 students max',
    fee: '₹500/month',
    status: 'Open',
    color: '#fce4ec',
    accent: '#b71c1c',
    icon: '🧬',
  },
];

const weeklySchedule = [
  { day: 'Monday', slots: ['7:00–8:30 AM (Class 9)', '8:30–10:00 AM (Class 10)', '5:00–7:00 PM (Class 12 PCM)', '7:00–9:00 PM (Class 12 PCM adv.)'] },
  { day: 'Tuesday', slots: ['5:00–7:00 PM (Class 11 PCM)', '3:00–5:00 PM (Class 11 PCB)'] },
  { day: 'Wednesday', slots: ['7:00–8:30 AM (Class 9)', '8:30–10:00 AM (Class 10)', '5:00–7:00 PM (Class 12 PCM)'] },
  { day: 'Thursday', slots: ['5:00–7:00 PM (Class 11 PCM)', '3:00–5:00 PM (Class 11 PCB)'] },
  { day: 'Friday', slots: ['7:00–8:30 AM (Class 9)', '8:30–10:00 AM (Class 10)', '7:00–9:00 PM (Class 12 PCM)'] },
  { day: 'Saturday', slots: ['5:00–7:00 PM (Class 11 PCM)', '3:00–5:00 PM (Class 11 PCB)', '10:00 AM–12:00 PM (Doubt Session)'] },
  { day: 'Sunday', slots: ['10:00 AM–12:00 PM (Weekly Test)', '12:00–1:00 PM (Result Discussion)'] },
];

const Batches = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

  const filteredBatches = activeFilter === 'All'
    ? batchData
    : batchData.filter(b => b.class.includes(activeFilter.replace('Class ', '')));

  return (
    <div className="batches-page">
      {/* ===== PAGE HEADER ===== */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">Home <span>/</span> Batches</div>
          <h1>Batch Schedule & Timings</h1>
          <p>Find the perfect batch that fits your class, subjects, and schedule</p>
        </div>
      </div>

      {/* ===== BATCH CARDS ===== */}
      <section className="section batches-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">📅 Current Batches</div>
            <h2 className="section-title">Available <span>Batches</span></h2>
            <div className="divider"></div>
            <p className="section-subtitle">All batches are taught by expert faculty with personal attention to every student</p>
          </div>

          {/* Filters */}
          <div className="batch-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="batch-grid">
            {filteredBatches.map((batch) => (
              <div
                className="batch-card card"
                key={batch.id}
                style={{ '--batch-accent': batch.accent }}
              >
                {/* Status Badge */}
                <div className={`batch-status status-${batch.status.toLowerCase()}`}>
                  {batch.status === 'Open' && '✅'}
                  {batch.status === 'Limited' && '⚠️'}
                  {batch.status === 'Full' && '🔴'}
                  {' '}{batch.status}
                </div>

                {/* Header */}
                <div className="batch-header" style={{ background: batch.color }}>
                  <span className="batch-icon">{batch.icon}</span>
                  <div>
                    <h3 className="batch-class">{batch.class}</h3>
                    <div className="batch-teacher">👨‍🏫 {batch.teacher}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="batch-body">
                  <div className="batch-subjects">
                    {batch.subjects.map((s, i) => (
                      <span
                        key={i}
                        className="batch-subject-tag"
                        style={{ background: batch.color, color: batch.accent }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="batch-details">
                    <div className="detail-row">
                      <span className="detail-icon">🕐</span>
                      <span className="detail-label">Timing</span>
                      <span className="detail-value">{batch.timing}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">📆</span>
                      <span className="detail-label">Days</span>
                      <span className="detail-value">{batch.days}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">👥</span>
                      <span className="detail-label">Batch Size</span>
                      <span className="detail-value">{batch.batchSize}</span>
                    </div>
                    <div className="detail-row fee-row">
                      <span className="detail-icon">💰</span>
                      <span className="detail-label">Monthly Fee</span>
                      <span className="detail-value fee-value">{batch.fee}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className={`batch-cta btn ${batch.status === 'Full' ? 'btn-outline disabled' : 'btn-primary'}`}
                    onClick={e => batch.status === 'Full' && e.preventDefault()}
                  >
                    {batch.status === 'Full' ? '🔴 Batch Full' : '📝 Enquire for This Batch'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WEEKLY TIMETABLE ===== */}
      <section className="section timetable-section">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">🗓️ Weekly Schedule</div>
            <h2 className="section-title">Day-wise <span>Timetable</span></h2>
            <div className="divider"></div>
          </div>

          <div className="timetable">
            {weeklySchedule.map((day, i) => (
              <div className={`timetable-row ${day.day === 'Sunday' ? 'sunday' : ''}`} key={i}>
                <div className="day-label">{day.day}</div>
                <div className="day-slots">
                  {day.slots.map((slot, j) => (
                    <div className="slot-pill" key={j}>{slot}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOTES ===== */}
      <section className="section-sm notes-section">
        <div className="container">
          <div className="notes-grid">
            <div className="note-card">
              <div className="note-icon">📋</div>
              <div>
                <h4>Admission Process</h4>
                <p>Fill out the contact form or visit us directly. Admission is subject to seat availability and a brief interaction with the faculty.</p>
              </div>
            </div>
            <div className="note-card">
              <div className="note-icon">📝</div>
              <div>
                <h4>Free Demo Class</h4>
                <p>All new students are welcome to attend a free demo class before enrolling. Contact us to schedule your demo session.</p>
              </div>
            </div>
            <div className="note-card">
              <div className="note-icon">📞</div>
              <div>
                <h4>Need Help Choosing?</h4>
                <p>Unsure which batch to join? <Link to="/contact" style={{color: 'var(--navy)', fontWeight: 600}}>Contact us</Link> and our team will guide you to the right batch for your academic goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Batches;
