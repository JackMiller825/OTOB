import { useEffect, useState } from "react";
import { isSectionId, sectionIds } from "../config/navigation";

export function useActiveSection() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!isSectionId(id)) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    };

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (isSectionId(id)) setActiveId(id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top) setActiveId(top.target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("hashchange", applyHash);
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("load", scrollToHash);
    applyHash();
    scrollToHash();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("load", scrollToHash);
    };
  }, []);

  return activeId;
}
