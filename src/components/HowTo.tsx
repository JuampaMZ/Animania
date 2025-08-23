import Link from "next/link";

export default function HowTo({ whatsAppHref }: { whatsAppHref: string }) {
  return (
    <section id="como-reservar" className="section section--howto" style={{paddingBlock:"72px"}}>
      <header data-reveal>
        <h2 className="section-title" style={{marginBottom:"8px"}}>Cómo reservar</h2>
        <p className="section-sub">Organizar tu fiesta es súper fácil.</p>
      </header>
      <ol className="grid-steps">
        <li className="how-card reveal delay-1" data-reveal>
          <p style={{fontWeight:800}}>Elige tus temáticas favoritas</p>
          <p className="muted">Selecciona 1 o más opciones de la lista.</p>
        </li>
        <li className="how-card reveal delay-2" data-reveal>
          <p style={{fontWeight:800}}>Envía tu selección por WhatsApp</p>
          <p className="muted">Haz clic en “Enviar selección por WhatsApp”.</p>
        </li>
        <li className="how-card reveal delay-3" data-reveal>
          <p style={{fontWeight:800}}>Consulta precio y disponibilidad</p>
          <p className="muted">Te responderemos con la mejor propuesta.</p>
        </li>
      </ol>
      <div style={{marginTop:"24px"}} data-reveal>
        <Link href="/#tematicas" className="btn btn-primary">Ver Temáticas</Link>
      </div>
    </section>
  );
}
