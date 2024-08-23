import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../styles/styles.css";
import HeaderOne from "@/components/header/header-one";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haven Homes",
  description: "Haven homes website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <HeaderOne />
        {children}
        <Footer />
      </body>
    </html>
  );
}
