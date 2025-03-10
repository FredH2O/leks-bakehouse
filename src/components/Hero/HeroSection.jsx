"use client";
import CircularGallery from "@/components/Hero/CircularGallery";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bend = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 0;

  return (
    <div className="h-[800px] relative">
      <CircularGallery bend={bend} textColor="#ffffff" borderRadius={0.05} />
    </div>
  );
};

export default HeroSection;
