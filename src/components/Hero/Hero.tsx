import './Hero.css';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="hjem" className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-section__overlay" />
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">Velkommen</p>
        <h1>Healing Sharon</h1>
        <p className="hero-section__subtitle">Ro • Energi • Balanse</p>
        <p className="hero-section__text">
          Et trygt sted hvor du kan finne indre ro, ny energi og tid til deg selv.
        </p>
        <div className="hero-section__actions">
          <a className="hero-section__button hero-section__button--primary" href="#kontakt">
            Bestill time
          </a>
          <a className="hero-section__button hero-section__button--secondary" href="#om-healing">
            Les mer
          </a>
          <a
            className="hero-section__button hero-section__button--secondary"
            href="https://www.instagram.com/healingsharon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
