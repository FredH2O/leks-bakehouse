"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 50 },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="container m-auto grid lg:grid-cols-2 place-items-center items-center gap-1"
      >
        {/* About Image */}
        <div className="flex justify-center items-center">
          <Image
            className="rounded border-slate-300"
            src="/images/about-logo.png"
            alt="Lek's Bakehouse signature cake"
            width={600}
            height={300}
          />
        </div>

        {/* About Text */}
        <div className="flex flex-col text-center relative p-6">
          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <svg
              className="w-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFD6E8"
                d="M44.1,-75.5C56.7,-69.1,66.3,-56.4,71.7,-42.8C77.2,-29.2,78.5,-14.6,79.1,0.3C79.7,15.3,79.5,30.5,72.2,40.9C64.9,51.3,50.5,56.8,37.2,59.1C24,61.3,12,60.2,-1.1,62.2C-14.3,64.2,-28.6,69.2,-39.7,65.8C-50.8,62.3,-58.7,50.4,-67.8,38C-76.8,25.7,-86.9,12.8,-87.9,-0.6C-89,-14,-81,-28.1,-71.4,-39.5C-61.8,-50.9,-50.6,-59.6,-38.4,-66.2C-26.3,-72.8,-13.1,-77.4,1.3,-79.7C15.7,-81.9,31.5,-81.9,44.1,-75.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="h-[500px] flex flex-col justify-center items-center">
            <h2 className="xl:text-7xl md:text-6xl text-5xl font-modak text-slate-900 mb-6 leading-tight">
              Bringing Smiles, One Slice at a Time
            </h2>
            <p className="text-lg text-zinc-900 text-center p-1">
              Lek's Bakehouse - homemade Filipino cakes & desserts in the heart
              of Lucan! 🎂✨ Perfect for birthdays, weddings, or sweet cravings.
              Bringing joy, tradition, and incredible flavors to every bite!
              🍰💛
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
