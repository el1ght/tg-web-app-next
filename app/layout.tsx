import "./globals.css";
import Script from "next/script";
import {Inter} from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Content from "@/components/Content"

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
      <div className="flex flex-col p-1 h-full gap-y-1 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,255,255)_0%,rgba(204,204,204)_100%)]">
          <Header />
          <Content>
              {children}
          </Content>
      </div>

      <Sidebar />
      </body>
    </html>
  );
}
