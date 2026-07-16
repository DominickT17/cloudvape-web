export const whatsappNumber = '+502 5870 3264';
export const whatsappUrl = 'https://wa.me/50258703264';

const productImageBase = '/products/CloudVape_Product_Images/';
const imageSize = { imageWidth: 1254, imageHeight: 1254 };

function productImage(fileName) {
  const slug = fileName.replace(/\.png$/, '');

  return {
    image: `${productImageBase}${fileName}`,
    imageWebp: `${productImageBase}${slug}.webp`,
    ...imageSize,
  };
}

const productConfigs = [
  {
    id: 'maskking-extre-100k',
    brand: 'Maskking',
    name: 'MASKKING EXTRE 100K',
    shortName: 'Maskking Extre 100K',
    model: 'Maskking Extre 100K',
    price: 300,
    priceLabel: 'Q300',
    category: 'Línea premium',
    representativeFlavorId: 'maskking-wild-cherry-slush',
    accent: {
      name: 'magenta y violeta',
      primary: '#ff3df2',
      secondary: '#8b5cf6',
      soft: 'rgba(255, 61, 242, 0.16)',
      glow: 'rgba(255, 61, 242, 0.35)',
    },
    description:
      'El modelo de mayor duración anunciada en la disponibilidad actual, con pantalla inteligente y modos Normal / Boost.',
    puffs: 'Hasta 100,000 puffs anunciados',
    rechargeable: 'USB-C',
    display: 'Pantalla inteligente',
    battery: '800 mAh anunciados',
    nicotine: 'No anunciado',
    modes: 'Normal y Boost',
    highlights: [
      'Hasta 100,000 puffs anunciados',
      'Recargable USB-C',
      'Pantalla inteligente',
    ],
  },
  {
    id: 'waka-sopro-15k',
    brand: 'WAKA',
    name: 'WAKA SOPRO 15K',
    shortName: 'WAKA SoPro 15K',
    model: 'WAKA SoPro 15K',
    price: 200,
    priceLabel: 'Q200',
    category: 'Equilibrio y duración',
    representativeFlavorId: 'waka-strawberry-kiwi',
    accent: {
      name: 'azul y cian',
      primary: '#21d4ff',
      secondary: '#3b82f6',
      soft: 'rgba(33, 212, 255, 0.15)',
      glow: 'rgba(33, 212, 255, 0.34)',
    },
    description:
      'Una opción equilibrada para uso diario, con pantalla digital, formato elegante y sabores frescos o frutales.',
    puffs: 'Hasta 15,000 puffs anunciados',
    rechargeable: 'Sí',
    display: 'Pantalla digital',
    battery: '850 mAh anunciados',
    nicotine: '50 mg',
    modes: 'No anunciados',
    highlights: [
      'Hasta 15,000 puffs anunciados',
      'Recargable',
      'Pantalla digital',
    ],
  },
  {
    id: 'nasty-bar-2k',
    brand: 'Nasty',
    name: 'NASTY BAR 2K',
    shortName: 'Nasty Bar 2K',
    model: 'Nasty Bar 2K',
    price: 80,
    priceLabel: 'Q80',
    category: 'Compacto y práctico',
    representativeFlavorId: 'nasty-peach-blue-raspberry',
    accent: {
      name: 'magenta suave y lima',
      primary: '#ff4fb9',
      secondary: '#9dff5c',
      soft: 'rgba(255, 79, 185, 0.14)',
      glow: 'rgba(157, 255, 92, 0.22)',
    },
    description:
      'Formato compacto y directo, ideal para quienes buscan precio accesible y sabores intensos en inventario.',
    puffs: 'Hasta 2,000 puffs anunciados',
    rechargeable: 'No anunciado',
    display: 'No anunciada',
    battery: 'No anunciada',
    nicotine: '20 mg/mL',
    modes: 'No anunciados',
    highlights: [
      'Hasta 2,000 puffs anunciados',
      'Listo para usar',
      'Diseño compacto',
    ],
  },
];

