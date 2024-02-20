import React from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';


const PortfolioPage = ({ portfolioItems }) => {


    const navigate = useNavigate();

    const gotoContact = () => {
        navigate('/contact'); 
    };

    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
                {portfolioItems.map(item => (
                    <PortfolioItem key={item.id} {...item} />
                ))}
            </div>
            <div className='contactBanner'>
                <h2> Interested in doing a project together?</h2> 
                <hr></hr>
                <button onClick={gotoContact} className='secondary-btn'>CONTACT ME</button>
            </div>
        </div>
    );
};

export default PortfolioPage;