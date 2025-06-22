import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M Jaffer ",
  description:
    "Hi! My name is Muhammad Jaffer. I am a Full/Mern Stack Developer, and I am very passionate and dedicated to my work. With 2 years experience as a Full/Mern Stack Developer, I have acquired the skills and knowledge necessary to successfully compelete a full stack web application. I enjoy every step of the development process, from discussion and collaboration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Use this for your site */}
          <ThemeSwitch />
          <Sidebar />
          {children}
          {/* Temporary for Banner */}
          {/* <FolioProBanner />
          <div className="temp-layout">
            <ThemeSwitch />
            <Sidebar />
            {children}
          </div> */}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
