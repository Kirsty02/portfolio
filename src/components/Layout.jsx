import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import logoWhite from '../assets/icons/logo-white.svg';
import gitHubWhite from '../assets/icons/github-white.svg';
import linkedInWhite from '../assets/icons/linkedin-white.svg'


const Layout = ({ children }) => {
    return (
        <div className="layout container">
            <header>
                <div>
                    <img src={logo} alt="My Logo" /> 

                </div>
                <nav>
                    <Link to="/"><p className='navLink'>Home</p></Link>
                    <Link to="/portfolio"><p className='navLink'>Portfolio</p></Link>
                    <Link to="/contact"><p className='navLink'>Contact Me</p></Link>
                </nav>
            </header>
            <main>
                {children} 
            </main>
            <footer className='container'>
                <nav>
                    <Link to="/"><img className='bottomLogo' src={logoWhite} alt="My Logo" /> </Link>
                    <Link to="/"><p className='bottomNavLink'>Home</p></Link>
                    <Link to="/portfolio"><p className='bottomNavLink'>Portfolio</p></Link>
                    <Link to="/contact"><p className='bottomNavLink'>Contact Me</p></Link>
                </nav>
                <div className='socailList'>
                    <img src={gitHubWhite} alt="My Logo" /> 
                    <img src={linkedInWhite} alt="My Logo" /> 
                </div>
            </footer>
        </div>
    );
};

export default Layout;