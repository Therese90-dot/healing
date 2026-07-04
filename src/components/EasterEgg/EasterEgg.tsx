import { useEffect, useState } from 'react';
import './EasterEgg.css';

const particles = Array.from({ length: 18 }, (_, index) => index);

const EasterEgg = () => {
  const [, setClickCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');

    if (!heroSection) {
      return undefined;
    }

    const handleHeroClick = () => {
      if (isActive) {
        return;
      }

      setClickCount((currentCount) => {
        const nextCount = currentCount + 1;

        if (nextCount >= 3) {
          setIsActive(true);
          return 0;
        }

        return nextCount;
      });
    };

    heroSection.addEventListener('click', handleHeroClick);

    return () => heroSection.removeEventListener('click', handleHeroClick);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsActive(false);
      setClickCount(0);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return (
    <div className="easter-egg" aria-live="polite" aria-label="Magisk melding">
      <div className="easter-egg__particles" aria-hidden="true">
        {particles.map((particle) => (
          <span className="easter-egg__particle" key={particle} />
        ))}
      </div>
      <div className="easter-egg__raven" aria-hidden="true">
        <span className="easter-egg__wing easter-egg__wing--left" />
        <span className="easter-egg__body" />
        <span className="easter-egg__wing easter-egg__wing--right" />
      </div>
      <p className="easter-egg__message">
        Den som søker stillheten, finner ofte svarene.
      </p>
    </div>
  );
};

export default EasterEgg;
