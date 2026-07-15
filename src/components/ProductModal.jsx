import { useEffect, useRef, useState } from 'react';
import { BatteryCharging, ChevronLeft, ChevronRight, Gauge, MessageCircle, Monitor, ShieldAlert, X, Zap } from 'lucide-react';
import FlavorChip from './FlavorChip.jsx';
import ProductFeature from './ProductFeature.jsx';
import { buildWhatsappLink } from '../data/products.js';

const specItems = [
  ['Puffs', 'puffs', Gauge],
  ['Recarga', 'rechargeable', BatteryCharging],
  ['Pantalla', 'display', Monitor],
  ['Nicotina', 'nicotine', ShieldAlert],
  ['Batería', 'battery', Zap],
  ['Modos', 'modes', Gauge],
];

function ProductModal({ product, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef(null);
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const orderLink = buildWhatsappLink(product.whatsappMessage);

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index + 1) % gallery.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gallery.length, onClose]);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % gallery.length);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="product-modal"
        style={{
          '--accent': product.accent.primary,
          '--accent-2': product.accent.secondary,
          '--accent-soft': product.accent.soft,
          '--accent-glow': product.accent.glow,
        }}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar detalles del producto">
          <X aria-hidden="true" size={22} />
        </button>

        <div className="modal-gallery">
          <div className="modal-image-frame">
            <span className="modal-image-halo" aria-hidden="true" />
            <img
              src={gallery[activeIndex]}
              alt={product.galleryAlt?.[activeIndex] || product.imageAlt}
              className="modal-product-image"
              loading="lazy"
            />
            {gallery.length > 1 && (
              <div className="modal-image-controls" aria-label="Navegación de imágenes">
                <button type="button" onClick={showPrevious} aria-label="Imagen anterior">
                  <ChevronLeft aria-hidden="true" size={22} />
                </button>
                <span>{activeIndex + 1} de {gallery.length}</span>
                <button type="button" onClick={showNext} aria-label="Imagen siguiente">
                  <ChevronRight aria-hidden="true" size={22} />
                </button>
              </div>
            )}
          </div>

          <div className="modal-thumbs" aria-label="Miniaturas del producto">
            {gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                className={activeIndex === index ? 'is-selected' : ''}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver imagen ${index + 1} de ${product.shortName}`}
              >
                <img src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <aside className="modal-copy">
          <div className="modal-copy__scroll">
            <p className="product-category">{product.category}</p>
            <div className="modal-title-row">
              <h2 id="product-modal-title">{product.name}</h2>
              <p className="modal-price">{product.priceLabel}</p>
            </div>
            <p className="modal-description">{product.description}</p>

            <div className="modal-spec-grid">
              {specItems.map(([label, key, Icon]) => (
                <div key={key} className="modal-spec">
                  <Icon aria-hidden="true" size={17} />
                  <span>{label}</span>
                  <strong>{product[key]}</strong>
                </div>
              ))}
            </div>

            <div className="modal-block">
              <h3>Características</h3>
              <ul className="modal-feature-grid">
                {product.highlights.map((feature) => (
                  <ProductFeature key={feature}>{feature}</ProductFeature>
                ))}
              </ul>
            </div>

            <div className="modal-block">
              <h3>Sabores disponibles</h3>
              <div className="modal-flavor-grid">
                {product.flavors.map((flavor) => (
                  <FlavorChip key={flavor} flavor={flavor} />
                ))}
              </div>
            </div>
          </div>

          <div className="modal-cta">
            <p>Confirma sabor y disponibilidad antes de ordenar.</p>
            <a className="btn-primary btn-lg" href={orderLink} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={20} />
              Pedir {product.shortName}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProductModal;
