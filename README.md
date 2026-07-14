# VUNEK Consultora Landing

Landing page profesional para VUNEK, una firma consultora latinoamericana orientada a estrategia, transformación digital y gestión organizacional. El sitio presenta la propuesta de valor, el Método VESP (metodología propia, con su nombre histórico), líneas de servicio, soluciones aplicables, sectores de trabajo y un formulario de contacto preparado para integración futura.

> **Nota de marca**: el proyecto se rebrandeó de VESP a VUNEK. La metodología conserva su nombre original "Método VESP" (siglas Visión-Estrategia-Soluciones-Puesta en marcha) por decisión explícita del cliente. Ver detalle en "Sexta iteración" más abajo.

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

Los activos visuales están en `public/assets/`. Los nombres de archivo conservan el prefijo `vesp-` por herencia de la marca anterior (ver "Sexta iteración" más abajo); el sitio ya muestra "VUNEK" como texto en todas partes:

- `logo-vesp.png` / `logo-vesp-white.png`: wordmark completo de la marca **anterior** (VESP). **Ya no se usan en el sitio** — pendiente de reemplazo por un wordmark VUNEK real.
- `icon-vesp.png` / `icon-vesp-white.png`: símbolo (V + ala), sin letras — es marca-neutral y sí se sigue usando, junto al texto "VUNEK", en Header/Footer/Hero/Sobre Nosotros.
- `cumbre-horizonte.png`: silueta decorativa de cerros en cobre, marca-neutral.
- `vesp-linea-grafica-referencia.png`: hoja de referencia de la marca anterior; **todavía se usa como imagen Open Graph** (pendiente real, ver "Sexta iteración").

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
- Comprar y configurar dominio y actualizar `siteUrl` en `lib/constants.ts` (hoy usa `https://vunek.example` como placeholder).
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

## Tercera iteración — corrección de assets visuales

Se detectaron y corrigieron dos problemas en las imágenes de marca:

1. **`logo-vesp.png` recortado**: el archivo original cortaba la base de las letras "VESP" (se veía "ESI" en vez de "ESP"). Se reemplazó extrayendo el lockup completo del wordmark desde `vesp-linea-grafica-referencia.png`, con el fondo removido por distancia de color (no por luminancia, para no alterar el degradado cobre) y recorte automático al contenido real. Nuevas dimensiones: 934×309 (antes 1140×320); se actualizó el `width`/`height` del `<Image>` en `Header.tsx`.
2. **`cumbre-horizonte.png` irreconocible**: el gráfico decorativo original era casi una línea plana, no se entendía que representaba un cerro. Se extrajo el ícono de montaña de la sección "VISIÓN" en `vesp-linea-grafica-referencia.png`, se recoloreó a cobre institucional (para mantener visibilidad sobre los fondos navy donde se usa) y se compuso una silueta de tres picos superpuestos sobre un lienzo transparente de 1600×260 (antes 1600×180). Se actualizó el `height` del `<Image>` en `Hero.tsx`, `MethodSection.tsx` y `AboutSection.tsx`.

Verificado con `npm run build` (compila limpio) y visualmente en navegador (desktop 1440×900).

## Cuarta iteración — ajustes de contenido y jerarquía

Cambios solicitados tras revisión de copy:

1. **Hero**: se eliminó el recuadro con el texto "Visión latinoamericana · Raíz territorial · Transformación aplicable." (no aportaba valor). En su lugar, el ícono VESP ahora aparece junto al wordmark "VESP" como un lockup de marca.
2. **Soluciones ("Segunda etapa")**: eyebrow renombrado a "Catálogo de soluciones"; se quitó la frase "No vendemos cursos genéricos" (innecesaria/comparativa) dejando solo la afirmación positiva; se reordenó la lista de 9 soluciones agrupándola temáticamente: capacidades (rutas formativas, academias internas) → IA y automatización (agentes IA, asistentes, automatización, protocolos de uso responsable) → gobernanza y medición (tableros ejecutivos, modelos de transferencia).
3. **Sobre VESP**: se reemplazó el heading y el párrafo que mencionaban "visión latinoamericana" y "raíz territorial" sin contexto suficiente. El nuevo texto (`brand.aboutHeading` y `brand.aboutParagraph` en `lib/constants.ts`) se enfoca en el método de trabajo (rigor ejecutivo, integración de estrategia/transformación digital/gestión organizacional) sin apoyarse en la geografía como argumento de identidad. La presencia en Chile, Paraguay, Colombia y América Latina se mantiene como dato concreto en el footer.
4. Se quitaron los puntos finales en textos de listado (`problemCards`, títulos de `valuePillars`, `solutions`, `sectors`) que no correspondían por ser etiquetas cortas y no oraciones.

