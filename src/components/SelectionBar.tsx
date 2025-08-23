import Link from "next/link";

export default function SelectionBar({
  count,
  summary,
  whatsAppHref,
}: {
  count: number;
  summary: string;
  whatsAppHref: string;
}) {
  if (count === 0) return null;
  return (
    <div className="sticky-cta" data-reveal>
      <div className="sticky-cta-inner">
        <p className="muted"><strong>{count}</strong> temática{count>1?'s':''} seleccionada{count>1?'s':''} — {summary}</p>
        <Link href={whatsAppHref} target="_blank" className="btn btn-primary">Enviar selección por WhatsApp</Link>
      </div>
    </div>
  );
}
