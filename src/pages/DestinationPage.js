import React, { useState } from 'react';
import DestinationDetail from '../components/DestinationDetail';
import './DestinationPage.css';
import { Link } from 'react-router-dom';

function DestinationPage() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="page-container">
      <header className={`navbar ${menuActive ? 'active' : ''}`}>
        <div className="logo">Guia Maranhão</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <nav>
          <Link to="/home"><a href="#home">Home</a></Link>
        </nav>
      </header>
      <DestinationDetail />
    </div>
  );
}

export default DestinationPage;
