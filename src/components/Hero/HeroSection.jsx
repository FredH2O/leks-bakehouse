"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-evenly min-h-screen px-6 lg:px-20 bg-gradient-to-br from-pink-100 to-rose-200">
      {/* Left Side - Text */}
      <motion.div
        className="max-w-2xl text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold text-rose-700 sm:text-7xl">
          Sweet & Buttery <span className="text-pink-500">Indulgence</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Experience the rich, buttery crunch of our handcrafted{" "}
          <span className="font-semibold text-rose-600">Silvanas </span>
          and the delicate layers of{" "}
          <span className="font-semibold text-pink-600">Sans Rival</span>, made
          with love and the finest ingredients.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-rose-500 text-white rounded-lg font-semibold shadow-lg hover:bg-rose-600 transition">
            Order Now
          </button>
          <button className="px-6 py-3 border border-rose-500 text-rose-700 rounded-lg font-semibold shadow-lg hover:bg-rose-100 transition">
            View Cakes
          </button>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <Image
          src="/images/owner.jpg"
          width={500}
          height={500}
          alt="Owner"
          className="rounded-xl shadow-lg"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
