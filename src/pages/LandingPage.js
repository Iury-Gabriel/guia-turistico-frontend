import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import praiaImg from '../assets/praia.jpg';
import boiBumbaImg from '../assets/boi-bumba.jpg';
import gastronomiaImg from '../assets/gastronomia.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Bem-vindo ao Guia Turístico do Maranhão</h1>
        <p>Descubra os melhores destinos e atrativos do Maranhão.</p>
        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Registrar</Link>
        </div>
      </header>
      <section className="features">
        <h2>Por que escolher o Maranhão?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={praiaImg} alt="Praias" />
            <h3>Praias</h3>
            <p>Explore as belas praias e aproveite o sol e o mar.</p>
          </div>
          <div className="feature-card">
            <img src={boiBumbaImg} alt="Cultura" />
            <h3>Cultura</h3>
            <p>Conheça a rica cultura e as tradições locais.</p>
          </div>
          <div className="feature-card">
            <img src={gastronomiaImg} alt="Gastronomia" />
            <h3>Gastronomia</h3>
            <p>Desfrute da deliciosa gastronomia maranhense.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2024 Guia Turístico do Maranhão. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