export const inventory = [
  {
    id: 'maskking-wild-cherry-slush',
    productId: 'maskking-extre-100k',
    brand: 'Maskking',
    model: 'Maskking Extre 100K',
    flavor: 'Wild Cherry Slush',
    price: 300,
    stock: 2,
    category: 'frutal',
    filterTags: ['frutal', 'fresco'],
    accent: { primary: '#ff305f', secondary: '#8b5cf6' },
    imageAlt: 'Imagen promocional CloudVape del Maskking Extre 100K sabor Wild Cherry Slush',
    ...productImage('maskking-wild-cherry-slush.png'),
  },
  {
    id: 'maskking-grape-slush',
    productId: 'maskking-extre-100k',
    brand: 'Maskking',
    model: 'Maskking Extre 100K',
    flavor: 'Grape Slush',
    price: 300,
    stock: 2,
    category: 'frutal',
    filterTags: ['frutal', 'fresco'],
    accent: { primary: '#a855f7', secondary: '#ff3df2' },
    imageAlt: 'Imagen promocional CloudVape del Maskking Extre 100K sabor Grape Slush',
    ...productImage('maskking-grape-slush.png'),
  },
  {
    id: 'maskking-strawberry-watermelon',
    productId: 'maskking-extre-100k',
    brand: 'Maskking',
    model: 'Maskking Extre 100K',
    flavor: 'Strawberry Watermelon',
    price: 300,
    stock: 2,
    category: 'frutal',
    filterTags: ['frutal'],
    accent: { primary: '#ff4e88', secondary: '#32f58a' },
    imageAlt: 'Imagen promocional CloudVape del Maskking Extre 100K sabor Strawberry Watermelon',
    ...productImage('maskking-strawberry-watermelon.png'),
  },
  {
    id: 'maskking-miami-mint',
    productId: 'maskking-extre-100k',
    brand: 'Maskking',
    model: 'Maskking Extre 100K',
    flavor: 'Miami Mint',
    price: 300,
    stock: 2,
    category: 'fresco',
    filterTags: ['fresco'],
    accent: { primary: '#32f5d2', secondary: '#21d4ff' },
    imageAlt: 'Imagen promocional CloudVape del Maskking Extre 100K sabor Miami Mint',
    ...productImage('maskking-miami-mint.png'),
  },
  {
    id: 'maskking-alaska-ice',
    productId: 'maskking-extre-100k',
    brand: 'Maskking',
    model: 'Maskking Extre 100K',
    flavor: 'Alaska Ice',
    price: 300,
    stock: 2,
    category: 'fresco',
    filterTags: ['fresco'],
    accent: { primary: '#65d9ff', secondary: '#3b82f6' },
    imageAlt: 'Imagen promocional CloudVape del Maskking Extre 100K sabor Alaska Ice',
    ...productImage('maskking-alaska-ice.png'),
  },
  {
    id: 'waka-strawberry-kiwi',
    productId: 'waka-sopro-15k',
    brand: 'WAKA',
    model: 'WAKA SoPro 15K',
    flavor: 'Strawberry Kiwi',
    price: 200,
    stock: 4,
    category: 'frutal',
    filterTags: ['frutal'],
    accent: { primary: '#ff3f72', secondary: '#9dff5c' },
    imageAlt: 'Imagen promocional CloudVape del WAKA SoPro 15K sabor Strawberry Kiwi',
    ...productImage('waka-strawberry-kiwi.png'),
  },
  {
    id: 'waka-fresh-mint',
    productId: 'waka-sopro-15k',
    brand: 'WAKA',
    model: 'WAKA SoPro 15K',
    flavor: 'Fresh Mint',
    price: 200,
    stock: 3,
    category: 'fresco',
    filterTags: ['fresco'],
    accent: { primary: '#42f57b', secondary: '#21d4ff' },
    imageAlt: 'Imagen promocional CloudVape del WAKA SoPro 15K sabor Fresh Mint',
    ...productImage('waka-fresh-mint.png'),
  },
  {
    id: 'waka-cool-mint',
    productId: 'waka-sopro-15k',
    brand: 'WAKA',
    model: 'WAKA SoPro 15K',
    flavor: 'Cool Mint',
    price: 200,
    stock: 3,
    category: 'fresco',
    filterTags: ['fresco'],
    accent: { primary: '#5ab8ff', secondary: '#21d4ff' },
    imageAlt: 'Imagen promocional CloudVape del WAKA SoPro 15K sabor Cool Mint',
    ...productImage('waka-cool-mint.png'),
  },
  {
    id: 'nasty-peach-blue-raspberry',
    productId: 'nasty-bar-2k',
    brand: 'Nasty',
    model: 'Nasty Bar 2K',
    flavor: 'Peach Blue Raspberry',
    price: 80,
    stock: 2,
    category: 'frutal',
    filterTags: ['frutal'],
    accent: { primary: '#ffb454', secondary: '#21d4ff' },
    imageAlt: 'Imagen promocional CloudVape del Nasty Bar 2K sabor Peach Blue Raspberry',
    ...productImage('nasty-peach-blue-raspberry.png'),
  },
  {
    id: 'nasty-strawberry-kiwi-ice',
    productId: 'nasty-bar-2k',
    brand: 'Nasty',
    model: 'Nasty Bar 2K',
    flavor: 'Strawberry Kiwi Ice',
    price: 80,
    stock: 2,
    category: 'frutal',
    filterTags: ['frutal', 'fresco'],
    accent: { primary: '#ff46a6', secondary: '#8cff59' },
    imageAlt: 'Imagen promocional CloudVape del Nasty Bar 2K sabor Strawberry Kiwi Ice',
    ...productImage('nasty-strawberry-kiwi-ice.png'),
  },
  {
    id: 'nasty-dark-cherry',
    productId: 'nasty-bar-2k',
    brand: 'Nasty',
    model: 'Nasty Bar 2K',
    flavor: 'Dark Cherry',
    price: 80,
    stock: 2,
    category: 'frutal',
    filterTags: ['frutal'],
    accent: { primary: '#ff304f', secondary: '#8b1e3f' },
    imageAlt: 'Imagen promocional CloudVape del Nasty Bar 2K sabor Dark Cherry',
    ...productImage('nasty-dark-cherry.png'),
  },
  {
    id: 'nasty-fresh-mint',
    productId: 'nasty-bar-2k',
    brand: 'Nasty',
    model: 'Nasty Bar 2K',
    flavor: 'Fresh Mint',
    price: 80,
    stock: 2,
    category: 'fresco',
    filterTags: ['fresco'],
    accent: { primary: '#42f57b', secondary: '#21d4ff' },
    imageAlt: 'Imagen promocional CloudVape del Nasty Bar 2K sabor Fresh Mint',
    ...productImage('nasty-fresh-mint.png'),
  },
  {
    id: 'nasty-watermelon-ice',
    productId: 'nasty-bar-2k',
    brand: 'Nasty',
    model: 'Nasty Bar 2K',
    flavor: 'Watermelon Ice',
    price: 80,
    stock: 2,
    category: 'frutal',
    filterTags: ['frutal', 'fresco'],
    accent: { primary: '#ff4e88', secondary: '#a7ff4e' },
    imageAlt: 'Imagen promocional CloudVape del Nasty Bar 2K sabor Watermelon Ice',
    ...productImage('nasty-watermelon-ice.png'),
  },
];

