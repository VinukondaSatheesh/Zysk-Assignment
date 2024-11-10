import React from 'react';
import './LogoSection.css';
// import { IoChatbubblesOutline } from "react-icons/io5";

const LogoSection = () => {
  const logos = [
    { src: 'https://res.cloudinary.com/dsxcwafcw/image/upload/v1731217390/Logomark_1_mcjhj2.png', alt: '', name: 'Boltshift' },
    { src: 'https://res.cloudinary.com/dsxcwafcw/image/upload/v1731217969/Logomark_2_lvldzm.png', alt: '', name: 'Lightbox' },
    { src: 'https://res.cloudinary.com/dsxcwafcw/image/upload/v1731217991/Logomark_3_osdjnd.png', alt: 'FeatherDev Logo', name: 'FeatherDev' },
    { src: 'https://res.cloudinary.com/dsxcwafcw/image/upload/v1731218039/Logomark_4_djqnjj.png', alt: 'Spherule Logo', name: 'Spherule' },
    { src: 'https://res.cloudinary.com/dsxcwafcw/image/upload/v1731218063/Logomark_5_iupvsz.png', alt: 'GlobalBank Logo', name: 'GlobalBank' },
    { src: 'https://res.cloudinary.com/dsxcwafcw/image/upload/v1731218084/Logomark_6_vkonmh.png', alt: 'Nietzsche Logo', name: 'Nietzsche' },
  ];

  return (
    <section className="logo-section">
      <p className="logo-text">Join 4,000+ companies already growing</p>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo.src} alt={logo.alt} />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
