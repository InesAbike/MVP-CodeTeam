import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "./components/layouts/ConditionalNavbar";
import { Footer } from "./components/layouts/Footer";
import { ConvexClientProvider } from "../providers/ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <ConvexClientProvider>
        <ConditionalNavbar />
          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
      </html>
  );
}

