import { BatteryCharging, CheckCircle2, Gauge, MinusCircle, Monitor, Sparkles, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { products } from '../data/products.js';

const idealFor = {
  'maskking-extre-100k': 'Máxima duración',
  'waka-sopro-15k': 'Uso diario equilibrado',
  'nasty-bar-2k': 'Formato compacto',
};

const desktopColumns = [
  ['Modelo', 'name', Sparkles],
  ['Precio', 'priceLabel', Zap],
  ['Puffs', 'puffs', Gauge],
  ['Recarga', 'rechargeable', BatteryCharging],
  ['Pantalla', 'display', Monitor],
  ['Batería', 'battery', BatteryCharging],
  ['Ideal para', 'ideal', CheckCircle2],
];

const mobileColumns = [
  ['Precio', 'priceLabel', Zap],
  ['Puffs', 'puffs', Gauge],
  ['Batería', 'battery', BatteryCharging],
  ['Pantalla', 'display', Monitor],
  ['Recarga', 'rechargeable', CheckCircle2],
];

function ValueWithIcon({ value, icon: Icon = CheckCircle2 }) {
  const text = String(value);
  const isUnannounced = text.toLowerCase().includes('no anunci');
  const ValueIcon = isUnannounced ? MinusCircle : Icon;

  return (
    <span className={`comparison-value ${isUnannounced ? 'is-muted' : ''}`}>
      <ValueIcon aria-hidden="true" size={16} />
      {text}
    </span>
  );
}

function getValue(product, key) {
  if (key === 'ideal') {
    return idealFor[product.id];
  }

  return product[key];
}

function Comparison() {
  return (
    <section id="comparativa" className="scene scene-c comparison-section">
      <div className="section-shell section-shell--editorial">
        <SectionHeader
          kicker="Comparativa"
          title="Compara rápidamente lo esencial"
          copy="Precio, duración anunciada y funciones clave en una vista directa antes de confirmar disponibilidad."
          align="center"
        />

        <div className="comparison-table-card">
          <table className="comparison-table">
            <thead>
              <tr>
                {desktopColumns.map(([label, , Icon]) => (
                  <th key={label} scope="col">
                    <Icon aria-hidden="true" size={15} />
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={{ '--accent': product.accent.primary, '--accent-soft': product.accent.soft }}>
                  {desktopColumns.map(([label, key, Icon]) => (
                    <td key={`${product.id}-${key}`} data-label={label}>
                      {key === 'priceLabel' ? (
                        <span className="comparison-price">{product[key]}</span>
                      ) : key === 'name' ? (
                        <span className="comparison-product">
                          <span>
                            <img src={product.image} alt={product.imageAlt} loading="lazy" />
                          </span>
                          <strong>{product.shortName}</strong>
                        </span>
                      ) : (
                        <ValueWithIcon value={getValue(product, key)} icon={Icon} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparison-mobile-grid">
          {products.map((product) => (
            <article
              key={product.id}
              className="comparison-mobile-card"
              style={{ '--accent': product.accent.primary, '--accent-soft': product.accent.soft }}
            >
              <div className="comparison-mobile-card__head">
                <img src={product.image} alt={product.imageAlt} loading="lazy" />
                <div>
                  <p>{product.category}</p>
                  <h3>{product.shortName}</h3>
                  <strong>{product.priceLabel}</strong>
                </div>
              </div>
              <dl>
                {mobileColumns.slice(1).map(([label, key, Icon]) => (
                  <div key={`${product.id}-${key}`}>
                    <dt>
                      <Icon aria-hidden="true" size={15} />
                      {label}
                    </dt>
                    <dd>{product[key]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comparison;
