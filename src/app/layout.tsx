import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google"

const quicksand = Quicksand ({
  subsets: ["latin"]
})

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
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
