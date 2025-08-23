"use client";
import Image from "next/image";
export default function Testimonials(){
  const people = [
    {name:"Laura P.", photo:"/people/p1.jpg", text:"La animación fue un éxito total, los niños no pararon de reír. ¡Gracias!"},
    {name:"Martín R.", photo:"/people/p2.jpg", text:"Excelente equipo, súper organizados y creativos. 100% recomendables."},
    {name:"Sofía G.", photo:"/people/p3.jpg", text:"Se adaptaron perfecto al espacio y a la edad de los chicos. La pasamos genial."}
  ];
  return (
    <section id="opiniones" className="section section--testi" style={{paddingBlock:"72px"}}>
      <header data-reveal>
        <h2 className="section-title" style={{marginBottom:"8px"}}>Lo que dicen las familias</h2>
        <p className="section-sub">Comentarios reales de quienes ya vivieron la experiencia.</p>
      </header>
      <div className="testi-grid">
        {people.map((p,i)=>(
          <figure className="testi-card" key={i} data-reveal>
            <div className="avatar">
              <Image src={p.photo} alt={p.name} width={64} height={64} />
            </div>
            <blockquote>{p.text}</blockquote>
            <figcaption>— {p.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
