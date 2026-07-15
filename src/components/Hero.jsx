import { ArrowDown, ArrowRight, MessageCircle, ShieldAlert } from 'lucide-react';
import { buildWhatsappLink, products } from '../data/products.js';

const consultationLink = buildWhatsappLink('Hola CloudVape, deseo consultar disponibilidad de productos y sabores.');
const [maskking, waka, nasty] = products;
const benefits = ['Modelos originales', 'Selección curada', 'Pedido directo'];
const secondaryProducts = [waka, nasty];

function Hero() {
  return (
    <section id="inicio" className="hero-section scene-a">
      <img
        className="hero-backdrop"
        src="/catalog/cloudvape-hero.png"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="site-shell hero-layout">
        <div className="hero-copy">
          <p className="age-mark">
            <ShieldAlert aria-hidden="true" size={15} />
            Venta exclusiva para mayores de edad
          </p>
          <img className="hero-logo" src="/logo/cloudvape-text-slogan-web.png" alt="CloudVape" />
          <h1 className="hero-title">Eleva tu momento</h1>
          <p className="hero-description">
            Una selección curada de dispositivos originales con estética neón, sabores intensos y entrega coordinada en Quetzaltenango y Huehuetenango.
          </p>
          <div className="hero-actions">
            <a className="btn-primary btn-lg" href="#productos">
              Ver productos
              <ArrowDown aria-hidden="true" size={18} />
            </a>
            <a className="btn-secondary btn-lg" href={consultationLink} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} />
              Consultar disponibilidad
            </a>
          </div>
          <div className="hero-benefits">
            {benefits.map((benefit) => (
              <div key={benefit} className="benefit-pill">
                <span aria-hidden="true" />
                {benefit}
              </div>
            ))}
          </div>
          <p className="hero-warning">
            Este producto contiene nicotina. La nicotina es adictiva.
          </p>
        </div>

        <div className="hero-stage" aria-label="Productos destacados CloudVape">
          <div className="hero-halo" aria-hidden="true" />
          <div className="hero-product-main">
            <span className="hero-product-main__glow" aria-hidden="true" />
            <img src={maskking.image} alt={maskking.imageAlt} loading="eager" />
            <div className="hero-product-label">
              <span>{maskking.category}</span>
              <strong>{maskking.shortName}</strong>
              <em>{maskking.priceLabel}</em>
            </div>
          </div>
          <div className="hero-platform" aria-hidden="true" />
          <div className="hero-reflection" aria-hidden="true" />

          <div className="hero-preview-stack">
            {secondaryProducts.map((product) => (
              <a
                key={product.id}
                href="#productos"
                className="hero-preview-card"
                style={{ '--accent': product.accent.primary, '--accent-soft': product.accent.soft }}
              >
                <span className="hero-preview-card__image">
                  <img src={product.image} alt={product.imageAlt} loading="eager" />
                </span>
                <span>
                  <small>{product.category}</small>
                  <strong>{product.shortName}</strong>
                  <em>
                    {product.priceLabel}
                    <ArrowRight aria-hidden="true" size={14} />
                  </em>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
