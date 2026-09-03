# spec.md — santinho.dev landing page redesign

## Qué es
Landing page personal de un desarrollador full-stack chileno (Santino / marca
"santinho.dev"). No es un producto SaaS con backend propio — es una página de
presencia/portafolio: hero + trabajo (3 proyectos reales) + proceso + contacto.
Vive dentro de un proyecto Next.js 16 real (App Router) en
`C:\Users\Santino\Documents\santinho-dev\` — hoy tiene una versión funcional que el
usuario autorizó a descartar por completo (solo el diseño, no el contenido real).

## Audiencia y objetivo
Directores/socios de organizaciones (hoy: agrupaciones folclóricas chilenas) que
necesitan una herramienta de gestión real, y desarrolladores/reclutadores que evalúan
su trabajo. Objetivo: transmitir que construye software serio, en producción, usado
cada semana — no demos ni maquetas.

## Tono / dirección artística
Explícitamente pedida por el usuario: **dirección artística de Apple**. Contenido real,
sin relleno. Tipografía como protagonista. Nada de gradiente morado, nada de emoji como
ícono, nada de card redondeada + borde de color a la izquierda.

## Formato de salida
Página web responsive (no PPT, no tamaño fijo en px) — irá a producción como
`src/app/page.tsx` una vez elegida la dirección. Los 3 borradores de esta fase son
HTML estático de un solo archivo, mobile-first pero mostrado en escritorio 1440×900
para la comparación.

## Contenido real — reutilizar tal cual (español), no inventar ni reescribir el fondo
- Marca: **santinho.dev** — desarrollador full-stack.
- Posicionamiento: "Santino — Full-Stack Developer" / "Desarrollo software para
  organizaciones reales: plataformas SaaS multi-tenant para agrupaciones folclóricas
  chilenas."
- Headline hero: "Construyo software que organizaciones reales usan."
- Sub hero: "Plataformas SaaS multi-tenant para agrupaciones folclóricas chilenas:
  asistencia, cuotas, gamificación y reportes, sobre Next.js, Prisma y Neon Postgres."
- Nav: Inicio / Trabajo / Proceso / Contacto — CTA GitHub → https://github.com/SantinoCL
- Sección Trabajo — headline: "Plataformas que agrupaciones usan cada semana."
  Lead: "Tres instancias de una misma plataforma multi-tenant, cada una con su propia
  marca, dominio y datos aislados. Sin demos: herramientas que directores y socios usan
  todas las semanas." Stats: 03 Organizaciones · 1 Código base · 100% Multi-tenant.
- Proyectos (3, con imagen real — ver Phase 3.5 assets):
  1. **Rosa Fuentes** — "Sitio público y portal de gestión: asistencia, cuotas, rifas,
     progresión (XP) e informes exportables." Links: Sitio → rosafuentes.cl · Portal →
     portal.rosafuentes.cl. Imagen real: `assets/img/rosa-fuentes.png`.
  2. **Sentimiento y Tradición** — "Segunda instancia de la misma plataforma
     multi-tenant, marca y datos propios, separados de Rosa Fuentes." Link: Portal →
     sentimiento-tradicion-portal.vercel.app. Imagen real:
     `assets/img/sentimiento-tradicion.png`.
  3. **Arando Cuecas** — "Tercera instancia. Dominio propio en proceso de
     propagación." Link: Portal → portal.arandocuecas.cl. **Sin imagen real** (dominio
     aún no resuelve DNS) — usar un estado honesto tipo "Dominio en propagación", no
     inventar screenshot ni maquetar una pantalla falsa.
- Sección Proceso — headline: "De la idea al producto en producción."
  01 Multi-tenant desde el diseño — "Un código base sirve a cada organización con
  marca, dominio y datos aislados."
  02 Stack — "Next.js, Prisma + Neon Postgres, Clerk para autenticación, S3 para
  archivos."
  03 Gestión real — "Asistencia, cuotas, rifas, progresión (XP) e informes
  exportables — no demos, herramientas que se usan cada semana."
  04 Seguridad — "Rate limiting, migraciones controladas, ningún cambio a producción
  sin confirmación explícita."
- Contacto — headline: "Hablemos." Copy: "Si tu organización necesita una herramienta
  que la gente realmente use, escríbeme." CTA: GitHub.
- Footer: brand + "Desarrollador full-stack construyendo SaaS multi-tenant para
  organizaciones reales." · Elsewhere: GitHub · Trabajo: Rosa Fuentes, Arando Cuecas ·
  © 2026 Santino · Next.js · Vercel.

## Restricciones conocidas
- Logo real obligatorio (ver `brand-spec.md`) — nunca redibujar el wordmark, usar el
  PNG provisto (negro sobre fondo claro, blanco sobre fondo oscuro).
  Base64-embeber en el HTML.
  Ruta: `C:\Users\Santino\Documents\santinho-dev\logos\`.
- Screenshots reales de los 2 proyectos con sitio activo — base64-embeber desde
  `C:\Users\Santino\Documents\santinho-dev\design-demos\assets\img\`.
  Nunca reemplazar por silueta CSS ni bloque de color genérico.
- Nada de contenido inventado (sin testimonios falsos, sin stats inventadas, sin
  clientes ficticios).

## Motivo visual (form del contenido)
El wordmark "SANTINHO.DEV" es un didone con swashes muy marcados — eso es lo único que
esta marca ya "tiene" de personalidad tipográfica. El motivo debería nacer de ahí:
tipografía como protagonista, no ilustración. El contenido es "trabajo real,
verificable" (links en vivo, stack real) — el diseño debería sentirse como evidencia,
no como promesa.
