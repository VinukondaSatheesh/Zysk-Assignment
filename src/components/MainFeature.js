

import React from 'react';
import './MainFeature.css'; // Assuming your styles are in App.css or any other file you choose
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoFlashOutline, IoBarChartOutline, IoChatbubbleEllipsesOutline, IoLinkOutline, IoPeopleOutline } from "react-icons/io5";

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const MainFeature = () => {
    const features = [
        {
            icon: <IoChatbubblesOutline />,
            title: 'Share team inboxes',
            description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
        },
        {
            icon: <IoFlashOutline />,
            title: 'Deliver instant answers',
            description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
        },
        {
            icon: <IoBarChartOutline />,
            title: 'Manage your team with reports',
            description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.',
        },
        {
            icon: <IoChatbubbleEllipsesOutline />,
            title: 'Connect with customers',
            description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
        },
        {
            icon: <IoLinkOutline />,
            title: 'Connect the tools you already use',
            description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
        },
        {
            icon: <IoPeopleOutline />,
            title: 'Our people make the difference',
            description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
        },
    ];

    return (
        <div className="App">
            <header className="header">
                <h2 className="feature-title">Features</h2>
                <h1 className="main-title">Analytics that feels like it’s from the future</h1>
                <p className="subtitle">
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </header>

            <section className="features-container">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </section>
        </div>
    );
};

export default MainFeature;
