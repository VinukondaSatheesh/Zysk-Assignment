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
            <img className="image"
              src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCxh4HkZRzbhpDbBiKOIV4mTVjBzbRQEgg268Lidl98wjBj2Wy~HFf38IOf9bSiu024iK11vw3bUThEXuZ1EQr8iz-d-A4lLP-0H5WdFF6f1~FGYO8TdmSq8X8uhKk7MXZmGd9oJtb--Sn5YpNWO6FkIg6sC3THVqXfMJwv9sHOIQZws8bYk~bAfEOG-hPecEulCPusFJ7JQfkyZ8hSv6Oi-G9JQEPBe2TSYX2hyoLVsiIAKdTdg0pm0op5iMX6ml4REkX712ytyjD~BCK6NNofR~KEXKn0GMvp344Se4FUDbdCaGJiKqJXObLSTQrYQiYwf8fY9YuAH0Z6NB4gPUA__" />
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
