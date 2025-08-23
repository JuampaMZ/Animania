"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMQ = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    const onHash = () => setOpen(false);
    document.addEventListener("keydown", onEsc);
    window.addEventListener("resize", onResize);
    mq.addEventListener("change", onMQ);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("keydown", onEsc);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onMQ);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  // Cerrar al cambiar de ruta (app router)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header" role="banner">
      <div className="site-header-inner">
        <div className="brand">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Animania"
              width={36}
              height={36}
              priority
            />
          </Link>
          <Link href="/" className="brand-title">
            <Image
              src="/animania-only-letters-logo.svg"
              alt="Animanía"
              height={22}
              width={100} // ajusta el ancho según tu SVG
              style={{ display: "block" }}
            />
          </Link>
        </div>

        <nav className="nav" aria-label="Navegación principal">
          <Link className="nav-link" href="/#tematicas">
            Temáticas
          </Link>
          <Link className="nav-link" href="/#como-reservar">
            Cómo Reservar
          </Link>
          <Link className="nav-link" href="/#contacto">
            Contacto
          </Link>
        </nav>

        <button
          className="hamburger"
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          title={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? (
            <X width={22} height={22} />
          ) : (
            <Menu width={22} height={22} />
          )}
        </button>
      </div>

      {/* Menú lateral derecho (renderiza sólo cuando está abierto) */}
      {open && (
        <div
          id="mobile-menu"
          className="side-menu side-menu-right"
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil"
        >
          <div className="side-menu-panel">
            <nav className="side-menu-list" aria-label="Navegación móvil">
              <Link
                className="side-menu-link"
                href="/#tematicas"
                onClick={() => setOpen(false)}
              >
                Temáticas
              </Link>
              <Link
                className="side-menu-link"
                href="/#como-reservar"
                onClick={() => setOpen(false)}
              >
                Cómo Reservar
              </Link>
              <Link
                className="side-menu-link"
                href="/#contacto"
                onClick={() => setOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
