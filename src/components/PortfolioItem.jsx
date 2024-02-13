import React from 'react';

import { Link } from 'react-router-dom';

const PortfolioItem = ({ title, description, imagePreview, id }) => {
    return (
        <div className="portfolio-item about ">
            <img src={imagePreview} alt={title} />
            <div className='aboutContainer'>
                <hr></hr>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={`/project/${id}`}> 
                    <button className="secondary-btn">VIEW PROJECT</button>
                </Link>
                <hr></hr>
            </div>
        </div>
        
    );
};

export default PortfolioItem;