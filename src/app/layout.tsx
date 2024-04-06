import type { Metadata } from "next";
import { Inter, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import { Header, WebFooter } from "./page";
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({ subsets: ["latin"], display: "block" });
const poppins = Poppins({ subsets: ['latin'], display: 'block', weight: ['100', '200', '300', '600', '800'] })

export const metadata: Metadata = {
  title: "LunchBox - Meeting place for restaurant enthusiasts",
  description: "Meeting place for restaurant enthusiasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Analytics />
        <WebFooter />
      </body>
    </html>
  );
}
