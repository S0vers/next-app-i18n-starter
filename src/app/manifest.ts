import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js i18n Template - Multilingual Starter",
    short_name: "Next.js i18n",
    description: "Professional Next.js 15 internationalization starter template with TypeScript, Tailwind CSS, and 5 languages support",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["developer-tools", "productivity", "utilities"],
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png", 
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512", 
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Home",
        short_name: "Home",
        description: "Navigate to homepage",
        url: "/",
        icons: [{ src: "/favicon-32x32.png", sizes: "32x32" }],
      },
      {
        name: "Features",
        short_name: "Features", 
        description: "View template features",
        url: "/features",
        icons: [{ src: "/favicon-32x32.png", sizes: "32x32" }],
      },
    ],
    screenshots: [
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}