import AboutSection from "@/components/About/AboutSection";
import MainCounter from "@/components/CountUp/MainCounter";
import HeroSection from "@/components/Hero/HeroSection";
import LoyaltyCard from "@/components/LoyaltyCard/LoyaltyCard";
import Map from "@/components/Map/Map";
import OrderNowSection from "@/components/OrderNowSection/OrderNowSection";
import Review from "@/components/Reviews/Review";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <LoyaltyCard />
      <MainCounter />
      <OrderNowSection />
      <Map />
      <Review />
    </div>
  );
}
