import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Studio Dentistico Borgomanero | Il Tuo Sorriso, La Nostra Passione",
  description:
    "Studio dentistico a Borgomanero. Cure dentali per tutta la famiglia: igiene, estetica, ortodonzia, implantologia e pedodonzia. Prenota la tua visita oggi.",
  keywords: "dentista borgomanero, studio dentistico, odontoiatra, igiene dentale, ortodonzia, implantologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
