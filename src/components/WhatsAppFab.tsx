"use client";
import Link from "next/link";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Props = { themes?: string[]; date?: string };
export default function WhatsAppFab({ themes = [], date }: Props) {
  const [bottom, setBottom] = useState(16);
  useEffect(() => {
    const footer = document.querySelector(".site-footer") as HTMLElement | null;
    const onScroll = () => {
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const overlap = vh - rect.top;
      setBottom(overlap > 0 ? Math.min(160, overlap + 16) : 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  const href = buildWhatsAppLink ? buildWhatsAppLink({ themes, date }) : "https://wa.me/";
  return (
    <Link href={href} target="_blank" aria-label="Chatear por WhatsApp" className="fab" style={{bottom}}>
      <img src="/uy.png" width={18} height={12} alt="Uruguay" style={{borderRadius:2}} />
      <MessageCircle width={18} height={18} />
      <span>WhatsApp</span>
    </Link>
  );
}

