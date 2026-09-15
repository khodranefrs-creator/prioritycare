import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Priority Care — أولوية العناية",
    short_name: "Priority Care",
    description:
      "استوديو حماية وعناية السيارات في الرياض — فيلم الحماية PPF، النانو سيراميك، العزل الحراري، والتلميع.",
    start_url: "/ar",
    display: "standalone",
    background_color: "#0e0f11",
    theme_color: "#0e0f11",
    lang: "ar-SA",
    dir: "rtl",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}