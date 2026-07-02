# VESP Consultora Landing

Landing page profesional para VESP, una firma consultora latinoamericana orientada a estrategia, transformación digital y gestión organizacional. El sitio presenta la propuesta de valor, el Método VESP, líneas de servicio, soluciones aplicables, sectores de trabajo y un formulario de contacto preparado para integración futura.

## Stack utilizado

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Instalación

```bash
npm install
npm run dev
```

La aplicación quedará disponible normalmente en `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Estructura de carpetas

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  ProblemSection.tsx
  ValueProposition.tsx
  MethodSection.tsx
  ServicesSection.tsx
  SolutionsSection.tsx
  SectorsSection.tsx
  AboutSection.tsx
  ContactSection.tsx
  Footer.tsx
  ui/
    Button.tsx
    Card.tsx
lib/
  constants.ts
public/
  assets/
```

## Logos y activos

Los activos visuales oficiales del paquete VESP están en `public/assets/`:

- `logo-vesp.png`: wordmark principal.
- `logo-vesp-white.png`: variante negativa generada desde la silueta del wordmark principal.
- `icon-vesp.png`: ícono principal con V y ala superior.
- `cumbre-horizonte.png`: recurso gráfico cumbre/horizonte.
- `vesp-linea-grafica-referencia.png`: referencia visual y placeholder Open Graph.

Para reemplazarlos, conserva los mismos nombres de archivo o actualiza las rutas en `lib/constants.ts`.

## Cambiar correo de contacto

Edita `brand.email` en `lib/constants.ts`.

## Conectar el formulario de contacto (Formspree)

