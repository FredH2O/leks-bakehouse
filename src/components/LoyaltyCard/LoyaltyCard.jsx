"use client";
import Image from "next/image";
import BounceCards from "./BounceCards";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  "/images/sylvanas4.jpg",
  "/images/sylvanas2.jpg",
  "/images/sylvanas3.jpg",
  "/images/sylvanas1.jpg",
  "/images/sylvanas5.jpg",
];

const transformStyles = [
  "rotate(5deg) translate(-250px)",
  "rotate(0deg) translate(-120px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(120px)",
  "rotate(-5deg) translate(250px)",
];

const LoyaltyCard = () => {
  const { ref, inView } = useInView();

  return (
    <AnimatePresence mode="wait">
      <motion.section
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        transition={{ duration: 0.5, ease: easeInOut }}
        viewport={{ amount: 0.3 }}
        className="relative py-10 bg-pink-200 rounded-se-[50px] rounded-ss-[50px]"
      >
        <div className="container m-auto grid xl:grid-cols-2 justify-center place-items-center py-10">
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-slate-50 text-shadow-black text-6xl font-modak text-center">
              Silvanas Loyalty Card
            </h2>
            <div className="p-1">
              <Image
                className="rounded-lg border-2 border-slate-800"
                src="/images/loyalty-card.jpg"
                width={500}
                height={500}
                alt="Loyalty Card"
                priority
              />
            </div>
          </div>

          <div className="py-6 px-5 m-1">
            <p className="lg:text-3xl text-lg text-slate-700 text-center">
              Purchase{" "}
              <span className="font-semibold">9 Boxes of Silvanas</span> and
              enjoy a{" "}
              <span className="text-red-600 italic">
                10th box absolutely free
              </span>{" "}
              as our special treat!
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className="flex md:h-[300px] h-[250px] justify-center items-center overflow-hidden"
        >
          {inView && (
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(0.6, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default LoyaltyCard;