export const products = productConfigs.map((product) => {
  const productInventory = inventory.filter((item) => item.productId === product.id);
  const representative =
    productInventory.find((item) => item.id === product.representativeFlavorId) || productInventory[0];
  const stockTotal = productInventory.reduce((total, item) => total + item.stock, 0);
  const availableFlavors = productInventory.filter((item) => item.stock > 0);

  return {
    ...product,
    image: representative.image,
    imageWebp: representative.imageWebp,
    imageAlt: representative.imageAlt,
    imageWidth: representative.imageWidth,
    imageHeight: representative.imageHeight,
    gallery: productInventory.map((item) => item.image),
    galleryWebp: productInventory.map((item) => item.imageWebp),
    galleryAlt: productInventory.map((item) => item.imageAlt),
    flavors: productInventory.map((item) => item.flavor),
    stockTotal,
    flavorCount: availableFlavors.length,
    inventory: productInventory,
    whatsappMessage: `Hola CloudVape, deseo consultar disponibilidad del ${product.model}.`,
  };
});

export const inventoryTotals = {
  modelCount: products.length,
  totalUnits: inventory.reduce((total, item) => total + item.stock, 0),
  flavorCount: inventory.filter((item) => item.stock > 0).length,
};

export function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

export function getInventoryByProduct(productId) {
  return inventory.filter((item) => item.productId === productId);
}

export function formatPrice(price) {
  return `Q${price}`;
}

export function buildWhatsappLink(message) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function buildFlavorWhatsappMessage(item) {
  return `Hola CloudVape, deseo consultar disponibilidad del ${item.model}, sabor ${item.flavor}, precio ${formatPrice(item.price)}.`;
}

export function buildFlavorWhatsappLink(item) {
  return buildWhatsappLink(buildFlavorWhatsappMessage(item));
}
