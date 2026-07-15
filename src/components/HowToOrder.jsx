import { MessageCircle, PackageCheck, ShoppingBag } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { buildWhatsappLink } from '../data/products.js';

const steps = [
  {
    title: 'Elige tu modelo y sabor.',
    description: 'Revisa la línea que prefieres y ten una o dos opciones de sabor por si cambia la disponibilidad.',
    icon: ShoppingBag,
  },
  {
    title: 'Confirma disponibilidad.',
    description: 'Escríbenos por WhatsApp con el modelo seleccionado para confirmar existencias antes de ordenar.',
    icon: MessageCircle,
  },
  {
    title: 'Coordinamos tu entrega.',
    description: 'Definimos ubicación, ruta y horario disponible según Quetzaltenango o Huehuetenango.',
    icon: PackageCheck,
  },
];

const orderLink = buildWhatsappLink('Hola CloudVape, deseo realizar un pedido.');

function HowToOrder() {
  return (
    <section id="como-pedir" className="scene scene-d order-section">
      <div className="section-shell section-shell--editorial">
        <SectionHeader
          kicker="Cómo pedir"
          title="Tres pasos por WhatsApp"
          copy="El proceso está pensado para confirmar modelo, sabor y entrega antes de completar tu pedido."
          align="center"
        />

        <div className="order-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="order-step reveal-up">
                <span className="order-step__number">0{index + 1}</span>
                <div className="order-step__icon">
                  <Icon aria-hidden="true" size={23} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="order-cta">
          <a className="btn-primary btn-lg" href={orderLink} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={20} />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowToOrder;
