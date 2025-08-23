import {
  type LucideIcon,
  PartyPopper,
  Sun,
  FlaskConical,
  Sparkles,
  Paintbrush,
  Utensils,
  Ticket,
  Leaf,
  Music,
  Timer,
  Waves,
  Highlighter,
  Trophy,
  Wand2,
} from "lucide-react";

export type Theme = {
  id: string;
  slug: string;
  name: string;
  description: string;
  Icon: LucideIcon;
  accent: string; // css class for gradient
};

export const THEMES: Theme[] = [
  { id: "basic", slug: "basic-mania", name: "Basic-manía", description: "La opción clásica para cumpleaños divertidos y sencillos.", Icon: PartyPopper, accent: "accent-lime-yellow" },
  { id: "summer", slug: "summer-mania", name: "Summer-manía", description: "Juegos de agua, globos y diversión veraniega.", Icon: Sun, accent: "accent-yellow-lime" },
  { id: "science", slug: "science-mania", name: "Science-manía", description: "Experimentos locos y aprendizaje entretenido.", Icon: FlaskConical, accent: "accent-emerald-lime" },
  { id: "beauty", slug: "beauty-mania", name: "Beauty-manía", description: "Spa, maquillaje artístico y glamour infantil.", Icon: Sparkles, accent: "accent-fuchsia-pink" },
  { id: "art", slug: "art-mania", name: "Art-manía", description: "Pintura, manualidades y creatividad sin límites.", Icon: Paintbrush, accent: "accent-cyan-lime" },
  { id: "cooking", slug: "cooking-mania", name: "Cooking-manía", description: "Mini chefs preparando recetas fáciles y divertidas.", Icon: Utensils, accent: "accent-orange-amber" },
  { id: "kermesse", slug: "kermesse-mania", name: "Kermesse-manía", description: "Juegos de feria y premios para todos.", Icon: Ticket, accent: "accent-amber-lime" },
  { id: "garden", slug: "garden-mania", name: "Garden-manía", description: "Actividades al aire libre y naturaleza.", Icon: Leaf, accent: "accent-green-emerald" },
  { id: "zumba", slug: "zumba-mania", name: "Zumba-manía", description: "Música, baile y energía pura.", Icon: Music, accent: "accent-fuchsia-violet" },
  { id: "minuto", slug: "minuto-mania", name: "Minuto-manía", description: "Juegos de un minuto llenos de adrenalina.", Icon: Timer, accent: "accent-sky-cyan" },
  { id: "aquakermesse", slug: "aquakermesse-mania", name: "Aquakermesse-manía", description: "Kermesse con juegos acuáticos.", Icon: Waves, accent: "accent-teal-sky" },
  { id: "fluo", slug: "fluo-mania", name: "Fluo-manía", description: "Fiesta con luces fluorescentes y brillos neón.", Icon: Highlighter, accent: "accent-lime-fuchsia" },
  { id: "futbol", slug: "futbol-mania", name: "Futbol-manía", description: "Partidos, desafíos y diversión futbolera.", Icon: Trophy, accent: "accent-emerald-lime" },
  { id: "magic", slug: "magic-mania", name: "Magic-manía", description: "Espectáculos de magia e ilusión.", Icon: Wand2, accent: "accent-purple-fuchsia" },
];
