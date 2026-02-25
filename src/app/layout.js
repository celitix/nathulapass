import { Geist, Geist_Mono, Yeseva_One, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  variable: "--font-lato",
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Nathula Pass | Mountain Passes In India | Passes In Himalayas",
  description: "Know about the passes in himalayas and mountain passes in India. We bring to you the nathula pass and its attractions. This is your destination...",
  alternates: {
    canonical: "https://www.nathulapass.com/",
  },
  icons: {
    icon: [
      { url: '/Nathula-Pass-150x150.png', sizes: '32x32', type: 'image/png' },
      { url: '/Nathula-Pass-300x300.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/Nathula-Pass-300x300.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yesevaOne.variable} ${lato.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
