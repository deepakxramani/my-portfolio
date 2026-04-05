import type { Metadata } from "next";
import { Raleway, Great_Vibes } from "next/font/google";
import "@/styles/globals.scss";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepak Ramani - Portfolio",
  description:
    "Full Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Explore my projects and experience.",
  keywords: [
    "Deepak Ramani",
    "Web Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Deepak Ramani" }],
  icons: {
    icon: "/logo3.png",
    apple: "/logo3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
