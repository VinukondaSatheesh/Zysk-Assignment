import React, { useState } from 'react';
import './Feature.css';
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5"

import { IoBarChartOutline,} from "react-icons/io5"

const App = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleDeviceView = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className='cutting-head'>Cutting-edge features for advanced analytics</h1>
        <p className="subtitle">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </header>
      

      <main className="dashboard">
        <section className="analytics-section">
          <div className="device-preview">
            <img className="image-1"
                src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731259713/Content_xit5xp.png" />
                <img className='image-2' src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731317786/iPhone_12_Pro_mockup_rp6bf1.png" alt="" />
            </div>
        </section>

        <section className="features-section">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

const features = [
  {
    icon: <IoChatbubblesOutline />,
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
  },
  {
    icon: <IoFlashOutline />,
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
  },
  {
    icon: <IoBarChartOutline />,
    title: 'Manage your team with reports',
    description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.'
  }
];

export default App;
