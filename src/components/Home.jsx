import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import downArrows from '../assets/icons/down-arrows.svg';
import bannerImg from '../assets/images/hero.jpg';


const Home = () => {
    const navigate = useNavigate();
    const [isSmallScreen, setIsSmallScreen] = useState(false); 

    const gotoAbout = () => {
        navigate('/your-desired-path'); 
    };
    const gotoContact = () => {
        navigate('/contact'); 
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 500);
    };
    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
    }, []); 
    

    return (
        <div className="home">
            {isSmallScreen ? (
                <div className='mobile-hero'> 
                <div> 
                    <img className='heroImg' src={bannerImg} alt="Avatar"/>
                </div>
                <div className='heroDiv'> 
                    <h1> Hey, I'm Kirsty last and I love building beautiful websites</h1>
                    <button className='primary-btn'>
                        <div className='btnBox'>
                            <img src={downArrows} alt="Down Arrows" /> 
                        </div>
                        <p>
                            <Link to="about" spy={true} smooth={true}>
                                Go to About 
                            </Link>
                        </p>
                    </button>
                </div>
                </div>
            ) : (
                <div className='container hero'>
                <div className='heroDiv'> 
                    <h1> Hey, I'm Kirsty last and I love building beautiful websites</h1>
                    <button className='primary-btn'>
                    <div className='btnBox'>
                        <img src={downArrows} alt="Down Arrows" /> 
                    </div>
                    <p>
                        <Link to="about" spy={true} smooth={true}>
                            Go to About 
                        </Link>
                    </p>
                    </button>
                </div>
                </div>
            )}
            <div className='container about' id='about'>
                <div className='avatar'>
                </div>
                
                <div className='aboutContainer'>
                    <hr></hr>
                    <h2> About Me</h2>
                    <p> I’m a junior front-end developer looking for a new role
                         in an exciting company. I focus on writing accessible HTML,
                          using modern CSS practices and writing clean JavaScript. When 
                          writing JavaScript code, I mostly use React, but I can adapt to 
                          whatever tools are required. I’m based in London, UK, but I’m happy
                           working remotely and have experience in remote teams. When I’m not
                            coding, you’ll find me outdoors. I love
                         being out in nature whether that’s going for a walk, run or cycling. 
                         I’d love you to check out my work.
                    </p>
                    <button className='secondary-btn'> GO TO PORTFOLIO</button>
                    <hr></hr>
                </div>
            </div>
            <div className='contactBanner'>
                <h2> Interested in doing a project together?</h2> 
                <hr></hr>
                <button onClick={gotoContact} className='secondary-btn'>CONTACT ME </button>
            </div>
        </div>
    );
};

export default Home;