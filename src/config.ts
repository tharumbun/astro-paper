import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https:/tharum.com/",
  author: "tharum",
  desc: "musings from cambodia",
  title: "Tharum",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 8,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tharum/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/tharumbun",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:tharum@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tharum",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/85578555659",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/tharum",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/tharumbun",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
];
