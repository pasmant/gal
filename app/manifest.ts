import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "הגל הפיננסי — גל לייבוביץ׳",
    short_name: "הגל הפיננסי",
    description: "ייעוץ ביטוח, פנסיה ותכנון פיננסי",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F9FB",
    theme_color: "#0B1D3A",
    dir: "rtl",
    lang: "he",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
