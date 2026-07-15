import { Headphones, PackageCheck, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  { label: 'Productos originales', icon: ShieldCheck },
  { label: 'Entrega coordinada', icon: PackageCheck },
  { label: 'Variedad de sabores', icon: Sparkles },
  { label: 'Atención por WhatsApp', icon: Headphones },
];

function TrustBar() {
  return (
    <section className="trust-band" aria-label="Confianza CloudVape">
      <div className="site-shell trust-band__inner">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="trust-item">
              <Icon aria-hidden="true" size={19} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustBar;
