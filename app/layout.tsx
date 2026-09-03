import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jurigeek.org"),
  title: {
    default: "Jurigeek — Justice, automated",
    template: "%s · Jurigeek",
  },
  description:
    "Jurigeek bridges access to justice through legal automation, technology law consultancy and tech law education for lawyers, organisations and everyday people across Africa.",
  keywords: [
    "legal automation",
    "technology law consultancy",
    "tech law education",
    "access to justice",
    "Jurigeek",
    "Uganda",
    "legal tech",
    "legal technology",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jurigeek.org",
    siteName: "Jurigeek",
    title: "Jurigeek — Justice, automated",
    description:
      "Bridging access to justice through legal automation, technology law consultancy and tech law education.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jurigeek — Bridging access to justice through legal automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurigeek — Justice, automated",
    description:
      "Bridging access to justice through legal automation, technology law consultancy and tech law education.",
    site: "@hakeemcounsel",
    creator: "@hakeemcounsel",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070b18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
