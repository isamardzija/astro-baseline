// src/content/site.ts
export type SiteNavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "osigurano.hr",
  tagline: "Osiguranje imovine, bez komplikacija",
  description:
    "Jasno objašnjavamo što je pokriveno, što nije i zašto. Odmah saznajte cijenu osiguranja imovine kroz korisne kalkulatore.",
  url: import.meta.env.SITE_URL ?? "https://example.com",
  locale: "hr",
  author: {
    name: "Ivan Samardžija",
    email: "ivan@osigurano.hr",
    url: "https://osigurano.hr",
  },
  nav: [
    { label: "Početna", href: "/" },
    { label: "O nama", href: "/o-nama" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  seo: {
    ogImage: "/images/og/og-default.jpg",
    robots: "index,follow",
    themeColor: "#fbfbf9",
  },
};
