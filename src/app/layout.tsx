import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, WebFooter } from "./page";

const inter = Inter({ subsets: ["latin"], display: "block" });

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
      <body className={inter.className}>
        <Header />
        {children}
        <WebFooter />
      </body>
    </html>
  );
}
