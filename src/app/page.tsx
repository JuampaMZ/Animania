"use client";
import { useMemo, useState } from "react";
import { THEMES } from "../lib/themes";
import ThemeGrid from "../components/ThemeGrid";
import WhatsAppFab from "../components/WhatsAppFab";
import { buildWhatsAppLink } from "../lib/whatsapp";
import Hero from "../components/Hero";
import HowTo from "../components/HowTo";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import SelectionBar from "../components/SelectionBar";
import Link from "next/link";
import { useReveal } from "../lib/useReveal";

export default function HomePage() {
  useReveal(); // activa IntersectionObserver para [data-reveal]

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  const [date, setDate] = useState<string>("");

  const selectedNames = useMemo(
    () => THEMES.filter((t) => selected.has(t.slug)).map((t) => t.name),
    [selected]
  );

  const toggle = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  const whatsAppHref = buildWhatsAppLink({ themes: selectedNames, date });

  return (
    <div>
      <Hero whatsAppHref={whatsAppHref} />

      <section
        id="tematicas"
        className="section section--tematicas"
        style={{ paddingBlock: "80px", marginTop: "min(16vh, 140px)" }}
      >
        <header data-reveal>
          <h2 className="section-title" style={{ marginBottom: "8px" }}>
            Temáticas (Animanías)
          </h2>
          <p className="section-sub">
            Elige una o varias opciones y arma tu combo ideal.
          </p>
        </header>
        <div className="themes-gap" data-reveal>
          <ThemeGrid selected={selected} toggle={toggle} />
        </div>

        <div className="select-bar reveal" data-reveal>
          <div style={{ flex: 1 }}>
            <p className="muted">
              Seleccionadas:{" "}
              {selectedNames.length ? selectedNames.join(", ") : "(ninguna)"}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <label htmlFor="fecha" style={{ fontSize: ".95rem" }}>
              Fecha
            </label>
            <input
              id="fecha"
              type="date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="form-field date-fancy"
            />
            <Link href={whatsAppHref} target="_blank" className="btn btn-dark">
              Enviar selección por WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <HowTo whatsAppHref={whatsAppHref} />
      <div className="section" style={{ paddingBlock: "40px" }}>
        <div className="hero-cta"></div>
      </div>
      <FAQ />
      <Testimonials />
      <Contact />
      <div className="sticky-cta">
        <SelectionBar
          count={selectedNames.length}
          summary={selectedNames.join(" + ")}
          whatsAppHref={whatsAppHref}
        />
        <WhatsAppFab themes={selectedNames} date={date} />
      </div>
    </div>
  );
}
