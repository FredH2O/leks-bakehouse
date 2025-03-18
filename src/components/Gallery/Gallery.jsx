"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/gallery.json");
        setGallery(response.data);
      } catch {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {gallery.map((product) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ amount: 0.3 }}
            exit="hidden"
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow justify-center">
              <div className="flex flex-col flex-grow py-1">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                {/* <span className="text-lg font-bold text-gray-900">
                {product.price}
              </span> */}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
