function flavorStyle(flavor) {
  const lower = flavor.toLowerCase();

  if (lower.includes('mint')) return { '--flavor-a': '#69f5df', '--flavor-b': '#21d4ff' };
  if (lower.includes('watermelon')) return { '--flavor-a': '#ff4e88', '--flavor-b': '#32f58a' };
  if (lower.includes('berry') || lower.includes('razz')) return { '--flavor-a': '#ff3df2', '--flavor-b': '#3b82f6' };
  if (lower.includes('grape')) return { '--flavor-a': '#a855f7', '--flavor-b': '#ff3df2' };
  if (lower.includes('peach') || lower.includes('mango')) return { '--flavor-a': '#ffb454', '--flavor-b': '#ff3df2' };
  if (lower.includes('cherry')) return { '--flavor-a': '#ff305f', '--flavor-b': '#8b5cf6' };
  if (lower.includes('kiwi')) return { '--flavor-a': '#9dff5c', '--flavor-b': '#21d4ff' };

  return { '--flavor-a': '#21d4ff', '--flavor-b': '#8b5cf6' };
}

function FlavorChip({ flavor, className = '' }) {
  return (
    <span className={`flavor-chip ${className}`} style={flavorStyle(flavor)}>
      <span aria-hidden="true" />
      {flavor}
    </span>
  );
}

export default FlavorChip;
