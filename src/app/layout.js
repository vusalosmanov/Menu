import { Geist, Geist_Mono } from "next/font/google";
import "../../style/globals.css";
import Header from "./components/Head/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Restoran Menyusu – Ləzzətli Yeməklər",
  description: "Ləzzətli yeməklər və içkilərlə dolu restoran menyusu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
