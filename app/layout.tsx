import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Codedoddle",
  description: "Codedoddle by angeldevildev",
  openGraph: {
    title: "Codedoddle",
    description: "Codedoddle by angeldevildev",
    url: "https://www.codedoddle.com",
    siteName: "Codedoddle" ,
    images: [
      {
        url: "https://www.codedoddle.com/api/og",
        width: 1200,
        height: 630,
        alt: "Are you ready to have a great website?"
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
