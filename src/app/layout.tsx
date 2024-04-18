import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventario",
  description: "Inventario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <section>
            <SideNav />
          </section>
          <section className="w-full h-screen">{children}</section>
        </main>
      </body>
    </html>
  );
}
