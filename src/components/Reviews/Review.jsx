"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/data/reviews.json");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews]);

  if (reviews.length === 0) return null;

  return (
    <>
      <h2 className="font-modak text-white text-shadow-black text-4xl text-center">
        Customer Reviews
      </h2>
      <section className="container m-auto text-center flex flex-col justify-evenly items-center h-[300px] p-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              stiffness: 400,
            }}
            className="text-left max-w-lg space-y-1"
          >
            <p className="italic text-xl bg-slate-100 rounded-ss-xl rounded-se-xl rounded-ee-xl p-3">
              "{reviews[index].review}"
            </p>
            <p className="font-bold text-lg">-{reviews[index].name}</p>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Review;
