import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const plexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-sans-arabic",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${plexSansArabic.variable} ${inter.variable} h-full antialiased`}
    >
      {children}
    </html>
  );
}