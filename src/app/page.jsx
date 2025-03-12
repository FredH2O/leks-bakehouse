import AboutSection from "@/components/About/AboutSection";
import HeroSection from "@/components/Hero/HeroSection";
import Map from "@/components/Map/Map";
import OrderNowSection from "@/components/OrderNowSection/OrderNowSection";
import Review from "@/components/Reviews/Review";

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
      <Review />
    </div>
  );
}
