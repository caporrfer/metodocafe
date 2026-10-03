# Método Café

Web de una página para Método Café, cafetería de especialidad en C. Rábida, 20, Huelva. HTML semántico, CSS a medida y TypeScript con Vite. Fotografías y fuentes servidas desde el proyecto, sin backend, cookies, analítica ni servicios de pago.

## Desarrollo

Requiere Node.js 22.12 o posterior compatible con Vite y npm.

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

La compilación ejecuta la comprobación de TypeScript y genera `dist/`. El contenido principal está en HTML y sigue disponible sin JavaScript. TypeScript solo añade animaciones de entrada y actualiza el año del pie.

## Desplegar en Vercel

1. Importar `caporrfer/metodocafe` desde GitHub.
2. Usar la raíz del repositorio como **Root Directory**.
3. Seleccionar el preset **Vite**, compilación **npm run build** y salida **dist**; estas opciones ya están en `vercel.json`.
4. Desplegar. No hacen falta variables de entorno.

El repositorio no activa GitHub Pages ni crea un proyecto en ningún proveedor. La publicación corresponde al propietario. Al disponer de un dominio definitivo, se puede añadir su URL canónica en `index.html` y la propiedad `url` del negocio en los datos estructurados.

## Editar contenido y diseño

- `index.html`: textos, fotografías, navegación, enlaces, SEO y datos `CafeOrCoffeeShop`. Dirección y teléfono aparecen también en el JSON-LD: mantenerlos sincronizados. Los enlaces de Google Maps se repiten en portada, visita y barra móvil.
- `src/style.css`: colores, tipografía, composición y reglas responsive. La barra móvil reserva espacio en el pie y respeta el área segura del dispositivo.
- `src/main.ts`: animaciones opcionales; respeta `prefers-reduced-motion`, también cuando cambia durante la visita.
- `public/images/`: cuatro fotos reales, cada una con tres variantes WebP. Mantener `srcset`, `sizes`, dimensiones y textos alternativos al sustituirlas.

La foto vertical de la barra se encuadra por CSS como un detalle 4:3, correspondiente aproximadamente a `[0, 550, 1380, 1585]` sobre el original de 1600 × 2133. Así se excluye el extremo derecho con elementos de obra; no se ha retocado el contenido de la fotografía.

## Datos y procedencia

Información revisada el **3 de octubre de 2026**. La dirección, teléfono, platos destacados y servicios de consumo en local/para llevar proceden de la ficha de Google Maps facilitada para el proyecto. La historia de Adri y Alba y las fotografías se contrastaron con prensa local. Instagram: `https://www.instagram.com/metodocafeclub/`, identificado en el contenido enlazado por Huelva24.

Se omiten horarios, precios por plato, carta completa, valoraciones dinámicas y certificaciones que no se han verificado. La selección de productos es orientativa, no una carta completa. No se ofrecen reservas ni pedidos.

Las fuentes de las fotografías y las licencias tipográficas están documentadas en [CREDITS.md](CREDITS.md). No se aplican licencias de software a fotografías ajenas.

## Validación

- Compilación de producción y comprobación de TypeScript.
- Revisión visual a 360, 390, 768 y 1440 píxeles.
- Navegación por anclas, teclado, foco visible, enlaces a Maps, Instagram y teléfono.
- Revisión de contraste, reflujo equivalente al 200 % (1440 → 720 píxeles), carga de imágenes y ausencia de desbordamiento horizontal. El navegador integrado no expone un control de zoom real; se comprobó el ancho CSS equivalente.

Todas las imágenes se sirven localmente; la portada carga con prioridad y el resto usa carga diferida. Las doce variantes WebP suman aproximadamente 869 kB; cada visita descarga solo las variantes que necesita.
