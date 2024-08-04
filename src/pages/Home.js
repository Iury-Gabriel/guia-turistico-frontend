import React, { useState } from 'react';
import DestinationList from '../components/DestinationList';
import './Home.css';
import saoluisImg from '../assets/saoluis.jpg'
import alcantaraImg from '../assets/alcantara.jpg'
import lencoisImg from '../assets/lencois.jpg'

function Home() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header className={`navbar ${menuActive ? 'active' : ''}`}>
        <div className="logo">Guia Maranhão</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#destinations">Destinos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
      <div className="container">
        <header className="header">
          <h1>Guia Turístico do Maranhão</h1>
          <p>Explore as belezas naturais, a cultura rica e a culinária saborosa do Maranhão.</p>
        </header>
        <section className="section highlights">
          <h2>Destaques</h2>
          <div className="highlight">
            <img src={lencoisImg} alt="Lençóis Maranhenses" />
            <h3>Lençóis Maranhenses</h3>
            <p>Descubra as incríveis paisagens dos Lençóis Maranhenses, com suas dunas e lagoas de água cristalina.</p>
          </div>
          <div className="highlight">
            <img src={saoluisImg} alt="São Luís" />
            <h3>São Luís</h3>
            <p>Explore a capital do Maranhão, conhecida por sua rica história, cultura e arquitetura colonial.</p>
          </div>
          <div className="highlight">
            <img src={alcantaraImg} alt="Alcântara" />
            <h3>Alcântara</h3>
            <p>Visite Alcântara e conheça seus belos casarões coloniais e sua fascinante história.</p>
          </div>
        </section>
        <section className="section" id="about">
          <h2>Sobre</h2>
          <p>Este guia turístico online foi criado para ajudar visitantes a explorar os destinos mais populares do Maranhão, como São Luís, Lençóis Maranhenses e Alcântara. Navegue pelo site para descobrir informações básicas, atrativos e dicas de visitação para cada destino.</p>
        </section>
        <section className="section" id="destinations">
          <h2>Destinos</h2>
          <DestinationList />
        </section>
        <section className="section testimonials">
          <h2>Depoimentos</h2>
          <div className="testimonial">
            <p>"Uma experiência inesquecível! Os Lençóis Maranhenses são simplesmente maravilhosos."</p>
            <div className="author">- João Silva</div>
          </div>
          <div className="testimonial">
            <p>"Adorei a visita a São Luís. A cidade tem uma energia incrível e muitas histórias para contar."</p>
            <div className="author">- Maria Oliveira</div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>© 2024 Guia Maranhão. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
