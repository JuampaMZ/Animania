export function buildWhatsAppLink(params: { themes: string[]; date?: string }): string {
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/[^0-9]/g, "");
  const { themes, date } = params;
  const items = themes.length ? themes.join(" + ") : "la animación de mi fiesta";
  const datePart = date ? ` el día ${date}` : "";
  const msg = `Hola Animanía, me gustaría consultar disponibilidad y presupuesto para ${items}${datePart}.`;
  const encoded = encodeURIComponent(msg);
  return number ? `https://wa.me/${number}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
}
