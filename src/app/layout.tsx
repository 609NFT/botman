import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppBar } from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yin Coin Sol",
  description: "Yin Coin Sol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {/*<AppBar></AppBar>*/}
        {children}
      </body>
    </html>
  );
}
