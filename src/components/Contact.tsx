export default function Contact() {
  return (
    <section id="contacto" className="section section--contacto" style={{paddingBlock:"72px"}}>
      <header data-reveal>
        <h2 className="section-title" style={{marginBottom:"8px"}}>Contacto</h2>
        <p className="section-sub">Escribinos y te asesoramos.</p>
      </header>
      <div className="grid-contact">
        <form className="how-card reveal delay-1" data-reveal>
          <div style={{display:"grid",gap:"12px"}}>
            <div>
              <label className="form-label" htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" className="form-field" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="form-field" placeholder="tu@mail.com" />
            </div>
            <div>
              <label className="form-label" htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} className="form-field" placeholder="Cuéntanos qué necesitas" />
            </div>
            <button type="submit" className="btn btn-dark">Enviar</button>
            <p className="help">(Formulario decorativo por ahora — usa WhatsApp para respuesta más rápida)</p>
          </div>
        </form>
        <div className="how-card reveal delay-2" data-reveal>
          <p style={{margin:"0 0 8px"}}><strong>WhatsApp:</strong> Usa el botón flotante o el CTA.</p>
          <p style={{margin:"0 0 8px"}}><strong>Email:</strong> hola@animania.uy</p>
          <p style={{margin:"0 0 8px"}}><strong>Dirección:</strong> (si corresponde)</p>
          <div style={{display:"flex",alignItems:"center",gap:"16px",marginTop:"16px"}}>
            <a href="https://www.instagram.com/" target="_blank" style={{textDecoration:"underline"}}>Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" style={{textDecoration:"underline"}}>Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
