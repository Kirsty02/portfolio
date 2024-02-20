import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import downArrows from '../assets/icons/down-arrows.svg';
import bannerImg from '../assets/images/hero.jpg';


const Home = () => {
    const navigate = useNavigate();
    const [isSmallScreen, setIsSmallScreen] = useState(false); 

    const gotoPortfolio = () => {
        navigate('/portfolioPage'); 
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
                    <h1> Hey, I'm Kirsty Last and I love building beautiful websites</h1>
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
                    <h2> About me</h2>
                    <p> I'm a junior full-stack developer with a passion for building engaging and 
                        functional web applications. I have hands-on experience with technologies like 
                        React.js, Vue.js, Node.js, Express.js, Laravel, MongoDB, and MySQL.
                        I'm driven by crafting accessible HTML, efficient CSS, and well-structured JavaScript.  Whether it's a 
                        React, Vue, or a different framework, I'm adaptable and enthusiastic about learning the right tools for
                        the job. I work well both remotely and as part of a team.
                        When I'm not coding, I recharge outdoors. You'll likely find me hiking, running, or exploring on my
                        bike. I invite you to take a look at my portfolio and explore my work in more detail.
                    </p>
                    <button onClick={gotoPortfolio} className='secondary-btn'> GO TO PORTFOLIO</button>
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