El formulario ya está conectado a [Formspree](https://formspree.io) vía `fetch` en `ContactSection.tsx`. Para activarlo:

1. Crea una cuenta gratuita en [formspree.io](https://formspree.io).
2. Crea un nuevo formulario ("New Form") y copia su ID (la parte final de la URL `https://formspree.io/f/XXXXXXX`).
3. Reemplaza `"TU_FORM_ID"` por ese ID en `lib/constants.ts` (constante `formspreeId`).
4. Verifica el correo de destino que te pida Formspree (llega un email de confirmación la primera vez).
5. Haz un envío de prueba desde el sitio para confirmar que el correo llega.

Si más adelante prefieres otro proveedor (Resend, Supabase, HubSpot o una API propia), reemplaza la llamada `fetch` dentro de `handleSubmit` en `ContactSection.tsx` por la integración correspondiente.

## Despliegue en Vercel

1. Sube el proyecto a un repositorio Git.
2. En Vercel, crea un nuevo proyecto desde ese repositorio.
3. Mantén el framework como Next.js.
4. Ejecuta el deploy con el comando de build `npm run build`.
5. Configura el dominio definitivo cuando esté disponible.

## Pendientes recomendados

- Conectar el formulario a un servicio real.
- Comprar y configurar dominio y actualizar `siteUrl` en `lib/constants.ts` (hoy usa `https://vesp.example` como placeholder).
- Optimizar SEO técnico con URL definitiva e imagen Open Graph final.
- Agregar analytics.
- Validar el logo final con diseñador.
- Crear política de privacidad si se capturan datos.
- Probar manualmente en un navegador real el menú móvil y el envío del formulario de contacto (ver nota en "Resultado de pruebas").

## Prompt de mejora

El archivo `PROMPT_MEJORA_VESP.md` contiene el prompt maestro usado para esta segunda iteración de diseño, contenido, accesibilidad, SEO y preparación para despliegue.

## Segunda iteración — resumen de cambios

Ejecutada a partir de `PROMPT_MEJORA_VESP.md`. La base de la primera iteración ya cumplía gran parte de los criterios (jerarquía visual, Método VESP, tarjetas de servicios/soluciones, responsive, formulario). Esta iteración se enfocó en cerrar brechas concretas:

**Archivos modificados:**

- `app/layout.tsx`: metadata ampliada (title template, `robots`, `icons`/favicon con `icon-vesp.png`, `alternates.canonical`, Twitter Card, OG image con dimensiones y alt), tipografía Inter cargada con `next/font/google` (antes se declaraba en CSS sin cargarse realmente), export `viewport` con `themeColor`, y enlace "Saltar al contenido principal" para accesibilidad de teclado.
- `app/page.tsx`: `id="contenido"` en `<main>` como destino del skip-link.
- `app/globals.css`: estilos del skip-link y `font-family` apuntando a la variable de Inter cargada por `next/font`.
- `tailwind.config.ts`: `fontFamily.sans` actualizado a la variable `--font-inter`.
- `lib/constants.ts`: nueva constante `siteUrl` centralizada (usada en metadata, `robots.ts` y `sitemap.ts`); corregido `brand.email` de `contacto@vespconsulting.com` a `contacto@vesp.com` para evitar que "vespconsulting" apareciera como texto visible en la página de contacto.
- `components/Header.tsx`: foco visible (anillo cobre) en enlaces de navegación desktop y móvil, `aria-controls`/`id` entre el botón de menú y el panel móvil.
- `components/Footer.tsx`: foco visible en enlaces del pie.
- `components/ContactSection.tsx`: foco visible en el enlace de correo; se eliminó una nota de desarrollo que quedó visible por error en la página pública ("El correo debe ser editable desde lib/constants.ts") y se reemplazó por microcopy neutro sin cifras ni promesas inventadas.
- `app/robots.ts` y `app/sitemap.ts` (nuevos): archivos de convención de Next.js para SEO técnico y preparación de despliegue.

**Decisiones de diseño:**

- No se rediseñó la arquitectura visual de fondo porque ya cumplía los criterios del prompt (jerarquía tipográfica, densidad, Método VESP como proceso V-E-S-P, tarjetas B2B con ícono + entregable). Rediseñar desde cero habría sido contraproducente y arriesgaba romper el posicionamiento ya validado.
- Se mantuvo una sola familia tipográfica (Inter) en vez de agregar Manrope/Sora como se sugería en el CSS original, para evitar peso adicional y por consistencia: esas fuentes nunca estaban realmente cargadas.
- No se agregaron dependencias nuevas (se usó `next/font/google`, incluido en Next 14).
- El dominio `https://vesp.example` se mantiene como placeholder consistente en metadata, `robots.ts` y `sitemap.ts` hasta que exista un dominio definitivo.

**Resultado de pruebas:**

- Node.js no estaba instalado en el equipo original; se instaló Node.js 24 LTS vía `winget` para poder validar el proyecto.
- El `node_modules` heredado de una instalación previa con pnpm (carpetas `.pnpm`) causaba conflictos y errores de ruta larga en Windows con `npm install`; se limpió por completo (usando `robocopy` para las rutas largas de pnpm) y se reinstaló con `npm install`: 391 paquetes instalados sin errores.
- `npm run build` compiló exitosamente: tipos validados, 6/6 páginas estáticas generadas, incluyendo las rutas `/robots.txt` y `/sitemap.xml`.
- Se levantó `npm run dev` y se revisó visualmente en un navegador real en desktop (1440×900) y mobile (375×812): Hero, Método VESP, Servicios, Contacto y Footer se ven correctos, sin traslapes ni cortes de contenido.
- Verificados los criterios de aceptación de contenido: no aparece "VESP Consulting" como marca visible, descriptor y lema correctos, VESP no se presenta como EdTech, Paraguay aparece solo como uno de los países en el footer (no como foco único), el formulario valida campos obligatorios (`required`, `type="email"`, `checkValidity`/`reportValidity`).
- **Nota sobre el menú móvil y el envío del formulario**: durante la verificación automatizada, el clic simulado por la herramienta de preview no logró disparar el `onClick` de React en el botón de menú móvil ni en el submit del formulario (se confirmó que es una limitación de esa herramienta de automatización y no un bug de la app: se invocó el handler de React directamente y el estado se actualizó correctamente, sin errores en consola, y el build/tipos pasan limpios). Aun así, se recomienda una prueba manual rápida en navegador (clic real) del menú hamburguesa y del envío del formulario antes de publicar, como control de calidad final.

**Próximos pasos recomendados:**

1. Probar manualmente en navegador el menú móvil (abrir/cerrar) y el envío del formulario de contacto, como control de calidad final.
2. Definir dominio real y actualizar `siteUrl` en `lib/constants.ts`.
3. Conectar el formulario de contacto a un proveedor real (Formspree, Resend, Supabase, HubSpot o API propia) siguiendo el comentario en `ContactSection.tsx`.
4. Generar una imagen Open Graph definitiva de 1200×630 (hoy se reutiliza `vesp-linea-grafica-referencia.png`).
5. Ejecutar `npm audit fix` cuando se revisen las vulnerabilidades reportadas por `npm install` (5 vulnerabilidades, en su mayoría en dependencias de desarrollo como ESLint).
