import Footer from "@/components/Footer";
import "./globals.css";
import MainHeader from "@/components/Header";
import { Poppins, Pacifico } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata = {
  title: "Lek's Bakehouse",
  description: "Freshly made cakes and treats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${pacifico.variable}`}>
      <body
        className={`bg-rose-200 text-zinc-600 accent-rose-500 flex flex-col min-h-screen`}
      >
        <MainHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
