import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/PortfolioPage';
import Contact from './components/Contact';
import ViewProject from './components/ViewProject'; 
import './styles/style.scss'; 
import PortfolioPage from './components/PortfolioPage';

function App() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/portfolioData.json');
        const data = await response.json();
        setPortfolioItems(data);
        
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        
      }
    };

    fetchData();
  }, []);
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolioPage" element={<PortfolioPage portfolioItems={portfolioItems} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ViewProject portfolioItems={portfolioItems} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;