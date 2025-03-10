import AboutSection from "@/components/About/AboutSection";
import HeroSection from "@/components/Hero/HeroSection";
import Map from "@/components/Map/Map";
import OrderNowSection from "@/components/OrderNowSection/OrderNowSection";

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
