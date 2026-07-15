function SectionHeader({ kicker, title, copy, align = 'left', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

export default SectionHeader;
