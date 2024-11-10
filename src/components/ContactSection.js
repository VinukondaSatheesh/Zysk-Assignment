import React from 'react';
import './ContactSection.css'; 

const ContactSection = () => {
  

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="avatars">
          <img 
            src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214401/866434aa73c311701a963ddc75997754_opypd7.png" 
            alt="Team Member 1" 
            className="avatar" 
          />
          <img 
            src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214456/5cb712a39a846f3d49443b8283852dca_ssojhr.png" 
            alt="Team Member 2" 
            className="avatar" 
          />
          <img 
            src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214502/71188af6aa830e9296f62671157262d1_g4hhrg.png" 
            alt="Team Member 3" 
            className="avatar" 
          />
        </div>
        <h2 className="contact-title">Still have questions?</h2>
        <p className="contact-text">Can't find the answer you're looking for? Please chat with our friendly team.</p>
        <button className="contact-button">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
