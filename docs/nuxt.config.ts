import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export default defineNuxtConfig({
  extends: ["docus"],
  modules: ["@nuxtjs/plausible"],
  css: ["~/assets/main.css"],
  app: {
    head: {
      link: [
        // Basic favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },

        // SVG favicon
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },

        // Standard sizes
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },

        // Android devices
        { rel: "icon", type: "image/png", sizes: "36x36", href: "/meta/android/icon-36x36.png" },
        { rel: "icon", type: "image/png", sizes: "48x48", href: "/meta/android/icon-48x48.png" },
        { rel: "icon", type: "image/png", sizes: "72x72", href: "/meta/android/icon-72x72.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/meta/android/icon-96x96.png" },
        { rel: "icon", type: "image/png", sizes: "144x144", href: "/meta/android/icon-144x144.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/meta/android/icon-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/meta/android/icon-512x512.png" },

        // Apple devices
        { rel: "apple-touch-icon", sizes: "57x57", href: "/meta/apple/icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/meta/apple/icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/meta/apple/icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/meta/apple/icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/meta/apple/icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/meta/apple/icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/meta/apple/icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/meta/apple/icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/meta/apple/icon-180x180.png" },

        // Web App Manifest
        { rel: "manifest", href: "/site.webmanifest" }
      ],
      meta: [
        // Apple meta
        { name: "apple-mobile-web-app-title", content: "Jade Garden" },

        // Microsoft meta
        { name: "msapplication-TileColor", content: "#edf2ed" },
        { name: "msapplication-TileImage", content: "/meta/windows/icon-144x144.png" },

        // Theme colors for mobile browsers
        { name: "theme-color", content: "#edf2ed" }
      ]
    }
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ["bash", "css", "json", "lua", "md", "mdc", "ts", "tsx"],
          theme: {
            default: "everforest-light"
          }
        }
      }
    }
  },
  llms: {
    domain: "https://jade-garden.org",
    title: "Jade Garden",
    description: "Guides and Tools for Headless Design Systems.",
    full: {
      title: "Jade Garden",
      description: "Guides and Tools for Headless Design Systems."
    }
  },
  routeRules: {
    ...readFileSync(resolve(__dirname, "_redirects"), "utf-8")
      .split("\n")
      .reduce(
        (acc, line) => {
          const [from, to] = line.split("=") as [string, string];
          return Object.assign(acc, { [from]: { redirect: to } });
        },
        {} as Record<string, { redirect: string }>
      )
  },
  site: {
    name: "Jade Garden"
  },
  uiPro: {
    license: "oss"
  }
});
