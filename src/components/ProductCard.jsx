import { ArrowDown, MessageCircle, PackageCheck, Sparkles } from 'lucide-react';
import ProductImage from './ProductImage.jsx';
import { buildWhatsappLink } from '../data/products.js';

function ProductCard({ product }) {
  const orderLink = buildWhatsappLink(product.whatsappMessage);
  const accentStyle = {
    '--accent': product.accent.primary,
    '--accent-2': product.accent.secondary,
    '--accent-soft': product.accent.soft,
    '--accent-glow': product.accent.glow,
  };

  return (
    <article className="product-card reveal-up" style={accentStyle}>
      <div className="product-visual">
        <span className="product-visual__halo" aria-hidden="true" />
        <span className="product-photo-frame">
          <ProductImage
            item={product}
            className="product-image"
            sizes="(min-width: 1024px) 28vw, 90vw"
          />
        </span>
      </div>

      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-stock-row" aria-label={`Disponibilidad de ${product.shortName}`}>
          <span className="price-chip">{product.priceLabel}</span>
          <span>
            <PackageCheck aria-hidden="true" size={17} />
            {product.stockTotal} unidades
          </span>
          <span>
            <Sparkles aria-hidden="true" size={17} />
            {product.flavorCount} sabores
          </span>
        </div>

        <ul className="product-feature-list">
          {product.highlights.slice(0, 3).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="product-actions">
          <a className="btn-secondary" href="#disponibilidad">
            <ArrowDown aria-hidden="true" size={18} />
            Explorar sabores
          </a>
          <a className="btn-primary" href={orderLink} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
