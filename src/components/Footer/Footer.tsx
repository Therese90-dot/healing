import { useEffect, useRef, useState } from 'react';
import './Footer.css';
import yggdrasil from '../../assets/images/yggdrasil.png';

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`footer-section${hasAnimated ? ' footer-section--visible' : ''}`}
      ref={footerRef}
    >
      <div className="footer-section__content">
        <p className="footer-section__symbol" aria-hidden="true">✦</p>
        <p className="footer-section__brand">HEALING SHARON</p>
        <p className="footer-section__tagline">Et trygt sted for ro, energi og balanse.</p>

        <div className="footer-section__socials" aria-label="Sosiale medier">
          <a href="#facebook" aria-label="Facebook">
            Facebook
          </a>
          <a href="#instagram" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-section__tree-wrap" aria-hidden="true">
        <div className="footer-section__particles">
          {Array.from({ length: 14 }, (_, index) => (
            <span className="footer-section__particle" key={index} />
          ))}
        </div>
        <span className="footer-section__falling-star" />

        <img
          className="footer-section__tree"
          src={yggdrasil}
          alt=""
          loading="lazy"
        />
      </div>

      <p className="footer-section__quote">Alt henger sammen</p>
      <p className="footer-section__copyright">
        &copy; 2026 Healing Sharon. Alle rettigheter reservert.
      </p>
      <p className="footer-section__crafted">
        Crafted with <span>💙</span> in Bergen
      </p>
    </footer>
  );
};

export default Footer;
