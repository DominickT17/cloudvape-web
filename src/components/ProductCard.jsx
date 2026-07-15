import { BatteryCharging, Eye, Gauge, Info, MessageCircle, Monitor, ShieldCheck, Zap } from 'lucide-react';
import ProductFeature from './ProductFeature.jsx';
import { buildWhatsappLink } from '../data/products.js';

const featureIcons = [Gauge, BatteryCharging, Monitor, Zap, ShieldCheck, Info];

function ProductCard({ product, onViewDetails, variant = 'standard' }) {
  const orderLink = buildWhatsappLink(product.whatsappMessage);
  const accentStyle = {
    '--accent': product.accent.primary,
    '--accent-2': product.accent.secondary,
    '--accent-soft': product.accent.soft,
    '--accent-glow': product.accent.glow,
  };

  return (
    <article className={`product-card product-card--${variant} reveal-up`} style={accentStyle}>
      <div className="product-visual">
        <div className="product-visual__halo" aria-hidden="true" />
        <span className="product-photo-frame">
          <img className="product-image" src={product.image} alt={product.imageAlt} loading="lazy" />
        </span>
        <div className="product-visual__reflection" aria-hidden="true" />
      </div>

      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <div className="product-title-row">
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
          <p className="price-chip">{product.priceLabel}</p>
        </div>

        <ul className="product-feature-list">
          {product.highlights.slice(0, 3).map((feature, index) => (
            <ProductFeature key={feature} icon={featureIcons[index] || Info}>
              {feature}
            </ProductFeature>
          ))}
        </ul>

        <div className="product-actions">
          <a className="btn-primary" href={orderLink} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            Pedir por WhatsApp
          </a>
          <button className="btn-secondary" type="button" onClick={onViewDetails}>
            <Eye aria-hidden="true" size={18} />
            Ver detalles
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
