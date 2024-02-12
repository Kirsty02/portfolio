import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    // Example portfolio data (you'd likely fetch this from an API)
    const portfolioItems = [
        { id: 1, title: 'Project 1', description: '...', image: 'project1.jpg' },
        // ... more project data
    ];

    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
                {portfolioItems.map(item => (
                    <PortfolioItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;