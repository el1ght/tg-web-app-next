import "./globals.css";
import Script from "next/script";
import {Inter} from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body
        className={inter.className}
      >
      <div className="flex flex-col p-1 h-full gap-y-1">
          <Header />
          {children}
      </div>

      <Sidebar />
      </body>
    </html>
  );
}
