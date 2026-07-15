function SectionDivider({ tone = 'cyan' }) {
  return (
    <div className={`section-divider section-divider--${tone}`} aria-hidden="true">
      <span />
    </div>
  );
}

export default SectionDivider;
