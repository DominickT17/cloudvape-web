import { CalendarDays, GraduationCap, MapPin, MessageCircle, Route, Truck } from 'lucide-react';
import GlowCard from './GlowCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import { buildWhatsappLink } from '../data/products.js';

const deliveryAreas = [
  {
    city: 'Quetzaltenango',
    tone: 'cyan',
    icon: MapPin,
    summary: 'Entrega coordinada dentro de zonas específicas.',
    cta: 'Coordinar en Xela',
    details: [
      'Zonas 1, 3 y 10.',
      'Centros comerciales.',
      'Universidades.',
      'Entrega gratuita únicamente dentro de zonas específicas.',
      'Sujeto a coordinación de ruta y horario.',
    ],
  },
  {
    city: 'Huehuetenango',
    tone: 'magenta',
    icon: CalendarDays,
    summary: 'Pedidos con anticipación para entrega de fin de semana.',
    cta: 'Reservar fin de semana',
    details: [
      'Entregas únicamente fines de semana.',
      'Requiere pedido anticipado.',
    ],
  },
];

const detailIcons = [Truck, GraduationCap, CalendarDays, MapPin, Route];
function deliveryLink(city) {
  return buildWhatsappLink(`Hola CloudVape, deseo coordinar una entrega en ${city}.`);
}

function Delivery() {
  return (
    <section id="entregas" className="scene scene-b delivery-section">
      <div className="section-shell section-shell--editorial delivery-layout">
        <div className="delivery-map-panel">
          <SectionHeader
            kicker="Entregas"
            title="Entregas coordinadas"
            copy="La ruta se confirma por WhatsApp según ubicación, horario disponible y ciudad."
          />
          <div className="abstract-map" aria-hidden="true">
            <span className="map-pin map-pin--one" />
            <span className="map-pin map-pin--two" />
            <span className="map-route map-route--one" />
            <span className="map-route map-route--two" />
          </div>
        </div>

        <div className="delivery-cards">
          {deliveryAreas.map((area) => {
            const Icon = area.icon;

            return (
              <GlowCard
                key={area.city}
                as="article"
                className={`delivery-card delivery-card--${area.tone} ${area.city === 'Huehuetenango' ? 'delivery-card--compact' : ''} reveal-up`}
              >
                <div className="delivery-card__head">
                  <span>
                    <Icon aria-hidden="true" size={23} />
                  </span>
                  <div>
                    <h3>{area.city}</h3>
                    <p>{area.summary}</p>
                  </div>
                </div>
                <ul>
                  {area.details.map((detail, index) => {
                    const DetailIcon = detailIcons[index] || MapPin;
                    return (
                      <li key={detail}>
                        <DetailIcon aria-hidden="true" size={18} />
                        <span>{detail}</span>
                      </li>
                    );
                  })}
                </ul>
                <a className="btn-secondary delivery-reserve" href={deliveryLink(area.city)} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" size={17} />
                  {area.cta}
                </a>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Delivery;
