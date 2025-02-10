import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Landrup Dans",
  description: "Landrup danse skole",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
