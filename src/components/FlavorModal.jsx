import { useEffect, useRef } from 'react';
import { BatteryCharging, Gauge, MessageCircle, Monitor, PackageCheck, ShieldAlert, X, Zap } from 'lucide-react';
import ProductImage from './ProductImage.jsx';
import { buildFlavorWhatsappLink, formatPrice, getProductById } from '../data/products.js';

const specItems = [
  ['Puffs', 'puffs', Gauge],
  ['Recarga', 'rechargeable', BatteryCharging],
  ['Pantalla', 'display', Monitor],
  ['Nicotina', 'nicotine', ShieldAlert],
  ['Batería', 'battery', Zap],
];

function FlavorModal({ item, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const product = getProductById(item.productId);
  const orderLink = buildFlavorWhatsappLink(item);
  const isAvailable = item.stock > 0;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return;
      }

      const focusable = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flavor-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="flavor-modal"
        style={{
          '--accent': item.accent.primary,
          '--accent-2': item.accent.secondary,
          '--accent-soft': product.accent.soft,
          '--accent-glow': product.accent.glow,
        }}
      >
        <button
          ref={closeButtonRef}
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle del sabor"
        >
          <X aria-hidden="true" size={22} />
        </button>

        <div className="flavor-modal__image">
          <span aria-hidden="true" />
          <ProductImage
            item={item}
            className="modal-product-image"
            sizes="(min-width: 768px) 46vw, 92vw"
          />
        </div>

        <aside className="flavor-modal__copy">
          <p className="product-category">{item.brand} · {item.model}</p>
          <div className="modal-title-row">
            <h2 id="flavor-modal-title">{item.flavor}</h2>
            <p className="modal-price">{formatPrice(item.price)}</p>
          </div>

          <div className="flavor-modal__stock">
            <span className={isAvailable ? 'is-available' : 'is-sold-out'}>
              {isAvailable ? 'Disponible' : 'Agotado'}
            </span>
            <strong>{item.stock} unidades disponibles</strong>
          </div>

          <div className="modal-spec-grid">
            {specItems.map(([label, key, Icon]) => (
              <div key={key} className="modal-spec">
                <Icon aria-hidden="true" size={17} />
                <span>{label}</span>
                <strong>{product[key]}</strong>
              </div>
            ))}
            <div className="modal-spec">
              <PackageCheck aria-hidden="true" size={17} />
              <span>Stock</span>
              <strong>{item.stock} unidades</strong>
            </div>
          </div>

          <div className="modal-block">
            <h3>Características del dispositivo</h3>
            <ul className="modal-feature-grid">
              {product.highlights.map((feature) => (
                <li key={feature} className="product-feature">{feature}</li>
              ))}
            </ul>
          </div>

          <p className="flavor-modal__warning">
            Este producto contiene nicotina. La nicotina es adictiva. Venta exclusiva para mayores de edad.
          </p>

          <div className="modal-cta">
            {isAvailable ? (
              <a className="btn-primary btn-lg" href={orderLink} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={20} />
                Pedir este sabor por WhatsApp
              </a>
            ) : (
              <button className="btn-primary btn-lg" type="button" disabled>
                Agotado
              </button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default FlavorModal;
