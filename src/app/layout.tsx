import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warmerdam Consulting - Websites, Webapps en AI-tools",
  description:
    "Ik bouw websites, webapps en AI-tools voor ondernemers die willen groeien zonder een duur development team. Next.js, Supabase en AI-integraties.",
  keywords: ["freelance developer", "Next.js", "webapps", "AI-tools", "websites bouwen", "MKB"],
  openGraph: {
    title: "Warmerdam Consulting",
    description: "Van idee naar werkende software. In dagen, niet maanden.",
    url: "https://warmerdamconsulting.nl",
    siteName: "Warmerdam Consulting",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
