import React from 'react';
import './TestinominalSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731215431/Fictional_company_logo_elrc3f.png" alt="Sisyphus Logo" className="company-logo" />
        <p className="testimonial-text">
          We've been using Untitled to kick start every new project and can’t imagine working without it.
        </p>
        <div className="user-info">
          <img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731215149/94e98ef4a34b3228a1783b7f500b0df6_g5ikoo.png" alt="Candice Wu" className="user-photo" />
          <div className="user-details">
            <p className="user-name">Candice Wu</p>
            <p className="user-title">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
