import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight, MessageCircle, ShieldAlert } from 'lucide-react';
import ProductImage from './ProductImage.jsx';
import { buildWhatsappLink, inventory, inventoryTotals, products } from '../data/products.js';

const consultationLink = buildWhatsappLink('Hola CloudVape, deseo consultar disponibilidad de productos y sabores.');
const brandOptions = products.map((product) => ({
  id: product.id,
  label: product.brand,
  accent: product.accent.primary,
  accentSoft: product.accent.soft,
}));

function Hero() {
  const [activeBrand, setActiveBrand] = useState(brandOptions[0].id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeItems = useMemo(
    () => inventory.filter((item) => item.productId === activeBrand && item.stock > 0),
    [activeBrand],
  );
  const activeItem = activeItems[activeIndex] || activeItems[0] || inventory[0];
  const activeProduct = products.find((product) => product.id === activeItem.productId) || products[0];

  useEffect(() => {
    setActiveIndex(0);
  }, [activeBrand]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || reduceMotion || activeItems.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % activeItems.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [activeItems.length, isPaused]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + activeItems.length) % activeItems.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % activeItems.length);
  };

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
            Explora modelos originales con disponibilidad real: sabores en stock, cantidades visibles y entrega coordinada por WhatsApp en Quetzaltenango y Huehuetenango.
          </p>
          <div className="hero-actions">
            <a className="btn-primary btn-lg" href="#disponibilidad">
              Ver disponibilidad
              <ArrowDown aria-hidden="true" size={18} />
            </a>
            <a className="btn-secondary btn-lg" href={consultationLink} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} />
              Consultar por WhatsApp
            </a>
          </div>
          <div className="hero-summary" aria-label="Resumen de inventario actual">
            <span>{inventoryTotals.modelCount} modelos disponibles</span>
            <span>{inventoryTotals.flavorCount} sabores disponibles</span>
            <span>{inventoryTotals.totalUnits} unidades en inventario</span>
            <span>Entregas coordinadas por WhatsApp</span>
          </div>
          <p className="hero-warning">
            Este producto contiene nicotina. La nicotina es adictiva.
          </p>
        </div>

        <div
          className="hero-stage"
          aria-label="Disponibilidad actual CloudVape"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="availability-carousel" style={{ '--accent': activeProduct.accent.primary, '--accent-2': activeProduct.accent.secondary }}>
            <div className="availability-carousel__head">
              <div>
                <p>Disponibilidad actual</p>
                <h2>{activeProduct.shortName}</h2>
              </div>
              <strong>{activeItems.length} sabores</strong>
            </div>

            <div className="availability-brand-tabs" aria-label="Cambiar marca destacada">
              {brandOptions.map((brand) => (
                <button
                  key={brand.id}
                  type="button"
                  className={activeBrand === brand.id ? 'is-selected' : ''}
                  style={{ '--brand-accent': brand.accent, '--brand-soft': brand.accentSoft }}
                  onClick={() => setActiveBrand(brand.id)}
                >
                  {brand.label}
                </button>
              ))}
            </div>

            <div className="availability-carousel__frame">
              <span className="availability-carousel__glow" aria-hidden="true" />
              <ProductImage
                item={activeItem}
                className="availability-carousel__image"
                loading={activeItem.id === inventory[0].id ? 'eager' : 'lazy'}
                fetchPriority={activeItem.id === inventory[0].id ? 'high' : undefined}
                sizes="(min-width: 1024px) 46vw, 90vw"
              />
            </div>

            <div className="availability-carousel__meta">
              <span>{activeItem.brand}</span>
              <strong>{activeItem.flavor}</strong>
              <em>{activeItem.stock} disponibles · Q{activeItem.price}</em>
            </div>

            <div className="availability-carousel__controls">
              <button type="button" onClick={showPrevious} aria-label="Sabor anterior">
                <ChevronLeft aria-hidden="true" size={21} />
              </button>
              <div className="availability-carousel__dots" aria-label="Indicadores de sabores">
                {activeItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={activeIndex === index ? 'is-selected' : ''}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ver ${item.flavor}`}
                  />
                ))}
              </div>
              <button type="button" onClick={showNext} aria-label="Sabor siguiente">
                <ChevronRight aria-hidden="true" size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
