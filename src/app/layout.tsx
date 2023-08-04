import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";

import client from "../../tina/__generated__/client";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const sfMono = localFont({
  src: [
    {
      path: "./fonts/SFMono/SFMonoBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SFMono/SFMonoHeavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/SFMono/SFMonoLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SFMono/SFMonoMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SFMono/SFMonoRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFMono/SFMonoSemibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-mono",
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
