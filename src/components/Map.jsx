"use client";

import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/Location"), { ssr: false });

const Map = () => {
  return (
    <section className="h-screen flex">
      <div className="container m-auto">
        <Location />
      </div>
    </section>
  );
};
export default Map;
