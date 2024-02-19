import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
/*import { AppBar } from "./components/nav";*/

const inter = Inter({ subsets: ["latin"] });
const TRACKING_ID = "G-DEWXHEKR9D";

export const metadata: Metadata = {
  title: "the dork knight",
  description: "Botman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
