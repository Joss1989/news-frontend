import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "News",
  description: "Følg med i de seneste nyheder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
