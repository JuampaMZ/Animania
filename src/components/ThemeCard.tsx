"use client";
import { Theme } from "../lib/themes";

type Props = {
  theme: Theme;
  selected: boolean;
  onToggle: () => void;
  index?: number;
};

export default function ThemeCard({ theme, selected, onToggle, index = 0 }: Props) {
  const { Icon } = theme;
  const delays = ["","delay-1","delay-2","delay-3","delay-4","delay-5","delay-6"];
  const delayClass = delays[index % delays.length];
  return (
    <div className={"theme-card reveal " + delayClass} data-reveal>
      <div className={"theme-art " + theme.accent} />
      <div className="theme-body">
        <div className="theme-head">
          <span className="theme-icon"><Icon width={20} height={20} /></span>
          <h3 className="theme-title">{theme.name}</h3>
        </div>
        <p className="theme-desc">{theme.description}</p>
        <button
          onClick={onToggle}
          className={"btn-theme " + (selected ? "btn-theme-on" : "")}
          aria-pressed={selected}
        >
          {selected ? "Agregada ✓" : "Agregar a mi fiesta"}
        </button>
        <a className="btn-link" href={`/tematicas/${theme.slug}`}>Más info</a>
      </div>
    </div>
  );
}
