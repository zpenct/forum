"use client"

import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import StoreProvider from "@/components/StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid md:grid-cols-12 gap-2 bg-white`}
      >
        <StoreProvider>
          <div className="md:col-span-3 sticky">
            <Sidebar />
          </div>
          <div className="md:col-span-9">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
