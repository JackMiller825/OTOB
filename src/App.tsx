import { useState } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { useActiveSection } from "./hooks/useActiveSection";
import { CommunitySection } from "./sections/CommunitySection";
import { HeroSection } from "./sections/HeroSection";
import { HowToBuySection } from "./sections/HowToBuySection";
import { StorySection } from "./sections/StorySection";
import { TokenSection } from "./sections/TokenSection";

export function App() {
  const activeId = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SiteHeader activeId={activeId} menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      <div inert={menuOpen ? true : undefined}>
        <main>
          <HeroSection />
          <StorySection />
          <TokenSection />
          <HowToBuySection />
          <CommunitySection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
