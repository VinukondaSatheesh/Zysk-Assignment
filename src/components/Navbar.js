import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        
          <nav class="nav-container">
            <div className='nav-1'>
              <img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731219795/Logomark_7_ikl4jb.png"  alt="" />
              <h3> Zysk Tech</h3>
              <p> Home </p>
              <p> Products </p>
              <p> Resources </p>
              <p> Pricing </p>               
            </div>
       

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div class="author-image"><img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214456/5cb712a39a846f3d49443b8283852dca_ssojhr.png" alt=""/></div>

          </nav>

        <div className="new-feature">
          <span className='new-fea'>New feature</span>
          <a href="#">Check out the team dashboard →</a>
        </div>
        
        <h1 className='beat-title'>Beautiful analytics to grow smarter</h1>
        <p className="subtitle">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        
        <div className="cta-buttons">
          <button className="btn demo">Demo</button>
          <button className="btn signup">Sign up</button>
        </div>
      </header>
      
      <main className="dashboard">
        <div className="stats-container">
          <img
            className="image"
            src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCxh4HkZRzbhpDbBiKOIV4mTVjBzbRQEgg268Lidl98wjBj2Wy~HFf38IOf9bSiu024iK11vw3bUThEXuZ1EQr8iz-d-A4lLP-0H5WdFF6f1~FGYO8TdmSq8X8uhKk7MXZmGd9oJtb--Sn5YpNWO6FkIg6sC3THVqXfMJwv9sHOIQZws8bYk~bAfEOG-hPecEulCPusFJ7JQfkyZ8hSv6Oi-G9JQEPBe2TSYX2hyoLVsiIAKdTdg0pm0op5iMX6ml4REkX712ytyjD~BCK6NNofR~KEXKn0GMvp344Se4FUDbdCaGJiKqJXObLSTQrYQiYwf8fY9YuAH0Z6NB4gPUA__"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default Navbar;
