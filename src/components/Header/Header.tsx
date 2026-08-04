import { type MouseEvent, useEffect, useState } from 'react';
import './Header.css';

const navItems = [
  { label: 'Hjem', href: '#hjem' },
  { label: 'Om Healing', href: '#om-healing' },
  { label: 'Om Sharon', href: '#om-sharon' },
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Kontakt', href: '#kontakt' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.history.replaceState(null, '', '#hjem');
    document.getElementById('hjem')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <nav className="site-header__nav" aria-label="Hovednavigasjon">
        <a className="site-header__brand" href="#hjem" onClick={handleHomeNavigation}>
          <span className="site-header__mark" aria-hidden="true" />
          <span className="site-header__brand-text">Healing Sharon</span>
        </a>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={isMenuOpen}
          aria-controls="site-header-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`site-header__links${isMenuOpen ? ' site-header__links--open' : ''}`}
          id="site-header-menu"
        >
          {navItems.map((item) => (
            <a
              className="site-header__link"
              href={item.href}
              key={item.href}
              onClick={item.href === '#hjem' ? handleHomeNavigation : () => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
