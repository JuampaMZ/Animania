import ThemeCard from "./ThemeCard";
import { THEMES } from "../lib/themes";

export default function ThemeGrid({
  selected,
  toggle,
}: {
  selected: Set<string>;
  toggle: (slug: string) => void;
}) {
  return (
    <div className="grid-themes">
      {THEMES.map((t, i) => (
        <ThemeCard key={t.slug} theme={t} selected={selected.has(t.slug)} onToggle={() => toggle(t.slug)} index={i} />
      ))}
    </div>
  );
}