Verificado con `npm run build` y visualmente en navegador.

## Quinta iteración — limpieza de `icon-vesp.png`

Se detectó ruido de píxeles blancos casi opacos alrededor de los trazos del ala y la V en `icon-vesp.png` (defecto del archivo original, no introducido en esta consultoría). Era invisible sobre fondo blanco, pero muy notorio al usarse grande sobre fondos oscuros (el ícono decorativo del Hero). Se limpió recalculando el canal alfa por distancia de color al blanco (mismo método usado para `logo-vesp.png`), eliminando los píxeles de fondo mal etiquetados como opacos sin alterar los degradados navy/cobre. Verificado componiendo el ícono sobre fondo oscuro antes y después del arreglo, y visualmente en el Hero real.

## Sexta iteración — rebrand VESP → VUNEK

La marca cambió de nombre: **VESP → VUNEK**. Por decisión explícita del cliente, la metodología propia conserva su nombre histórico "Método VESP" (siglas Visión-Estrategia-Soluciones-Puesta en marcha) — no se tocó `MethodSection.tsx` ni el enlace "Conocer el Método VESP" del Hero.

**Cambios de texto** (todos vía `lib/constants.ts` salvo donde se indica):

- `brand.name`: `"VESP"` → `"VUNEK"` (se propaga automáticamente al `<title>`, metadata OG/Twitter, Hero, Footer, `AboutSection`, `ProblemSection`, `SectorsSection`, ya que todos esos textos usan `{brand.name}` en vez de un literal hardcodeado).
- `brand.email`: `contacto@vesp.com` → `contacto@vunek.com`.
- `siteUrl`: `https://vesp.example` → `https://vunek.example`.
- `brand.aboutParagraph`: se cambió la mención literal de "VESP acompaña..." a `{brand.name}`.
- `package.json` / `package-lock.json`: `name` actualizado a `vunek-consultora-landing`.

**Problema de fondo — logos gráficos**: `logo-vesp.png` y `logo-vesp-white.png` son imágenes con el wordmark "VESP" dibujado en los píxeles (no texto real), heredadas de la marca anterior. No es posible "renombrarlas" a VUNEK sin rediseñar el wordmark completo, y no existe un archivo de referencia de VUNEK para extraerlo (a diferencia de VESP, que sí tenía `vesp-linea-grafica-referencia.png`). Solución aplicada mientras no exista un logo VUNEK real:

- Se recortó únicamente el símbolo (V + ala, sin letras) de `logo-vesp-white.png`, generando el nuevo asset `icon-vesp-white.png` (305×268, transparente).
- `Header.tsx` y `Footer.tsx` ya no usan las imágenes de wordmark completo (`assets.logo` / `assets.logoWhite`). Ahora muestran el símbolo (`assets.icon` / `assets.iconWhite`) junto al texto real `{brand.name}` ("VUNEK"), como un lockup ícono + texto — igual al patrón ya usado en el Hero.
- `assets.logo` y `assets.logoWhite` quedan definidos en `lib/constants.ts` pero **sin uso** en el sitio; se conservan por si sirven de referencia de estilo al diseñar el wordmark VUNEK real.
- **Pendiente real**: `vesp-linea-grafica-referencia.png` (usado como imagen Open Graph para compartir en redes) sigue mostrando visualmente la marca VESP anterior. Debe reemplazarse por una imagen OG de 1200×630 con la marca VUNEK antes de publicar.

Verificado con `npm run build` (compila limpio) y visualmente en navegador, confirmando que "VUNEK" aparece correctamente en Header, Hero, Footer, Sobre Nosotros, Problemas y Sectores, y que "Método VESP" permanece intacto donde corresponde.
