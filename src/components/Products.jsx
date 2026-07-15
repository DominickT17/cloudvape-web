import { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import ProductModal from './ProductModal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { products } from '../data/products.js';

const [featuredProduct, ...secondaryProducts] = products;

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="productos" className="scene scene-b products-section">
      <div className="section-shell section-shell--wide">
        <div className="products-heading-row">
          <SectionHeader
            kicker="Productos destacados"
            title="Tres líneas, un recorrido claro"
            copy="Maskking toma el protagonismo; WAKA y Nasty quedan como alternativas rápidas para comparar precio, formato y funciones esenciales."
          />
          <p className="products-note">
            La cantidad de puffs es anunciada por el fabricante. La duración real depende de la frecuencia, intensidad y modo de uso.
          </p>
        </div>

        <div className="product-editorial-grid">
          <ProductCard product={featuredProduct} variant="featured" onViewDetails={() => setSelectedProduct(featuredProduct)} />

          <div className="product-secondary-stack">
            {secondaryProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="compact" onViewDetails={() => setSelectedProduct(product)} />
            ))}
          </div>
        </div>

        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </section>
  );
}

export default Products;
