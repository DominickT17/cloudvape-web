import { useMemo, useState } from 'react';
import { Eye, MessageCircle, PackageCheck, Search } from 'lucide-react';
import FlavorModal from './FlavorModal.jsx';
import ProductImage from './ProductImage.jsx';
import SectionHeader from './SectionHeader.jsx';
import { buildFlavorWhatsappLink, formatPrice, inventory, products } from '../data/products.js';

const filters = [
  { id: 'todos', label: 'Todos' },
  { id: 'maskking-extre-100k', label: 'Maskking' },
  { id: 'waka-sopro-15k', label: 'WAKA' },
  { id: 'nasty-bar-2k', label: 'Nasty' },
  { id: 'frutal', label: 'Sabores frutales' },
  { id: 'fresco', label: 'Sabores frescos o mentolados' },
];

function getProduct(item) {
  return products.find((product) => product.id === item.productId);
}

function Flavors() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const filteredInventory = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return inventory.filter((item) => {
      const product = getProduct(item);
      const matchesQuery = [item.brand, item.model, item.flavor]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);
      const matchesFilter =
        activeFilter === 'todos' ||
        item.productId === activeFilter ||
        item.filterTags.includes(activeFilter);

      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  return (
    <section id="disponibilidad" className="scene scene-d flavors-section">
      <div className="section-shell section-shell--wide">
        <div className="availability-heading-row">
          <SectionHeader
            kicker="Disponibilidad"
            title="Sabores disponibles ahora"
            copy="Estas son las opciones actualmente disponibles. El inventario puede cambiar; confirma existencias antes de realizar tu pedido."
          />
          <label className="flavor-search">
            <Search aria-hidden="true" size={19} />
            <span className="sr-only">Buscar sabor</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar sabor, marca o modelo..."
            />
          </label>
        </div>

        <div className="flavor-controls">
          <div className="flavor-filters" aria-label="Filtrar sabores disponibles">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={activeFilter === filter.id ? 'is-selected' : ''}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {filteredInventory.length > 0 ? (
          <div className="availability-grid">
            {filteredInventory.map((item) => {
              const product = getProduct(item);
              const isAvailable = item.stock > 0;
              const orderLink = buildFlavorWhatsappLink(item);

              return (
                <article
                  key={item.id}
                  className={`availability-card reveal-up ${isAvailable ? '' : 'is-sold-out'}`}
                  style={{
                    '--accent': item.accent.primary,
                    '--accent-2': item.accent.secondary,
                    '--accent-soft': product.accent.soft,
                    '--accent-glow': product.accent.glow,
                  }}
                >
                  <button
                    className="availability-card__image"
                    type="button"
                    onClick={() => setSelectedFlavor(item)}
                    aria-label={`Ver imagen de ${item.model} sabor ${item.flavor}`}
                  >
                    <ProductImage
                      item={item}
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
                    />
                  </button>

                  <div className="availability-card__body">
                    <div className="availability-card__topline">
                      <span>{item.brand}</span>
                      <strong className={isAvailable ? 'is-available' : 'is-sold-out'}>
                        {isAvailable ? 'Disponible' : 'Agotado'}
                      </strong>
                    </div>
                    <h3>{item.flavor}</h3>
                    <p>{item.model}</p>

                    <div className="availability-card__meta">
                      <span>{formatPrice(item.price)}</span>
                      <span>
                        <PackageCheck aria-hidden="true" size={16} />
                        {item.stock} unidades
                      </span>
                    </div>

                    <div className="availability-card__actions">
                      {isAvailable ? (
                        <a className="btn-primary" href={orderLink} target="_blank" rel="noreferrer">
                          <MessageCircle aria-hidden="true" size={18} />
                          Pedir este sabor
                        </a>
                      ) : (
                        <button className="btn-primary" type="button" disabled>
                          Agotado
                        </button>
                      )}
                      <button className="btn-secondary" type="button" onClick={() => setSelectedFlavor(item)}>
                        <Eye aria-hidden="true" size={18} />
                        Ver imagen
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="flavors-empty">
            No encontramos sabores que coincidan con tu búsqueda.
          </div>
        )}

        {selectedFlavor && (
          <FlavorModal item={selectedFlavor} onClose={() => setSelectedFlavor(null)} />
        )}
      </div>
    </section>
  );
}

export default Flavors;
