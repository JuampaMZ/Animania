
import type { Metadata } from "next";
import Link from "next/link";
import { THEMES } from "../../../lib/themes";
import { siteName } from "../../../lib/site";

export async function generateStaticParams() {
  return THEMES.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const theme = THEMES.find(t => t.slug === params.slug);
  if (!theme) return { title: "Temática no encontrada" };
  const title = `${theme.name} | ${siteName}`;
  const description = theme.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    alternates: {
      canonical: `/tematicas/${params.slug}`,
    },
  };
}

export default function ThemeDetail({ params }: { params: { slug: string } }) {
  const theme = THEMES.find(t => t.slug === params.slug);
  if (!theme) return <main className="section"><h1>Temática no encontrada</h1></main>;
  const { name, description } = theme;
  return (
    <div className="section" style={{paddingTop:"2rem", paddingBottom:"3rem"}}>
      <nav aria-label="breadcrumb" style={{marginBottom:"1rem"}}>
        <Link href="/" className="muted">Inicio</Link> <span aria-hidden="true">›</span> <span>Temáticas</span> <span aria-hidden="true">›</span> <strong>{name}</strong>
      </nav>
      <header style={{marginBottom:"1rem"}}>
        <h1 style={{display:"flex",alignItems:"center",gap:"10px"}}><theme.Icon width={24} height={24} /> {name}</h1>
              </header>

      <article>
        <p style={{fontSize:"1.05rem"}}>{description}</p>
        <div role="group" aria-label="Galería de ejemplo" style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"16px", marginTop:"16px"}}>
          <div className="placeholder-img" aria-label="Insertar imagen aqui">Insertar imagen aqui</div>
          <div className="placeholder-img" aria-label="Insertar imagen aqui">Insertar imagen aqui</div>
          <div className="placeholder-img" aria-label="Insertar imagen aqui">Insertar imagen aqui</div>
        </div>

        
        <section style={{marginTop:"24px"}}>
          <h2>Descripción</h2>
          <p>{description}</p>
          <p>Incluye dinámicas pensadas para fomentar la cooperación, el movimiento y la creatividad. Ajustamos duración y dificultad a la edad del grupo, y podemos personalizar música y materiales según la temática.</p>
        </section>

        <section style={{marginTop:"24px"}}>
          <h2>¿Qué incluye?</h2>
          <ul>
            <li>Actividades y juegos acordes a la temática.</li>
            <li>Materiales y sorpresas.</li>
            <li>Equipo de animación profesional.</li>
          </ul>
        </section>

        <p style={{marginTop:"24px"}}>
          <Link href="/#tematicas" className="btn btn-outline">Ver todas las temáticas</Link>
        </p>
      </article>
    </div>
  );
}
