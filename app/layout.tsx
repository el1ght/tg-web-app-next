import "./globals.css";
import Script from "next/script";
import {Inter} from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
