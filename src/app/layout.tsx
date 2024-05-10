import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./anim.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abrar's Portfolio",
  description: "Abrar Shahriar's Works & Information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
