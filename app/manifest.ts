import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jurigeek",
    short_name: "Jurigeek",
    description:
      "Bridging access to justice through legal automation, technology law consultancy and tech law education.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0716",
    theme_color: "#0b0716",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "192x192", type: "image/png" },
    ],
  };
}
