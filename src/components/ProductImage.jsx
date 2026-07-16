function ProductImage({
  item,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority,
  sizes,
}) {
  const imageAlt = alt ?? item.imageAlt;

  return (
    <picture>
      {item.imageWebp && <source srcSet={item.imageWebp} type="image/webp" sizes={sizes} />}
      <img
        className={className}
        src={item.image}
        alt={imageAlt}
        width={item.imageWidth}
        height={item.imageHeight}
        loading={loading}
        decoding="async"
        fetchpriority={fetchPriority}
      />
    </picture>
  );
}

export default ProductImage;
