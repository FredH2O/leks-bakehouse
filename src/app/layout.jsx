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
  metadataBase: new URL("https://your-vercel-site-url.com"), //actual domain here
  title: "Lek's Bakehouse",
  description: "Freshly made cakes and treats.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Lek's Bakehouse - Freshly Made Desserts",
    description: "Delicious homemade cakes and treats.",
    url: "https://your-vercel-site-url.com", // Replace with your real website URL,
    siteName: "Lek's Bakehouse",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lek's Bakehouse - Delicious Treats",
      },
    ],
  },
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
