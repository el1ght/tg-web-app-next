'use client'

import "./globals.css";
import Script from "next/script";
import {Inter} from "next/font/google";
// import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
          <title>Charton dev build</title>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body
        className={inter.className}
      >

          <Header>
              {children}
          </Header>
          <Sidebar />

      </body>
    </html>
  );
}
