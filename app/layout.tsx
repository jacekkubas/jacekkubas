import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const font = localFont({
  src: "/fonts/DM-Sans.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jacek Kubas",
  description: "Web development by Jacek Kubas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#000" }}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M7Q6NJ7295"
      />
      <Script id="gtm" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-M7Q6NJ7295');
      `}
      </Script>
      <meta
        name="google-site-verification"
        content="EhsMBL5uUlFvoR3ZvledUX8mfQtDxYYYkxlpQCXBfHU"
      />
      <body className={`${font.className} antialiased`} id="home">
        {children}
      </body>
    </html>
  );
}
