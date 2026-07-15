# CloudVape

Página web profesional para el catálogo de CloudVape Guatemala, creada con React, Vite, Tailwind CSS y Lucide React.

## Requisitos

- Node.js 20 o superior
- npm

## Ejecutar en local

```bash
npm install
npm run dev
```

Vite mostrará la URL local exacta en consola.

## Crear build de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist`.

## Publicar en Cloudflare Pages

Configuración recomendada:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Variables de entorno: ninguna requerida

## Editar productos

Los precios, características, sabores, textos de WhatsApp e imágenes se administran desde:

```text
src/data/products.js
```

Las imágenes de producto se cargan desde:

```text
public/products
```

Las imágenes actuales están en formato PNG. Para cambiarlas, conserva los mismos nombres de archivo o actualiza la ruta `image` en `src/data/products.js`.

## Avisos

El sitio incluye modal de mayoría de edad, avisos de nicotina, mensajes automáticos para WhatsApp y cobertura para Quetzaltenango y Huehuetenango según el brief.
