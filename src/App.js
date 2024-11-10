import React from 'react';
import Footer from './components/Footer'; // Ensure this path is correct
import ContactSection from './components/ContactSection'; // Ensure this path is correct
import FAQ from './components/FAQ'; // Ensure this path is correct
import Feature from './components/Feature'; // Ensure this path is correct
import TestimonialSection from './components/TestinominalSection'; // Corrected the typo
import MainFeature from './components/MainFeature'; // Ensure this path is correct
import LogoSection from './components/LogoSection'; // Ensure this path is correct
import Navbar from './components/Navbar'; // Ensure this path is correct
import Blog from './components/BlogSection'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <LogoSection />
      <MainFeature />
      <TestimonialSection />
      <Feature />  
      <FAQ />  
      <ContactSection /> 
      <Blog/>
      <Footer />
    </div>
  );
}

export default App;
