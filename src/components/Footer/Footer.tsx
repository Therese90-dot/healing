import { useEffect, useRef, useState } from "react";
import "./Footer.css";
import healerforbund from "../../assets/images/norskspiritualistforening.jpg";
import yggdrasil from "../../assets/images/yggdrasil.png";

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
      className={`footer-section${hasAnimated ? " footer-section--visible" : ""}`}
      ref={footerRef}
    >
      <div className="footer-section__content">
        <p className="footer-section__symbol" aria-hidden="true">
          ✦
        </p>
        <p className="footer-section__brand">HEALING SHARON</p>
        <p className="footer-section__tagline">
          Et trygt sted for ro, energi og balanse.
        </p>

        <div className="footer-section__socials" aria-label="Sosiale medier">
          <a
            href="https://www.instagram.com/healingsharon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="footer-section__social-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.25" />
              <circle cx="17.4" cy="6.6" r="0.75" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="footer-section__tree-wrap">
        <div className="footer-section__particles">
          {Array.from({ length: 14 }, (_, index) => (
            <span className="footer-section__particle" key={index} />
          ))}
        </div>
        <span className="footer-section__falling-star" />

        <img
          className="footer-section__tree"
          src={yggdrasil}
          alt="Yggdrasil, livets tre"
          loading="lazy"
        />
      </div>

      <p className="footer-section__quote">Alt henger sammen</p>
      <div className="footer-section__approval">
        <p>Godkjent healer</p>
        <img
          src={healerforbund}
          alt="Norsk Spiritualist Forening Healerforbund"
          loading="lazy"
        />
      </div>
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
