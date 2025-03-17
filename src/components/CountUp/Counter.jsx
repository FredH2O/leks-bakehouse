"use client";
import CountUp from "./CountUp";
import { motion, AnimatePresence } from "framer-motion";
import { use } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ title, start, finish, className }) => {
  const { inView, ref } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -55 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        exit="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {inView && (
          <>
            <p className="font-bold">{title}</p>
            <CountUp
              from={start}
              to={finish}
              separator=","
              direction="up"
              duration={1}
              className={`count-up-text ${className}`}
            />
          </>
        )}
      </motion.div>
      ;
    </AnimatePresence>
  );
};

export default Counter;
