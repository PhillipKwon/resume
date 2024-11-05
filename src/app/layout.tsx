import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KwonKyoungMin Portfolio",
  description: "KwonKyoungMin Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <span>Hello</span>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
