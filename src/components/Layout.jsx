import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import logoWhite from '../assets/icons/logo-white.svg';
import gitHubWhite from '../assets/icons/github-white.svg';
import linkedInWhite from '../assets/icons/linkedin-white.svg'


const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      }


    return (
        <div>
            <div className="layout container">
                <header>
                    <div>
                        <Link to="/"><img src={logo} alt="My Logo" /> </Link>
                    </div>
                    <nav className='normalNav'>
                        <Link to="/portfolio"><p className='navLink'>Home</p></Link>
                        <Link to="/portfolioPage"><p className='navLink'>Portfolio</p></Link>
                        <Link to="/contact"><p className='navLink'>Contact Me</p></Link>
                    </nav>
                    <button className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className='icon-hamburger' alt="Open Menu" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g  ><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
                    </button>
                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/portfolio"><p className='navLink'>Home</p></Link>
                        <Link to="/portfolioPage"><p className='navLink'>Portfolio</p></Link>
                        <Link to="/contact"><p className='navLink'>Contact Me</p></Link>
                    </div>
                </header>
                <main>
                    {children} 
                </main>
            </div>
            <footer>
                <div className='footer-div container'> 
                    <nav>
                        <Link to="/portfolio"><img className='bottomLogo' src={logoWhite} alt="My Logo" /> </Link>
                        <Link to="/portfolio"><p className='bottomNavLink'>Home</p></Link>
                        <Link to="/portfolioPage"><p className='bottomNavLink'>Portfolio</p></Link>
                        <Link to="/contact"><p className='bottomNavLink'>Contact Me</p></Link>
                    </nav>
                    <div className='socailList'>
                        <a href="https://github.com/kirsty02" target="_blank" >
                            <img src={gitHubWhite} alt="My Logo" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/kirstylast/" target="_blank" >
                            <img src={linkedInWhite} alt="My Logo" /> 
                        </a>
                    </div>
                </div>
     
            </footer>
            <div onClick={toggleMenu} className={`grey-background ${isMenuOpen ? 'open' : ''}`} > </div>
        </div>
    );
};

export default Layout;