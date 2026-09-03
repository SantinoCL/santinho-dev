"use client";

import { useEffect } from "react";
import Image from "next/image";

const GITHUB_URL = "https://github.com/SantinoCL";

const PROJECTS = [
  {
    label: "Rosa Fuentes",
    url: "rosafuentes.cl",
    desc: "Sitio público y portal de gestión: asistencia, cuotas, rifas, progresión (XP) e informes exportables.",
    shot: "/work/rosa-fuentes.png",
    links: [
      { label: "Sitio → rosafuentes.cl", href: "https://rosafuentes.cl", disabled: false },
      { label: "Portal → portal.rosafuentes.cl", href: "https://portal.rosafuentes.cl", disabled: false },
    ],
  },
  {
    label: "Sentimiento y Tradición",
    url: "sentimiento-tradicion-portal.vercel.app",
    desc: "Segunda instancia de la misma plataforma multi-tenant, marca y datos propios, separados de Rosa Fuentes.",
    shot: "/work/sentimiento-tradicion.png",
    links: [
      {
        label: "Portal → sentimiento-tradicion-portal.vercel.app",
        href: "https://sentimiento-tradicion-portal.vercel.app",
        disabled: false,
      },
    ],
  },
  {
    label: "Arando Cuecas",
    url: "portal.arandocuecas.cl",
    desc: "Tercera instancia. Dominio propio en proceso de propagación.",
    shot: null,
    links: [{ label: "Portal → portal.arandocuecas.cl", href: "https://portal.arandocuecas.cl", disabled: true }],
  },
];

const PROCESS = [
  { num: "01", title: "Multi-tenant desde el diseño", desc: "Un código base sirve a cada organización con marca, dominio y datos aislados." },
  { num: "02", title: "Stack", desc: "Next.js, Prisma + Neon Postgres, Clerk para autenticación, S3 para archivos." },
  { num: "03", title: "Gestión real", desc: "Asistencia, cuotas, rifas, progresión (XP) e informes exportables — no demos, herramientas que se usan cada semana." },
  { num: "04", title: "Seguridad", desc: "Rate limiting, migraciones controladas, ningún cambio a producción sin confirmación explícita." },
];

export default function Home() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal:not(.hero .reveal)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="wrap">
          <a href="#top">
            <Image src="/logo-full.png" alt="santinho.dev" width={1815} height={268} className="brand-logo" priority />
          </a>
          <div className="links">
            <div className="nav-links-inner">
              <a href="#top">Inicio</a>
              <a href="#trabajo">Trabajo</a>
              <a href="#proceso">Proceso</a>
              <a href="#contacto">Contacto</a>
            </div>
            <a className="cta" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-inner">
          <span className="eyebrow reveal in">Santino — Full-Stack Developer</span>
          <Image
            src="/logo-full.png"
            alt="santinho.dev"
            width={1815}
            height={268}
            className="hero-logo reveal in reveal-delay-1"
            priority
          />
          <h1 className="reveal in reveal-delay-2">Construyo software que organizaciones reales usan.</h1>
          <p className="sub reveal in reveal-delay-3">
            Plataformas SaaS multi-tenant para agrupaciones folclóricas chilenas: asistencia, cuotas, gamificación y
            reportes, sobre Next.js, Prisma y Neon Postgres.
          </p>
          <div className="scroll-cue">
            <span className="scroll-line" />
            Scroll
          </div>
        </div>
      </header>

      <section id="trabajo">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Trabajo</span>
            <h2>Plataformas que agrupaciones usan cada semana.</h2>
            <p>
              Tres instancias de una misma plataforma multi-tenant, cada una con su propia marca, dominio y datos
              aislados. Sin demos: herramientas que directores y socios usan todas las semanas.
            </p>
          </div>

          <div className="stats reveal">
            <div className="stat">
              <b>03</b>
              <span>Organizaciones</span>
            </div>
            <div className="stat">
              <b>1</b>
              <span>Código base</span>
            </div>
            <div className="stat">
              <b>100%</b>
              <span>Multi-tenant</span>
            </div>
          </div>

          <div className="cards">
            {PROJECTS.map((p, i) => (
              <article className={`card reveal${i ? ` reveal-delay-${i}` : ""}`} key={p.label}>
                <div className="browser">
                  <div className="browser-bar">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="url">{p.url}</span>
                  </div>
                  {p.shot ? (
                    <Image src={p.shot} alt={p.label} width={1600} height={1000} className="browser-shot" />
                  ) : (
                    <div className="browser-empty">
                      <div className="propagating">
                        <span className="pulse-dot" />
                        Dominio en propagación
                      </div>
                      <span className="propagating-domain">{p.url}</span>
                    </div>
                  )}
                </div>
                <h3>{p.label}</h3>
                <p>{p.desc}</p>
                <div className="links">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={l.disabled ? "disabled" : undefined}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Proceso</span>
            <h2>De la idea al producto en producción.</h2>
          </div>

          <div className="process-list">
            {PROCESS.map((step) => (
              <div className="process-item reveal" key={step.num}>
                <span className="num">{step.num}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="wrap contact-inner">
          <h2 className="reveal">Hablemos.</h2>
          <p className="reveal reveal-delay-1">
            Si tu organización necesita una herramienta que la gente realmente use, escríbeme.
          </p>
          <a className="cta reveal reveal-delay-2" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub →
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="brand-block">
            <Image src="/logo-full.png" alt="santinho.dev" width={1815} height={268} className="brand-logo" />
            <p>Desarrollador full-stack construyendo SaaS multi-tenant para organizaciones reales.</p>
          </div>
          <div className="col">
            <h5>Elsewhere</h5>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="col">
            <h5>Trabajo</h5>
            <a href="https://rosafuentes.cl" target="_blank" rel="noopener noreferrer">
              Rosa Fuentes
            </a>
            <a href="https://portal.arandocuecas.cl" target="_blank" rel="noopener noreferrer">
              Arando Cuecas
            </a>
          </div>
        </div>
        <div className="wrap">
          <div className="legal">© 2026 Santino · Next.js · Vercel</div>
        </div>
      </footer>
    </>
  );
}
