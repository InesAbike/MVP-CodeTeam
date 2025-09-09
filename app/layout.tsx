import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";
import { ErrorDisplay } from "./components/ui/ErrorDisplay";
import { ToastContainer } from "./components/ui/ToastContainer";
import { ConvexClientProvider } from "../providers/ConvexClientProvider";
import { ErrorProvider } from "../providers/ErrorProvider";
import { NotificationProvider } from "../providers/NotificationProvider";

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
        <NotificationProvider>
          <ErrorProvider>
            <ConvexClientProvider>
              <NavBar />
              {children}
              <Footer />
              <ErrorDisplay />
              <ToastContainer />
            </ConvexClientProvider>
          </ErrorProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
