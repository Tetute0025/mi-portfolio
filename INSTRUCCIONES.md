# Base sencilla de portfolio Astro

Este conjunto de archivos está pensado para integrarse en tu proyecto `mi-portfolio` existente. No incluye ni reemplaza `package.json`, `wrangler.jsonc`, `.gitignore` ni la configuración de Cloudflare.

## Antes de copiar

1. Detén `npm run dev` con `Ctrl+C` o haz una copia de seguridad de estos archivos actuales:
   - `src/pages/index.astro`
   - `src/pages/proyectos.astro`
   - `src/layouts/Layout.astro`
2. Copia el contenido de la carpeta de este paquete a la raíz de tu proyecto existente, manteniendo las mismas carpetas. Permite reemplazar los tres archivos anteriores.
3. Asegúrate de que se copien también los nuevos archivos de `src/styles/`, `src/scripts/`, `src/pages/servicios.astro` y `public/images/`.
4. Desde la terminal de VS Code, ejecuta `npm run dev`.
5. Prueba estas rutas locales:
   - `http://localhost:4321/`
   - `http://localhost:4321/proyectos/`
   - `http://localhost:4321/servicios/`

Si `src/components/ProjectCard.astro` o `Welcome.astro` siguen existiendo, no pasa nada: estas páginas no los necesitan actualmente.

## Qué hay en cada archivo

- `src/layouts/Layout.astro`: estructura compartida por las páginas, navegación, título, descripción y pie.
- `src/styles/global.css`: todo el diseño. Las variables de color están en `:root`, al principio.
- `src/scripts/site.js`: JavaScript del menú móvil, filtro de proyectos y año automático del pie.
- `src/pages/index.astro`: portada.
- `src/pages/proyectos.astro`: tarjetas, imágenes de ejemplo y filtros.
- `src/pages/servicios.astro`: catálogo del homelab con etiquetas de acceso privado.
- `public/images/`: ilustraciones provisionales que puedes sustituir por fotos o capturas tuyas.

## Cómo cambiar imágenes

Copia tu imagen en `public/images/`. Ejemplo: `homelab.jpg`. Después busca en el archivo Astro el texto `/images/homelab-placeholder.svg` y cámbialo por `/images/homelab.jpg`.

## Cómo añadir un proyecto

En `src/pages/proyectos.astro`, copia un bloque completo `<article class="project-card" ...>...</article>`, pégalo dentro del `<div class="project-grid">` y cambia título, descripción, categoría, etiquetas e imagen.

La categoría se utiliza en el filtro. Usa `data-category="web"`, `data-category="homelab"` o `data-category="python"` para que funcione con los botones existentes.

## Cómo añadir un servicio

En `src/pages/servicios.astro`, duplica un `<article class="service-card">...</article>` y cambia el título, descripción e icono. Para cambiar el estado puedes conservar una de estas clases:
- `is-private` — acceso privado.
- `is-building` — en preparación.
- `is-online` — en línea.

No marques como público un servicio si no has comprobado cómo se autentica. No pongas contraseñas, tokens ni IPs internas en la web pública. No publiques directamente paneles de administración como Proxmox, el router o la gestión DNS; utiliza una VPN o un sistema de acceso autenticado.

## Antes de publicar

Primero prueba las tres páginas en local. Después mira los cambios con `git status`, revisa `git diff` y haz commit/push solo cuando estés conforme. El contenido de `public/` será accesible a visitantes de la web publicada.
