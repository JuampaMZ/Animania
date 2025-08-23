"use client";
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const markVisibleIfInView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 15% margin near the bottom
      if (r.top < vh * 0.85 && r.bottom > 0) {
        el.classList.add("is-visible");
      }
    };

    // Ensure initial visibility check BEFORE applying reveal styles to avoid flash-to-blank
    els.forEach(el => markVisibleIfInView(el));

    if (!("IntersectionObserver" in window)) {
      els.forEach(el => {
        el.classList.add("reveal", "is-visible");
      });
      return;
    }

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });

    els.forEach(el => {
      el.classList.add("reveal");
      // If already in view after styles apply, mark again on next frame
      requestAnimationFrame(() => markVisibleIfInView(el));
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);
}
