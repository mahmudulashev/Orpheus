/**
 * All copy and asset references for the page, kept in one place so the
 * components stay presentational.
 */

export const site = {
  name: "Orpheus",
  title: "Orpheus — Product & Graphic Designer",
  description:
    "Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Works", href: "#works" },
  { label: "Contribution", href: "#contribution" },
  { label: "Community", href: "#community" },
  { label: "Get in Touch", href: "#connect" },
];

export const hero = {
  eyebrow: "Yet the story of",
  title: "Orpheus",
  body: "Product & Graphic Designer, With Experience In Delivering End-To-End UX/UI Design For Software Products.",
  primary: { label: "Free Stuff", href: "#contribution" },
  secondary: { label: "Works", href: "#works" },
} as const;

export type Work = {
  id: string;
  title: string;
  tag: string;
  image: string;
  href: string;
};

/** The Figma carousel holds six cards; the three renders repeat to fill it. */
export const works: Work[] = [
  {
    id: "relics-1",
    title: "Relics Of A Mortal Past 1",
    tag: "NFT",
    image: "/images/work-1.jpg",
    href: "#works",
  },
  {
    id: "relics-2",
    title: "Relics Of A Mortal Past 2",
    tag: "NFT",
    image: "/images/work-2.jpg",
    href: "#works",
  },
  {
    id: "relics-3",
    title: "Relics Of A Mortal Past 3",
    tag: "NFT",
    image: "/images/work-3.jpg",
    href: "#works",
  },
  {
    id: "relics-4",
    title: "Relics Of A Mortal Past 4",
    tag: "NFT",
    image: "/images/work-1.jpg",
    href: "#works",
  },
  {
    id: "relics-5",
    title: "Relics Of A Mortal Past 5",
    tag: "NFT",
    image: "/images/work-2.jpg",
    href: "#works",
  },
  {
    id: "relics-6",
    title: "Relics Of A Mortal Past 6",
    tag: "NFT",
    image: "/images/work-3.jpg",
    href: "#works",
  },
];

export type SubtitleToken = { text: string; strong?: boolean };

export type BannerContent = {
  id: string;
  title: string;
  /** One entry per rendered line — the Figma banners break at fixed points. */
  subtitle: SubtitleToken[][];
  /** Per-banner letter-spacing overrides, as set on the Figma instances. */
  tracking: { title: string; subtitle: string };
  cta: { label: string; href: string };
  imageDark: string;
  imageLight: string;
  align: "media-left" | "media-right";
};

export const banners: BannerContent[] = [
  {
    id: "statue-pack",
    title: "3D Greek Statue Pack",
    subtitle: [
      [{ text: "Over " }, { text: "200", strong: true }, { text: " Greek style" }],
      [{ text: "Sculpture" }],
    ],
    tracking: { title: "0.126em", subtitle: "0.359em" },
    cta: { label: "Download", href: "#contribution" },
    imageDark: "/images/banner-statue-dark.jpg",
    imageLight: "/images/banner-statue-light.jpg",
    align: "media-left",
  },
  {
    id: "statue-avatars",
    title: "Greek Statue Avatars",
    subtitle: [
      [{ text: "+500 Greek style" }],
      [{ text: "User avatars", strong: true }],
    ],
    tracking: { title: "0.081em", subtitle: "0.523em" },
    cta: { label: "Download", href: "#community" },
    imageDark: "/images/banner-avatars-dark.jpg",
    imageLight: "/images/banner-avatars-light.jpg",
    align: "media-right",
  },
];

export type Social = {
  id: "linkedin" | "dribbble" | "instagram" | "medium" | "mail";
  label: string;
  href: string;
};

export const socials: Social[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com" },
  { id: "dribbble", label: "Dribbble", href: "https://dribbble.com" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com" },
  { id: "medium", label: "Medium", href: "https://medium.com" },
  { id: "mail", label: "Email", href: "mailto:hello@orpheus.design" },
];

export const connect = {
  title: "Let's Connect",
  body: "Get in touch for opportunities or just to say hi! 👋",
} as const;
