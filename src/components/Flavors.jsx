import { useMemo, useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import FlavorChip from './FlavorChip.jsx';
import SectionHeader from './SectionHeader.jsx';
import { products } from '../data/products.js';

const allProductsFilter = 'todos';

function Flavors() {
  const [query, setQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState(allProductsFilter);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => activeProduct === allProductsFilter || product.id === activeProduct)
      .map((product) => ({
        ...product,
        visibleFlavors: product.flavors.filter((flavor) => flavor.toLowerCase().includes(normalizedQuery)),
      }))
      .filter((product) => product.visibleFlavors.length > 0);
  }, [activeProduct, query]);

  return (
    <section id="sabores" className="scene scene-d flavors-section">
      <div className="section-shell section-shell--wide">
        <div className="flavors-layout">
          <div className="flavors-intro">
            <SectionHeader
              kicker="Sabores"
              title="Sabores por línea, listos para explorar"
              copy="Busca una nota específica o cambia de producto sin perder el ritmo de navegación."
            />

            <div className="flavor-controls">
              <label className="flavor-search">
                <Search aria-hidden="true" size={19} />
                <span className="sr-only">Buscar sabor</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar sabor..."
                />
              </label>
              <div className="flavor-filters" aria-label="Filtrar sabores por producto">
                <button type="button" className={activeProduct === allProductsFilter ? 'is-selected' : ''} onClick={() => setActiveProduct(allProductsFilter)}>
                  Todos
                </button>
                {products.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    className={activeProduct === product.id ? 'is-selected' : ''}
                    onClick={() => setActiveProduct(product.id)}
                    style={{ '--accent': product.accent.primary, '--accent-soft': product.accent.soft }}
                  >
                    {product.shortName}
                  </button>
                ))}
              </div>
            </div>

            <p className="availability-note">
              Sabores sujetos a disponibilidad. Confirma existencias antes de realizar tu pedido.
            </p>
          </div>

          <div className="flavor-lanes">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="flavor-lane reveal-up"
                  style={{ '--accent': product.accent.primary, '--accent-soft': product.accent.soft }}
                >
                  <div className="flavor-lane__head">
                    <span>
                      <Sparkles aria-hidden="true" size={18} />
                    </span>
                    <div>
                      <p>{product.category}</p>
                      <h3>{product.name}</h3>
                    </div>
                  </div>
                  <div className="flavor-strip" tabIndex={0} aria-label={`Sabores de ${product.shortName}`}>
                    {product.visibleFlavors.map((flavor) => (
                      <FlavorChip key={flavor} flavor={flavor} />
                    ))}
                  </div>
                </article>
              ))
            ) : (
              <div className="flavors-empty">
                No encontramos sabores que coincidan con tu búsqueda.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flavors;
