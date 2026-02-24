import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './BugPage.css';
import Header from './Header';

const BugPage = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ YOUR EMAILJS CREDENTIALS
  const EMAILJS_SERVICE_ID = 'service_r44irtg';
  const EMAILJS_TEMPLATE_ID = 'template_xjkl86s';
  const EMAILJS_PUBLIC_KEY = 'OPY2i6LuEvWBN9LrN';

  const handleHomeClick = () => {
    navigate('/');
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get('from_name');
    const description = formData.get('message');
    
    if (!name || !name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (!description || !description.trim()) {
      alert('Please describe the bug');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Sending bug report...');

      // Send email directly using form ref - EmailJS handles everything!
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Success:', result);
      alert('✅ Bug report sent successfully! Thank you!');
      
      // Reset form
      formRef.current.reset();
     

    } catch (error) {
      console.error('Error:', error);
      alert('❌ Failed to send. Error: ' + (error.text || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bug-page">
      <Header 
        searchQuery="" 
        setSearchQuery={() => {}} 
        onHomeClick={handleHomeClick}
      />
      
      <div className="bug-content">
        <div className="bug-container">
          <div className="bug-header">
            <h1 className="bug-title"> Report a Bug</h1>
            <p className="bug-subtitle">Help us improve SBOMMA</p>
          </div>

          <div className="bug-info">
            <p>Found a bug? Please tell us about it!</p>
          </div>

          <form ref={formRef} className="bug-form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span className="label-icon">👤</span>
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="form-input"
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
              />
            </div>

         

            {/* Bug Description */}
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                <span className="label-icon">📝</span>
                Bug Description *
              </label>
              <textarea
                id="description"
                name="message"
                className="form-textarea"
                placeholder="Please describe the bug:
• What happened?
• What were you trying to do?
• What device/browser are you using?"
                rows="8"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Hidden field for submission date */}
            <input 
              type="hidden" 
              name="submission_date" 
              value={new Date().toLocaleString()} 
            />

            {/* Submit Button */}
            <div className="form-actions">
              <button 
                type="submit" 
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner">⏳</span> Sending...
                  </>
                ) : (
                  '📧 Send Bug Report'
                )}
              </button>
              <button 
                type="button" 
                className="btn-cancel"
                onClick={handleHomeClick}
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="bug-note">
           
            <p className="powered-by">⚡ Powered by SBOMMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugPage;
