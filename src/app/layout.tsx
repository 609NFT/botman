"use-client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FlashlightEffect from "./components/FlashlightEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "the dork knight",
  description: "Botman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body className={inter.className}>
        {/*<AppBar></AppBar>*/}
        {children}
      </body>
    </html>
  );
}
