import "./globals.css";
import ConditionalNavbar from "../components/layouts/ConditionalNavbar";
import { Footer } from "../components/layouts/Footer";
import { ConvexClientProvider } from "../providers/ConvexClientProvider";
import { cn } from "@/lib/utils";
import { tomatoGrotesk } from "@/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(tomatoGrotesk.variable)}>
      <body className={cn("antialiased !font-tomato-grotesk")}>
        <ConvexClientProvider>
          <ConditionalNavbar />
          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
