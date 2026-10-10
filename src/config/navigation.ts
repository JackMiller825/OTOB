export const navLinks = [
  { href: "#story", id: "story", label: "Story" },
  { href: "#token-info", id: "token-info", label: "Token info" },
  { href: "#how-to-buy", id: "how-to-buy", label: "How to buy" },
  { href: "#community", id: "community", label: "Community" },
  { href: "#faq", id: "faq", label: "FAQ" },
] as const;

export const sectionIds = ["hero", ...navLinks.map((link) => link.id)] as const;

export function isSectionId(value: string): value is (typeof sectionIds)[number] {
  return (sectionIds as readonly string[]).includes(value);
}
