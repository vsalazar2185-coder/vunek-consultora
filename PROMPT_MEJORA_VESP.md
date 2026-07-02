# Prompt maestro para mejorar la landing de VESP

Actua como desarrollador senior frontend, diseñador UI/UX B2B, especialista en landing pages corporativas y revisor de calidad visual.

Necesito mejorar una landing page ya creada para VESP, una firma consultora latinoamericana orientada a estrategia, transformación digital y gestión organizacional.

El proyecto actual está construido con:

- Next.js 14.
- React.
- TypeScript.
- Tailwind CSS.
- Componentes reutilizables.
- Contenido centralizado en `lib/constants.ts`.
- Activos visuales en `public/assets/`.

Objetivo de esta nueva iteración:

Mejorar el diseño, la experiencia responsive, la calidad visual, la conversión y la preparación para despliegue, manteniendo intacto el posicionamiento estratégico de la marca.

## Contexto de marca

Nombre público:
VESP

Descriptor:
Estrategia, transformación digital y gestión organizacional.

Promesa:
Convertimos desafíos organizacionales en soluciones claras, aplicables y medibles.

Lema:
De la estrategia a la implementación.

Relato identitario:
Visión latinoamericana · Raíz territorial · Transformación aplicable.

No usar como marca principal:
VESP Consulting

No presentar a VESP como:

- Consultora EdTech.
- Agencia de capacitación.
- Empresa de soporte tecnológico.
- Startup genérica.
- Empresa enfocada únicamente en Paraguay.

Educación superior puede aparecer como una línea de especialidad, pero no como límite de la marca.

## Instrucciones críticas de identidad visual

Preservar el símbolo correcto de VESP:

- Ícono principal con V y ala superior.
- Azul navy profundo.
- Cobre/dorado andino.
- Estética sobria, moderna, ejecutiva y tecnológica.

No redibujar, reemplazar ni deformar el ícono principal.

Activos disponibles:

- `public/assets/logo-vesp.png`
- `public/assets/logo-vesp-white.png`
- `public/assets/icon-vesp.png`
- `public/assets/cumbre-horizonte.png`
- `public/assets/vesp-linea-grafica-referencia.png`

Paleta institucional:

- Azul navy profundo: `#0E1D2F`
- Cobre/dorado andino: `#B87333`
- Verde quillay: `#3E4E3A`
- Gris niebla: `#BFC2C7`
- Blanco: `#FFFFFF`
- Negro suave: `#111827`

## Tareas de mejora solicitadas

1. Revisar la arquitectura visual completa de la landing.
2. Mejorar jerarquía tipográfica, espaciados, ritmo vertical y densidad de información.
3. Refinar el hero para que tenga alto impacto sin tapar contenido ni parecer recargado.
4. Mejorar la sección Método VESP como proceso ejecutivo claro y memorable.
5. Mejorar tarjetas de servicios y soluciones para que se lean como consultoría B2B premium.
6. Asegurar que todas las secciones funcionen impecablemente en mobile, tablet y desktop.
7. Optimizar contraste, foco visible, semántica HTML y accesibilidad.
8. Mejorar microcopy del formulario sin inventar promesas, clientes, cifras ni casos.
9. Mantener todos los textos editables desde `lib/constants.ts` cuando tenga sentido.
10. Revisar SEO, metadata, Open Graph y estructura de encabezados.
11. Preparar el proyecto para deploy en Vercel o Netlify.
12. Agregar mejoras menores de interacción si aportan valor: hover states, transiciones suaves, navegación anclada más clara.

## Restricciones de contenido

No usar:

- “Somos líderes”.
- “Revolucionamos”.
- “Disruptivos” sin sustento.
- “Consultora EdTech” como posicionamiento.
- “Procesos, tecnología y capacidades” como descriptor principal.
- Clientes inventados.
- Casos inventados.
- Cifras inventadas.
- Promesas exageradas.

Tono deseado:

- Ejecutivo.
- Sobrio.
- Estratégico.
- Claro.
- Confiable.
- Moderno.
- B2B.
- Latinoamericano sin folclorismo.

## Requisitos técnicos

Mantener:

- Next.js 14 o superior.
- React.
- TypeScript.
- Tailwind CSS.
- Componentes reutilizables.
- Formulario sin backend obligatorio.
- Placeholder claro para integrar Formspree, Resend, Supabase, HubSpot o API propia.
- README actualizado.

No incorporar dependencias pesadas salvo que aporten valor real.

Si agregas una dependencia nueva, justificarla en el README.

## Criterios de aceptación

Antes de entregar:

1. Ejecutar `npm install` o el gestor equivalente.
2. Ejecutar `npm run build`.
3. Revisar desktop y mobile visualmente.
4. Confirmar que no aparece “VESP Consulting” como marca principal.
5. Confirmar que el descriptor correcto aparece como:
   “Estrategia, transformación digital y gestión organizacional.”
6. Confirmar que el lema correcto aparece como:
   “De la estrategia a la implementación.”
7. Confirmar que no se presenta VESP como EdTech.
8. Confirmar que no se presenta Paraguay como único foco.
9. Confirmar que el formulario valida campos obligatorios.
10. Confirmar que el README explica instalación, build, activos, correo de contacto y despliegue.

## Entrega esperada

Entregar el proyecto completo actualizado, no solo fragmentos.

Incluir al final:

- Resumen de cambios.
- Archivos modificados.
- Decisiones de diseño.
- Resultado de pruebas.
- Próximos pasos recomendados.
