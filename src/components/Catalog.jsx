import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const catalogImages = [
  { src: '/catalog/cloudcat1.png', alt: 'Catálogo digital CloudVape portada con Maskking, WAKA y Nasty' },
  { src: '/catalog/cloudcat2.png', alt: 'Catálogo digital CloudVape Maskking Extre 100K' },
  { src: '/catalog/cloudcat3.png', alt: 'Catálogo digital CloudVape WAKA SoPro 15K' },
  { src: '/catalog/cloudcat4.png', alt: 'Catálogo digital CloudVape Nasty Bar 2K' },
  { src: '/catalog/cloudcat5.png', alt: 'Catálogo digital CloudVape elige tu modelo' },
  { src: '/catalog/cloudcat6.png', alt: 'Catálogo digital CloudVape pedidos y entregas' },
];

function Catalog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const showPrevious = () => setActiveIndex((index) => (index - 1 + catalogImages.length) % catalogImages.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % catalogImages.length);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      if (event.key === 'ArrowLeft') {
        showPrevious();
      }
      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="catalogo-digital" className="scene scene-c catalog-section">
      <div className="section-shell section-shell--gallery">
        <SectionHeader
          kicker="Catálogo digital"
          title="La guía visual oficial de CloudVape"
          copy="Explora las láminas del catálogo en orden, con precios, modelos, sabores y condiciones de entrega."
          align="center"
        />

        <p className="catalog-availability-note">
          El catálogo presenta información general de los modelos. Para conocer los sabores disponibles actualmente, revisa la sección Disponibilidad.
        </p>

        <div className="catalog-viewer">
          <div className="catalog-main">
            <button className="catalog-nav catalog-prev" type="button" onClick={showPrevious} aria-label="Lámina anterior">
              <ChevronLeft aria-hidden="true" size={22} />
            </button>
            <img
              src={catalogImages[activeIndex].src}
              alt={catalogImages[activeIndex].alt}
              loading="lazy"
            />
            <button className="catalog-nav catalog-next" type="button" onClick={showNext} aria-label="Lámina siguiente">
              <ChevronRight aria-hidden="true" size={22} />
            </button>
            <div className="catalog-counter">{activeIndex + 1} de {catalogImages.length}</div>
            <button
              type="button"
              className="catalog-expand"
              onClick={() => setIsOpen(true)}
              aria-label={`Ver pantalla completa de lámina ${activeIndex + 1}`}
            >
              <Maximize2 aria-hidden="true" size={18} />
              Ver pantalla completa
            </button>
          </div>

          <div className="catalog-thumbs" aria-label="Miniaturas del catálogo digital">
            {catalogImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={activeIndex === index ? 'is-selected' : ''}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver lámina ${index + 1} del catálogo`}
              >
                <img src={image.src} alt="" loading="lazy" />
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {isOpen && (
          <div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-modal-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <div ref={modalRef} tabIndex={-1} className="catalog-modal">
              <h2 id="catalog-modal-title" className="sr-only">Catálogo digital ampliado</h2>
              <button className="modal-close" type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar catálogo ampliado">
                <X aria-hidden="true" size={22} />
              </button>
              <button className="catalog-modal-nav catalog-modal-prev" type="button" onClick={showPrevious} aria-label="Lámina anterior">
                <ChevronLeft aria-hidden="true" size={28} />
              </button>
              <img src={catalogImages[activeIndex].src} alt={catalogImages[activeIndex].alt} loading="lazy" />
              <button className="catalog-modal-nav catalog-modal-next" type="button" onClick={showNext} aria-label="Lámina siguiente">
                <ChevronRight aria-hidden="true" size={28} />
              </button>
              <div className="catalog-modal-count">{activeIndex + 1} de {catalogImages.length}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;
