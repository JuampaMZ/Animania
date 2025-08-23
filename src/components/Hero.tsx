import Link from "next/link";
import Image from "next/image";

export default function Hero({ whatsAppHref }: { whatsAppHref: string }) {
  return (
    <section className="hero">
      <div className="section hero-inner">
        <div className="intro" data-reveal>
                    <h1 className="hero-title">¡Llevamos la diversión a tu fiesta!</h1>
          <p className="hero-sub">Somos una empresa de animación para cumpleaños infantiles. Ofrecemos animaciones temáticas únicas, llenas de magia y creatividad.</p>
          <div className="hero-cta">
            <Link href="/#tematicas" className="btn btn-primary">Descubre nuestras temáticas</Link>
            <Link href={whatsAppHref} target="_blank" className="btn btn-outline">Consultar por WhatsApp</Link>
          </div>
        </div>
        

    <div className="hero-photo-bg intro" data-reveal style={{backgroundImage: 'url(/hero.webp)'}} aria-label="Foto de niños jugando con paracaídas de colores"></div>
    

      </div>
    </section>
  );
}
