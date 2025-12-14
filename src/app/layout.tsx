import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from '@/widgets/Header/Header'

const mulish = Mulish({
  variable: "--font-mulish",
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanna PIZZA",
  description: "I just wanna pizza PESTO!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${mulish.variable}`}>
      <Header/>
      <div className="container">{children}</div>
      </body>
    </html>
  );
}
