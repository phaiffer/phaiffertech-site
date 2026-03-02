export const site = {
  brand: {
    name: "Phaiffer Tech",
    slogan: "SOFTWARE. DATA. SYNTHESIS.",
    tagline: "Architecture • Engineering • Intelligence",
  },
  navigation: [
    { key: "home", path: "" },
    { key: "engineering", path: "/engineering" },
    { key: "services", path: "/services" },
    { key: "products", path: "/products" },
    { key: "caseStudies", path: "/case-studies" },
    { key: "contact", path: "/contact" },
  ] as const,
};

export type NavItem = (typeof site.navigation)[number];
export type NavItemKey = NavItem["key"];
