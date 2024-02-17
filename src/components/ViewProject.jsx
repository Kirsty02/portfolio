import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const ViewProject = ({ portfolioItems }) => {
    const { projectId } = useParams();
    const navigate = useNavigate();

        

    const project = portfolioItems.find(item => item.id === parseInt(projectId, 10));

    if (!project) {
        return <div>Project not found</div>;
    }

    const imagePath = project.imageBanner;
    const staticPath1 = project.imageStatic1;
    const staticPath2 = project.imageStatic2;

    
    const gotoContact = () => {
        navigate('/contact'); 
    };



    return (
    <div className='container'>
        <img className='banner' src={imagePath} alt={project.title} />
        <div className='columns'>
            <div className='leftColumn'>
                <hr></hr>
                <h3> Key Features</h3>
                <p className='body-2'>{project.why} </p>
                <div>
                    
                    {project.features.map((feature, index) => (
                    <p className='features'  key={index}>{feature} </p>
                    ))}

                </div>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className='secondary-btn'>
                    <p>VISIT GUTHUB PAGE</p>
                </a> 
                <hr></hr>
            </div>
            <div className='rightColumn'>
                <h3> Project Background</h3>
                <p className='body-2'> {project.description}</p>
                <h3> Static Previews</h3>
                <img  className='static' src={staticPath2} alt={project.title} />
                <img  src={staticPath1} alt={project.title} />
            </div>
        </div>
        <div className='contactBanner'>
            <h2> Interested in doing a project together?</h2> 
            <hr></hr>
            <button onClick={gotoContact} className='secondary-btn'>CONTACT ME</button>
        </div>
    </div>
  );
};

export default ViewProject;