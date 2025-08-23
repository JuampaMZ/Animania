"use client";
export default function FAQ(){
  return (
    <section id="faq" className="section section--faq" style={{paddingBlock:"72px"}}>
      <header data-reveal>
        <h2 className="section-title" style={{marginBottom:"8px"}}>Preguntas frecuentes</h2>
        <p className="section-sub">Todo lo que te ayuda a decidir sin vueltas.</p>
      </header>
      <div className="faq-list">
        <details className="faq-item" data-reveal>
          <summary>¿Con cuánto tiempo debo reservar mi animación?</summary>
          <div className="faq-body">Lo ideal es reservar con 3–4 semanas de anticipación para asegurar disponibilidad. En temporada alta (septiembre–diciembre) recomendamos 6 semanas. Igual, consultanos: a veces tenemos huecos libres.</div>
        </details>
        <details className="faq-item" data-reveal>
          <summary>¿La animación se adapta a la edad y cantidad de niños?</summary>
          <div className="faq-body">Sí. Ajustamos juegos, duración y dinámicas según edades (desde 4 años) y cantidad de invitados. También podemos dividir en subgrupos para que todos participen.</div>
        </details>
        <details className="faq-item" data-reveal>
          <summary>¿Qué espacio necesito?</summary>
          <div className="faq-body">Con 20–25 m² es suficiente para la mayoría de propuestas. Si es al aire libre, recomendamos un área plana y sombreada. Llevamos materiales y protegemos el piso si hace falta.</div>
        </details>
        <details className="faq-item" data-reveal>
          <summary>¿Cuánto dura la animación?</summary>
          <div className="faq-body">Entre 60 y 90 minutos según la temática y edades. Podemos coordinar un descanso para la torta y las fotos.</div>
        </details>
        <details className="faq-item" data-reveal>
          <summary>¿Qué pasa si llueve?</summary>
          <div className="faq-body">Tenemos alternativas indoor y juegos que se adaptan a espacios reducidos. Si el clima complica, reprogramamos según disponibilidad.</div>
        </details>
      </div>
    </section>
  );
}
