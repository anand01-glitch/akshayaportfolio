import React, { useState } from 'react';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import './Contact.css';

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="info-icon"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="info-icon"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API request submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto close success alert after 4 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        {/* Contact Info cards */}
        <div className="contact-info">
          <h3>Let's collaborate</h3>
          <p className="contact-intro">
            Have a project in mind, want to discuss a job role, or just want to say hi? 
            Feel free to send a message. I will get back to you as soon as possible.
          </p>

          <div className="info-cards-list">
            <div className="info-card glass-panel">
              <div className="info-icon-wrapper cyan-glow">
                <Mail size={20} className="info-icon" />
              </div>
              <div className="info-text">
                <span className="info-label">Email Me</span>
                <a href="mailto:ksakshaya.03.28@gmail.com" className="info-value">ksakshaya.03.28@gmail.com</a>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon-wrapper purple-glow">
                <WhatsappIcon size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">WhatsApp Me</span>
                <a 
                  href="https://wa.me/918139843912" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="info-value"
                >
                  +91 81398 43912
                </a>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon-wrapper cyan-glow">
                <LinkedinIcon size={20} />
              </div>
              <div className="info-text">
                <span className="info-label">LinkedIn</span>
                <a 
                  href="https://www.linkedin.com/in/akshaya-k-s-46a2a5320" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="info-value"
                >
                  akshaya-k-s-46a2a5320
                </a>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon-wrapper pink-glow">
                <MapPin size={20} className="info-icon" />
              </div>
              <div className="info-text">
                <span className="info-label">Location</span>
                <span className="info-value">Palakkad, Kerala</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container glass-panel">
          {submitSuccess ? (
            <div className="form-success-state">
              <div className="success-checkmark-circle">
                <Check size={40} className="success-check-icon" />
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    placeholder="john@example.com"
                  />
                  {errors.name && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'input-error' : ''}
                  placeholder="Project Discussion"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                  placeholder="Write your message here..."
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
