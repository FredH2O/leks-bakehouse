import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Map from "@/components/Map";
import OrderNowSection from "@/components/OrderNowSection";

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <HeroSection />
      {/* About */}
      <AboutSection />
      {/* Order Now */}
      <OrderNowSection />

      <Map />
    </div>
  );
}
