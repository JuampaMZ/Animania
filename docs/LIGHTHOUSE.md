# Guía de verificación con Lighthouse
1. Ejecutar el proyecto (`npm run dev` / `npm run build && npm run start`).
2. Abrir Chrome DevTools → Lighthouse.
3. Auditar Performance, Accesibilidad, Best Practices y SEO.
4. Revisar:
   - Contraste de colores y estados `:focus-visible`.
   - Tiempos de carga y tamaño de bundles.
   - Metadatos (title, description, og:*).
   - robots.txt y sitemap.xml generados.
