import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarDemo } from "@/components/navbar/navbar";
import Image from "next/image";
import MTTlogo from "@/assets/logos/MTT-Logo.svg";
import Footer from "@/components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MIT-WPU Tech Team",
  description: "Official Robotics Team of MIT-WPU",
  icons: {
    icon: "/MTT-Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/MTT-logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen relative bg-black dark:bg-white bg-dot-white/[0.2] dark:bg-dot-white/[0.2] overflow-hidden">
          <div className="absolute top-4 left-10 z-40">
            <Image src={MTTlogo} alt="MTT-Logo" width={75} height={75} />
          </div>
          <NavbarDemo />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}