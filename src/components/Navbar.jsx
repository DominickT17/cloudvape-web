import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { buildWhatsappLink } from '../data/products.js';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Disponibilidad', href: '#disponibilidad' },
  { label: 'Comparativa', href: '#comparativa' },
  { label: 'Entregas', href: '#entregas' },
  { label: 'Catálogo', href: '#catalogo-digital' },
  { label: 'FAQ', href: '#faq' },
];

const whatsappLink = buildWhatsappLink('Hola CloudVape, deseo consultar disponibilidad de productos.');

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      const current = sections.reduce((active, section) => {
        if (section.offsetTop <= marker) {
          return section.id;
        }

        return active;
      }, sections[0]?.id || 'inicio');

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__line" aria-hidden="true" />
      <nav className="site-shell site-nav" aria-label="Navegación principal">
        <a className="nav-brand" href="#inicio" onClick={closeMenu}>
          <img className="nav-logo" src="/logo/cloudvape-horizontal-web.png" alt="CloudVape" />
          <span className="sr-only">CloudVape inicio</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'is-active' : ''}`}
              href={item.href}
              aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" size={18} />
          <span>WhatsApp</span>
        </a>

        <button className="nav-menu-button" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}>
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-nav-shell" id="mobile-menu">
          <button className="mobile-nav-backdrop" type="button" onClick={closeMenu} aria-label="Cerrar menú" />
          <div className="mobile-nav-panel">
            <div className="mobile-nav-panel__head">
              <img src="/logo/cloudvape-horizontal-web.png" alt="CloudVape" />
              <button type="button" onClick={closeMenu} aria-label="Cerrar menú">
                <X aria-hidden="true" size={22} />
              </button>
            </div>
            {navItems.map((item) => (
              <a key={item.href} className={activeSection === item.href.slice(1) ? 'is-active' : ''} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="btn-primary mobile-nav-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <MessageCircle aria-hidden="true" size={18} />
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
