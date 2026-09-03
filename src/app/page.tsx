"use client";

import { useEffect, useRef } from "react";

const GITHUB_URL = "https://github.com/SantinoCL";

const CHAPTERS = [
  { num: "01", label: "Rosa Fuentes", sub: "Sitio + portal SaaS", href: "#trabajo" },
  { num: "02", label: "Sentimiento y Tradición", sub: "Portal de gestión", href: "#trabajo" },
  { num: "03", label: "Arando Cuecas", sub: "Nueva instancia SaaS", href: "#trabajo" },
  { num: "04", label: "Contacto", sub: "Hablemos", href: "#contacto" },
];

const PROJECTS = [
  {
    tag: "Sitio + SaaS",
    title: "Rosa Fuentes",
    desc: "Sitio público de la agrupación folclórica y su portal de gestión: asistencia, cuotas, rifas, progresión (XP) e informes exportables.",
    links: [
      { label: "rosafuentes.cl", href: "https://rosafuentes.cl" },
      { label: "portal →", href: "https://portal.rosafuentes.cl" },
    ],
  },
  {
    tag: "Portal SaaS",
    title: "Sentimiento y Tradición",
    desc: "Segunda instancia de la misma plataforma multi-tenant, con marca y datos propios, separados de Rosa Fuentes.",
    links: [{ label: "portal →", href: "https://sentimiento-tradicion-portal.vercel.app" }],
  },
  {
    tag: "Portal SaaS · en despliegue",
    title: "Arando Cuecas",
    desc: "Tercera instancia, en proceso de propagación de dominio propio (arandocuecas.cl).",
    links: [{ label: "portal →", href: "https://portal.arandocuecas.cl" }],
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Multi-tenant desde el diseño",
    desc: "Un solo código base sirve a cada organización con su propia marca, dominio y datos aislados.",
  },
  {
    num: "02",
    title: "Stack",
    desc: "Next.js, Prisma + Neon Postgres, Clerk para autenticación, S3 para archivos.",
  },
  {
    num: "03",
    title: "Gestión real",
    desc: "Asistencia, cuotas, rifas, progresión (XP) e informes exportables en Excel — no demos, herramientas que se usan cada semana.",
  },
  {
    num: "04",
    title: "Seguridad",
    desc: "Rate limiting, migraciones controladas, nunca un cambio a producción sin confirmación explícita.",
  },
];

export default function Home() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle("stuck", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    document.querySelectorAll("[data-rv]").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-scene" aria-hidden="true" />

      <header className="nav" ref={navRef} id="top">
        <a className="brand" href="#top">
          <span className="mark">S</span>
          <span>santinho.dev</span>
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#trabajo">Trabajo</a>
          <a className="nav-link" href="#proceso">Proceso</a>
          <a className="nav-link" href="#contacto">Contacto</a>
        </nav>
        <a className="nav-cta" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </header>

      <div className="page">
        <section className="hero" id="hero">
          <div className="hero-top">
            <div className="eyebrow" data-rv="fade">
              <span className="dot" />
              Desarrollador Full-Stack
            </div>
            <h1 className="display">
              Construyo software que <span className="accent">organizaciones reales</span> usan
              todos los días.
            </h1>
            <p className="hero-sub" data-rv="up">
              Plataformas SaaS multi-tenant para agrupaciones folclóricas chilenas: asistencia,
              cuotas, gamificación y reportes, sobre Next.js, Prisma y Neon Postgres.
            </p>
          </div>

          <div className="hero-spacer" />

          <div className="hero-foot">
            <div className="chapters">
              {CHAPTERS.map((c) => (
                <a className="chip" key={c.num} href={c.href} data-rv="up">
                  <span className="num">{c.num}</span>
                  <span>
                    <b>{c.label}</b>
                    <p>{c.sub}</p>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="trabajo">
          <div className="sec-head" data-rv="fade">
            <span className="k"><b>01</b> — Trabajo</span>
            <span className="rule" />
          </div>
          <h2 className="display" data-rv="up">
            Plataformas que agrupaciones folclóricas usan cada semana.
          </h2>
          <p className="lead" data-rv="up">
            Tres instancias de una misma plataforma multi-tenant, cada una con su propia marca,
            dominio y datos aislados.
          </p>
          <div className="cards">
            {PROJECTS.map((p) => (
              <article className="card" key={p.title} data-rv="up">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div style={{ display: "flex", gap: 16 }}>
                  {p.links.map((l) => (
                    <a className="link" key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sec" id="proceso">
          <div className="sec-head" data-rv="fade">
            <span className="k"><b>02</b> — Proceso</span>
            <span className="rule" />
          </div>
          <h2 className="display" data-rv="up">
            De la idea al producto en producción.
          </h2>
          <div className="cur">
            {PROCESS.map((step) => (
              <div className="les" key={step.num} data-rv="up">
                <span className="k">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec fin" id="contacto" data-rv="fade">
          <h2 className="display">Hablemos.</h2>
          <p>
            Si tu organización necesita una herramienta que la gente realmente use, escríbeme.
          </p>
          <a className="cta" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <span>→</span>
          </a>
        </section>

        <footer className="foot">
          <div className="foot-grid">
            <div className="foot-brand">
              <span className="brand">
                <span className="mark">S</span>
                <span>santinho.dev</span>
              </span>
              <p>Desarrollador full-stack construyendo SaaS multi-tenant para organizaciones reales.</p>
            </div>
            <div>
              <ul>
                <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://rosafuentes.cl" target="_blank" rel="noopener noreferrer">Rosa Fuentes</a></li>
                <li><a href="https://portal.arandocuecas.cl" target="_blank" rel="noopener noreferrer">Arando Cuecas</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-base">
            <span>© 2026 Santino</span>
            <span>Next.js · Vercel</span>
          </div>
        </footer>
      </div>
    </>
  );
}
