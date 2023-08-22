import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import sfMono from "./fonts/SFMono/config";

import client from "../../tina/__generated__/client";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "ScaleForge",
  description: "Empower Your Business With Our Expert Scalability Solutions",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globals = await client.queries.global({ relativePath: "global.md" });

  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${sfMono.variable} bg-black text-white`}
      >
        <Navbar {...globals} />
        {children}
        <Footer {...globals} />
      </body>
    </html>
  );
}
