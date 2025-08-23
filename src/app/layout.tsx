import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import WhatsAppFab from "../components/WhatsAppFab";
import Footer from "../components/Footer";
import { siteName, siteUrl } from "../lib/site";

export const metadata: Metadata = { icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Cumpleaños temáticos únicos`,
    template: `%s | ${siteName}`,
  },
  description: "Cumpleaños infantiles temáticos, llenos de magia y creatividad. Animania: diversión profesional, ideas originales y organización fácil.",
  keywords: ["cumpleaños infantiles", "animación de fiestas", "temáticas", "Montevideo", "Uruguay", "Animania"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} – Cumpleaños temáticos únicos`,
    description: "Llevamos la diversión a tu fiesta.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Cumpleaños temáticos únicos`,
    description: "Llevamos la diversión a tu fiesta.",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    description: metadata.description,
    areaServed: "UY",
    sameAs: ["https://www.instagram.com/", "https://www.facebook.com/"],
  };

  return (
    <html lang="es">
      <body>
        <Link href="/#contenido" className="skip-to-content">Saltar al contenido principal</Link>
        <Header />
        {/* Background divertido siguiendo la paleta del logo */}
        <div className="site-bg" aria-hidden="true" />
        <main id="contenido" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppFab />
        {/* SEO-friendly: content always in DOM; animations only affect opacity/transform */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <noscript>
          {/* Ensure sections are visible with JS disabled for SEO & accessibility */}
          <style dangerouslySetInnerHTML={{__html: ".reveal{opacity:1 !important; transform:none !important}"}}/>
        </noscript>
      </body>
    </html>
  );
}
