import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "ScaleForge",
  description: "Empower Your Business With Our Expert Scalability Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#home">About us</a>
              </li>
              <li>
                <a href="#about">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
