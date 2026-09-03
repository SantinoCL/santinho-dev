"use client";

import { useEffect, useRef } from "react";
import { PredictiveArcCanvas } from "@designcodeio/threeui";

const GITHUB_URL = "https://github.com/SantinoCL";

const SECTIONS = ["hero", "trabajo", "proceso", "contacto"];
const SECTION_LABELS = ["Inicio", "Trabajo", "Proceso", "Contacto"];

const CHAPTERS = [
  { num: "01", label: "Rosa Fuentes", sub: "Sitio + portal SaaS", href: "#trabajo" },
  { num: "02", label: "Sentimiento y Tradición", sub: "Portal de gestión", href: "#trabajo" },
  { num: "03", label: "Arando Cuecas", sub: "Nueva instancia", href: "#trabajo" },
  { num: "04", label: "Contacto", sub: "Hablemos", href: "#contacto" },
];

const PROJECTS = [
  {
    tone: "#1a1710",
    label: "Rosa Fuentes",
    jp: "01 / 03",
    desc: "Sitio público y portal de gestión: asistencia, cuotas, rifas, progresión (XP) e informes exportables.",
    links: [
      { label: "Sitio →", href: "https://rosafuentes.cl" },
      { label: "Portal →", href: "https://portal.rosafuentes.cl" },
    ],
  },
  {
    tone: "#101a17",
    label: "Sentimiento y Tradición",
    jp: "02 / 03",
    desc: "Segunda instancia de la misma plataforma multi-tenant, marca y datos propios, separados de Rosa Fuentes.",
    links: [{ label: "Portal →", href: "https://sentimiento-tradicion-portal.vercel.app" }],
  },
  {
    tone: "#171018",
    label: "Arando Cuecas",
    jp: "03 / 03",
    desc: "Tercera instancia. Dominio propio en proceso de propagación.",
    links: [{ label: "Portal →", href: "https://portal.arandocuecas.cl" }],
  },
];

const PROCESS = [
  { num: "01", title: "Multi-tenant desde el diseño", desc: "Un código base sirve a cada organización con marca, dominio y datos aislados." },
  { num: "02", title: "Stack", desc: "Next.js, Prisma + Neon Postgres, Clerk para autenticación, S3 para archivos." },
  { num: "03", title: "Gestión real", desc: "Asistencia, cuotas, rifas, progresión (XP) e informes exportables — no demos, herramientas que se usan cada semana." },
  { num: "04", title: "Seguridad", desc: "Rate limiting, migraciones controladas, ningún cambio a producción sin confirmación explícita." },
];

