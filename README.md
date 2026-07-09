# Propuesta Landing FAL — Provincia Fondos Raíces

Sitio estático de una sola página (sin build step) con la propuesta comercial de El Maizal Coop y Teo Coop.

## Ver en local

Abrí `index.html` con cualquier servidor estático, por ejemplo:

```
npx serve .
```

## Deploy a Vercel

Con la Vercel CLI:

```
npx vercel --prod
```

O arrastrando esta carpeta al dashboard de [vercel.com/new](https://vercel.com/new) — es un sitio estático, no requiere build command ni framework preset (elegir "Other").

## Editar contenido

- `index.html` — contenido y estructura de las secciones
- `css/style.css` — estilos, tokens de color (claro/oscuro) en `:root`
- `js/main.js` — navegación por puntos (scroll-spy) y toggle de tema
