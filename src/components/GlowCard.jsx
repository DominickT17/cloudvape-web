function GlowCard({ as: Component = 'div', className = '', children, style }) {
  return (
    <Component className={`glow-card ${className}`} style={style}>
      {children}
    </Component>
  );
}

export default GlowCard;
