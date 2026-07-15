import { CheckCircle2 } from 'lucide-react';

function ProductFeature({ icon: Icon = CheckCircle2, children, className = '' }) {
  return (
    <li className={`product-feature ${className}`}>
      <span className="product-feature__icon">
        <Icon aria-hidden="true" size={16} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default ProductFeature;
