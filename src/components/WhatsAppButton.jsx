import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsappLink } from '../data/products.js';

const link = buildWhatsappLink('Hola CloudVape, deseo consultar disponibilidad de productos.');

function WhatsAppButton() {
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');

    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearFooter(entry.isIntersecting),
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`floating-whatsapp ${isNearFooter ? 'is-near-footer' : ''}`}
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a CloudVape por WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={23} />
      <span>Pedir por WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
