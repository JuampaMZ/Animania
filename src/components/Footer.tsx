import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>© {new Date().getFullYear()} Animania. Todos los derechos reservados.</p>
        <div style={{display:"flex",gap:"16px"}}>
          <Link href="/#contacto">Contacto</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
