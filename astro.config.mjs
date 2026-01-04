import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sonomyo.cz/",

//  site: "https://antolikjan.github.io/",
//  base : "/sonomyo",
  integrations: [
    tailwind(),
    icon(),
    sitemap({
              filter: (page) => {
                // `page` is a full URL like "https://www.sonomyo.cz/en/about/"
                const { pathname } = new URL(page);

                // 1) Exclude 404 pages
                if (pathname === '/cs/404/' || pathname === '/en/404/' || pathname === '/404/') return false;

                // 2) Exclude tag pages (and the tag index)
                if (pathname.startsWith('/cs/blog/tags/') || pathname.startsWith('/en/blog/tags/')) return false;

                return true;
              },
            }),    partytown({
              config: {
                forward: ["dataLayer.push"],
              },
          }),
  ],
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: true, // option A: cs has no prefix, en does
    },
  },
});
