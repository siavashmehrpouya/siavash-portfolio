import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siavash Mehrpouya | Technical Project Manager",
  description:
    "Portfolio of Siavash Mehrpouya, PMP-certified Technical Project Manager specializing in software delivery, Agile execution, and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}