function splitWords(text: string) {
  return text.split(" ").map((w, i) => (
    <span className="word-mask" key={i} aria-hidden="true">
      <span className="word" style={{ ["--word-delay" as string]: `${i * 72}ms` }}>
        {w}
      </span>
      {i < text.split(" ").length - 1 ? " " : ""}
    </span>
  ));
}

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      navRef.current?.classList.toggle("stuck", y > 40);
      if (!navRef.current?.classList.contains("menu-open")) {
        navRef.current?.classList.toggle("hide", y > lastY + 4 && y > window.innerHeight * 0.8);
      }
      lastY = y;

      const rail = document.querySelectorAll<HTMLButtonElement>("[data-rail]");
      let active = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) active = i;
      });
      rail.forEach((b, i) => b.classList.toggle("on", i === active));
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
    document.querySelectorAll("[data-rv], .word-reveal").forEach((el) => io.observe(el));

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      mx += (tx - mx) * 0.18;
      my += (ty - my) * 0.18;
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${mx}px,${my}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    document.querySelectorAll<HTMLElement>("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () => cursorRef.current?.classList.add("act"));
      el.addEventListener("mouseleave", () => cursorRef.current?.classList.remove("act"));
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div id="bg" aria-hidden="true">
        <PredictiveArcCanvas mode="dark" speed={0.7} brightness={0.85} />
      </div>
      <div id="vignette" aria-hidden="true" />
      <div id="grain" aria-hidden="true" />
      <div className="cur-dot" ref={cursorRef} />

      <header className="nav" ref={navRef}>
        <a className="brand" href="#top" data-cursor>
          <span className="brand-mark">S</span>
          <span className="brand-tx">
            <b>SANTINO</b>
            <i>FULL-STACK DEV</i>
          </span>
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#trabajo" data-cursor>Trabajo</a>
          <a className="nav-link" href="#proceso" data-cursor>Proceso</a>
          <a className="nav-link" href="#contacto" data-cursor>Contacto</a>
        </nav>
        <a className="nav-cta" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" data-cursor>
          GitHub
        </a>
      </header>

      <div className="page" id="top">
        <section className="hero" id="hero">
          <div className="hero-top">
            <div className="eyebrow" data-rv="fade">
              <span className="dot" />
              Chapter 00 — Desarrollador Full-Stack
            </div>
            <h1 className="display h-hero word-reveal" aria-label="Construyo software que organizaciones reales usan.">
              {splitWords("Construyo software que organizaciones reales usan.")}
            </h1>
            <p className="hero-sub body" data-rv="up">
              Plataformas SaaS multi-tenant para agrupaciones folclóricas chilenas: asistencia,
              cuotas, gamificación y reportes, sobre Next.js, Prisma y Neon Postgres.
            </p>
          </div>

          <div className="hero-spacer" />

          <div className="hero-foot">
            <div className="chapters">
              {CHAPTERS.map((c) => (
                <a className="chip" key={c.num} href={c.href} data-rv="up" data-cursor>
                  <span className="num">{c.num}</span>
                  <span className="tx">
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
          <div className="gate-grid">
            <h2 className="display h-sec word-reveal" aria-label="Plataformas que agrupaciones usan cada semana.">
              {splitWords("Plataformas que agrupaciones usan cada semana.")}
            </h2>
            <div className="gate-copy">
              <p className="lead" data-rv="up">
                Tres instancias de una misma plataforma multi-tenant, cada una con su propia
                marca, dominio y datos aislados. Sin demos: herramientas que directores y
                socios usan todas las semanas.
              </p>
              <div className="gate-stats" data-rv="up">
                <div><b>03</b><span>Organizaciones</span></div>
                <div><b>1</b><span>Código base</span></div>
                <div><b>100%</b><span>Multi-tenant</span></div>
              </div>
            </div>
          </div>

          <div className="cards" style={{ marginTop: "clamp(48px, 8vh, 96px)" }}>
            {PROJECTS.map((p) => (
              <article className="card" key={p.label} data-rv="up" data-cursor>
                <div className="card-fr" style={{ ["--tone" as string]: p.tone }}>
                  <div className="card-lab">
                    <b>{p.label}</b>
                    <span className="body" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      {p.jp}
                    </span>
                  </div>
                </div>
                <p className="card-desc">{p.desc}</p>
                <div className="card-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
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
          <h2 className="display h-sec word-reveal" aria-label="De la idea al producto en producción." style={{ marginBottom: 32 }}>
            {splitWords("De la idea al producto en producción.")}
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

        <section className="sec fin" id="contacto">
          <div className="eyebrow" data-rv="fade">Chapter 03 — Contacto</div>
          <h2 className="display word-reveal" aria-label="Hablemos." data-rv="fade">
            {splitWords("Hablemos.")}
          </h2>
          <p className="body-lg" data-rv="up">
            Si tu organización necesita una herramienta que la gente realmente use, escríbeme.
          </p>
          <a className="cta" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" data-rv="fade" data-cursor>
            <i />
            <span>GitHub</span>
          </a>
        </section>

        <footer className="foot">
          <div className="foot-grid">
            <div className="foot-brand">
              <span className="brand">
                <span className="brand-mark">S</span>
                <span className="brand-tx"><b>SANTINO</b></span>
              </span>
              <p>Desarrollador full-stack construyendo SaaS multi-tenant para organizaciones reales.</p>
            </div>
            <div>
              <h4>Elsewhere</h4>
              <ul>
                <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4>Trabajo</h4>
              <ul>
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

      <div className="rail">
        {SECTIONS.map((id, i) => (
          <button
            key={id}
            data-rail
            title={SECTION_LABELS[i]}
            aria-label={SECTION_LABELS[i]}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          >
            <i />
          </button>
        ))}
      </div>
    </>
  );
}
