import { MessageCircle } from 'lucide-react';
import { buildWhatsappLink, whatsappNumber } from '../data/products.js';

const footerLinks = [
  ['Inicio', '#inicio'],
  ['Productos', '#productos'],
  ['Comparativa', '#comparativa'],
  ['Sabores', '#sabores'],
  ['Entregas', '#entregas'],
  ['Catálogo digital', '#catalogo-digital'],
  ['Cómo pedir', '#como-pedir'],
  ['Preguntas frecuentes', '#faq'],
];

const link = buildWhatsappLink('Hola CloudVape, deseo recibir información del catálogo.');

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__line" aria-hidden="true" />
      <div className="site-shell site-footer__grid">
        <div>
          <img className="footer-logo" src="/logo/cloudvape-text-slogan-web.png" alt="CloudVape - Eleva tu momento" loading="lazy" />
          <p>
            Venta exclusiva para mayores de edad. Este producto contiene nicotina. La nicotina es adictiva.
          </p>
        </div>

        <div>
          <h2>Contacto y entregas</h2>
          <p>Quetzaltenango y Huehuetenango</p>
          <p>WhatsApp {whatsappNumber}</p>
          <a className="btn-primary footer-cta" href={link} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            Pedir por WhatsApp
          </a>
        </div>

        <nav aria-label="Navegación de pie de página">
          <h2>Navegación</h2>
          <div className="footer-links">
            {footerLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="site-footer__legal">
        Venta exclusiva para mayores de edad. Este producto contiene nicotina. La nicotina es adictiva.
      </div>
    </footer>
  );
}

export default Footer;
