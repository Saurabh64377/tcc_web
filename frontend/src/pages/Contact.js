import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const initialForm = {
  name: '',
  phone: '',
  classLevel: '',
  subject: '',
  address:'',
  message: '',
};

const classOptions = ['Class 9', 'Class 10', 'Class 11', 'Class 12'];
const subjectOptions = {
  'Class 9': ['Physics', 'Chemistry', 'Mathematics', 'All Subjects (PCM)'],
  'Class 10': ['Physics', 'Chemistry', 'Mathematics', 'All Subjects (PCM)'],
  'Class 11': ['Physics', 'Mathematics', 'Chemistry', 'Biology', 'PCM (Physics+Chem+Math)', 'PCB (Physics+Chem+Bio)'],
  'Class 12': ['Physics', 'Mathematics', 'Chemistry', 'Biology', 'PCM (Physics+Chem+Math)', 'PCB (Physics+Chem+Bio)'],
};

const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Target Coaching Classes, ThakurDwara,Bridgemanganj Uttar Pradesh' },
  { icon: '📞', label: 'Phone', value: ' 8090266651 | 8960280989' },
  { icon: '📧', label: 'Email', value: 'vishalverma@gmail.com' },
  { icon: '⏰', label: 'Hours', value: 'Mon–Sat: 7:00 AM – 9:00 PM\nSun: 10:00 AM – 1:00 PM' },
];

const Contact = () => {
  const API_URL = process.env.REACT_APP_API_URL
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState('');

  // Live validation
  const validate = (data) => {
    const errs = {};
    if (!data.name || data.name.trim().length < 2)
      errs.name = 'Name must be at least 2 characters';
    if (!data.phone || !/^[0-9]{10}$/.test(data.phone.trim()))
      errs.phone = 'Enter a valid 10-digit phone number';
    if (!data.classLevel)
      errs.classLevel = 'Please select your class';
    if (!data.subject)
      errs.subject = 'Please select a subject';
    if (!data.address || data.address.trim().length < 10)
      errs.address = 'Address must be at least 10 characters';
    if (!data.message || data.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    // Reset subject if class changes
    if (name === 'classLevel') {
      updated.subject = '';
    }
    setForm(updated);
    // Clear error for changed field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setErrors({});
    console.log(form)

    try {
      const res = await axios.post(`${API_URL}/api/contact`, form);
      if (res.data.success) {
        setStatus('success');
        setServerMsg(res.data.message);
        setForm(initialForm);
      } else {
        setStatus('error');
        setServerMsg(res.data.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      if (err.response?.data?.errors) {
        setServerMsg(err.response.data.errors.join(', '));
      } else {
        setServerMsg('Unable to submit. Please check your connection and try again.');
      }
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setServerMsg('');
    setForm(initialForm);
    setErrors({});
  };

  const currentSubjects = form.classLevel ? subjectOptions[form.classLevel] || [] : [];

  return (
    <div className="contact-page">
      {/* ===== PAGE HEADER ===== */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">Home <span>/</span> Contact</div>
          <h1>Get in Touch</h1>
          <p>Have a question or want to enroll? We'd love to hear from you.</p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* ===== LEFT: Info ===== */}
            <div className="contact-info-panel">
              <div className="section-tag">📬 Contact Us</div>
              <h2 className="contact-info-title">Let's Start Your <span>Academic Journey</span></h2>
              <div className="divider divider-left"></div>
              <p className="contact-intro">
                Ready to join Target Coaching Classes? Fill out the form and our team 
                will get back to you within 24 hours. You can also reach us directly during office hours.
              </p>

              <div className="info-cards">
                {contactInfo.map((info, i) => (
                  <div className="info-card" key={i}>
                    <div className="info-card-icon">{info.icon}</div>
                    <div>
                      <div className="info-card-label">{info.label}</div>
                      <div className="info-card-value">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-note">
                <span>🎯</span>
                <span>Free demo class available for all new students. Mention in your message!</span>
              </div>
            </div>

            {/* ===== RIGHT: Form ===== */}
            <div className="contact-form-panel card">
              {/* Success State */}
              {status === 'success' ? (
                <div className="success-state">
                  <div className="success-icon">🎉</div>
                  <h3>Enquiry Submitted!</h3>
                  <p>{serverMsg}</p>
                  <div className="success-details">
                    <span>✅ Your details have been saved</span>
                    <span>📧 Confirmation email sent</span>
                    <span>📞 We'll call you within 24 hours</span>
                  </div>
                  <button onClick={resetForm} className="btn btn-primary">
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
                  <div className="form-header">
                    <h3>Enquiry Form</h3>
                    <p>All fields are required</p>
                  </div>

                  {/* Server error */}
                  {status === 'error' && (
                    <div className="form-error-banner">
                      ❌ {serverMsg}
                    </div>
                  )}

                  {/* Name */}
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">👤 Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone">📞 Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      autoComplete="tel"
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  {/* Class & Subject row */}
                  <div className="form-row">
                    <div className={`form-group ${errors.classLevel ? 'has-error' : ''}`}>
                      <label htmlFor="classLevel">🏫 Class</label>
                      <select
                        id="classLevel"
                        name="classLevel"
                        value={form.classLevel}
                        onChange={handleChange}
                      >
                        <option value="">Select Class</option>
                        {classOptions.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      {errors.classLevel && <span className="field-error">{errors.classLevel}</span>}
                    </div>

                    <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                      <label htmlFor="subject">📚 Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        disabled={!form.classLevel}
                      >
                        <option value="">
                          {form.classLevel ? 'Select Subject' : 'Select class first'}
                        </option>
                        {currentSubjects.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.subject && <span className="field-error">{errors.subject}</span>}
                    </div>
                  </div>
                  {/* address */}
                  <div className={`form-group ${errors.address ? 'has-error' : ''}`}>
                    <label htmlFor="address">📍Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="your current address..."
                      rows={1}
                    />
                    <div className="char-count">
                      {form.address.length} chars {form.address.length < 10 && form.address.length > 0 ? `(${10 - form.address.length} more needed)` : ''}
                    </div>
                    {errors.address && <span className="field-error">{errors.address}</span>}
                  </div>

                  {/* Message */}
                  <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                    <label htmlFor="message">💬 Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your academic goals, preferred batch timing, or any questions you have..."
                      rows={5}
                    />
                    <div className="char-count">
                      {form.message.length} chars {form.message.length < 10 && form.message.length > 0 ? `(${10 - form.message.length} more needed)` : ''}
                    </div>
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`btn btn-primary submit-btn ${status === 'loading' ? 'loading' : ''}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      '🚀 Submit Enquiry'
                    )}
                  </button>

                  <p className="form-disclaimer">
                    🔒 Your information is safe and will only be used to contact you about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
