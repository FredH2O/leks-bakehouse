import Footer from "@/components/Footer/Footer";
import "./globals.css";
import MainHeader from "@/components/Header/Header";
import { Poppins, Pacifico, Modak } from "next/font/google";
import Particles from "@/components/Particles";

const modak = Modak({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-modak",
});

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
    <html
      lang="en"
      className={`${poppins.variable} ${pacifico.variable} ${modak.variable}`}
    >
      <body
        className={`relative font-poppins bg-gradient-to-br to-rose-200 from-pink-100 text-zinc-600 accent-rose-500 flex flex-col min-h-screen`}
      >
        {/* black shade 20 */}
        <div className="absolute bg-black opacity-20 -z-10 inset-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <MainHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
