import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const faqs = [
  {
    question: '¿Los productos contienen nicotina?',
    answer: 'Sí. Este producto contiene nicotina. La nicotina es adictiva. La venta es exclusiva para mayores de edad.',
  },
  {
    question: '¿Cómo confirmo un sabor?',
    answer: 'Escríbenos por WhatsApp con el modelo y sabor que deseas para confirmar existencias antes de realizar tu pedido.',
  },
  {
    question: '¿Dónde realizan entregas?',
    answer: 'Coordinamos entregas en Quetzaltenango y Huehuetenango según las condiciones indicadas en la sección de entregas.',
  },
  {
    question: '¿La entrega es gratuita?',
    answer: 'En Quetzaltenango la entrega gratuita aplica únicamente en zonas 1, 3 y 10. Todo queda sujeto a coordinación de ruta y horario.',
  },
  {
    question: '¿Qué significa la cantidad de puffs?',
    answer: 'Es una cantidad anunciada por el fabricante. La duración real depende de la frecuencia, intensidad y modo de uso.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Consulta los métodos disponibles al confirmar tu pedido.',
  },
];

function FAQ() {
  return (
    <section id="faq" className="scene scene-b faq-section">
      <div className="section-shell section-shell--editorial faq-layout">
        <div className="faq-copy">
          <SectionHeader
            kicker="Preguntas frecuentes"
            title="Información antes de ordenar"
            copy="Resuelve lo esencial antes de escribir por WhatsApp y confirmar disponibilidad."
          />
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item group">
              <summary>
                <span>
                  <HelpCircle aria-hidden="true" size={21} />
                  {faq.question}
                </span>
                <ChevronDown className="faq-chevron" aria-hidden="true" size={20} />
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
