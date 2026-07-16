import ProductCard from './ProductCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import { products } from '../data/products.js';

function Products() {
  return (
    <section id="productos" className="scene scene-b products-section">
      <div className="section-shell section-shell--wide">
        <div className="products-heading-row">
          <SectionHeader
            kicker="Productos"
            title="Tres modelos disponibles"
            copy="Cada línea muestra stock real, sabores actualmente disponibles y una imagen promocional nueva de CloudVape."
          />
          <p className="products-note">
            La cantidad de puffs es anunciada por el fabricante. La duración real depende de la frecuencia, intensidad y modo de uso.
          </p>
        </div>

        <div className="product-editorial-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
