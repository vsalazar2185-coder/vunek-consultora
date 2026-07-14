import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { assets, brand, siteUrl } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const title = `${brand.name} | Estrategia, transformación digital y gestión organizacional`;
const description =
  `${brand.name} acompaña a instituciones, empresas y organizaciones en procesos de transformación digital, mejora de la gestión organizacional y desarrollo de soluciones aplicables.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${brand.name}`
  },
  description,
  keywords: [
    "consultoría",
    "estrategia",
    "transformación digital",
    "gestión organizacional",
    "inteligencia artificial",
    "mejora de procesos",
    "educación superior",
    "América Latina"
  ],
  authors: [{ name: brand.name }],
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: assets.icon,
    shortcut: assets.icon,
    apple: assets.icon
  },
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title,
    description,
    images: [{ url: assets.ogImage, width: 1200, height: 630, alt: `${brand.name} — ${brand.descriptor}` }],
    url: siteUrl,
    siteName: brand.name,
    locale: "es_LA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [assets.ogImage]
  }
};

export const viewport: Viewport = {
  themeColor: "#0E1D2F"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
