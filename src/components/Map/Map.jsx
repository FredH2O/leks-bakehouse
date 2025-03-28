"use client";
import React from "react";
import OpenLayersMap from "./Location";

const Map = () => {
  return (
    <section className="h-full flex items-center justify-center py-10 px-3 my-5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center place-items-center">
        <div className="xl:w-[500px] lg:h-[500px] w-80 h-80 border border-slate-600 cursor-grab active:cursor-grabbing">
          <OpenLayersMap />
        </div>
        <div className="space-y-5 text-center p-2">
          <h3 className="lg:text-7xl text-5xl text-shadow-black text-slate-50 font-bold mb-2">
            Base in the Heart of Lucan Village
          </h3>
          <p className="text-gray-700 italic text-sm px-5">
            Located in the heart of Lucan Village, our space is easily
            accessible and surrounded by charming cafes, shops, and parks.
            Whether you're visiting for business or leisure, you'll find a
            welcoming atmosphere with plenty of local attractions to explore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
