import React from 'react';

import { Link } from 'react-router-dom';

const PortfolioItem = ({ title, description, imagePreview, id }) => {
    return (
        <div className="portfolio-item">
            <div className='imagePreview'>
                <img src={imagePreview} alt={title} />
            </div>
            
            <div className='itemContainer'>
                <hr></hr>
                <h3>{title}</h3>
                <p className='body-2'>{description}</p>
                <Link to={`/project/${id}`}> 
                    <button className="secondary-btn">VIEW PROJECT</button>
                </Link>
                <hr></hr>
            </div>
        </div>
        
    );
};

export default PortfolioItem;