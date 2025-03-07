import ScrollVelocity from "./ScrollVelocity";

const OrderNowSection = () => {
  return (
    <section
      className="relative bg-pink-200 h-screen bg-center bg-repeat"
      style={{
        backgroundImage: "url(/images/transparent-img.png)",
        backgroundSize: "500px", // Ensures the image maintains its original size
        backgroundPosition: "center", // Ensures the image is centered in the section
      }}
    >
      <div className="absolute bg-black inset-0 opacity-50"></div>
      <div className="h-full flex justify-center items-center relative z-20 text-center">
        <div className="text-white space-y-20">
          <ScrollVelocity
            texts={["Order Now 🍰"]}
            velocity={50}
            className="custom-scroll-text text-shadow-black-lg font-modak text-8xl"
          />
          <p className="text-5xl text-shadow-black-lg font-modak">
            SWEET CAKES FOR EVERY OCCASION, OR JUST BECAUSE YOU DESERVE A LITTLE
            JOY!
          </p>
          <button className="bg-sky-400 border border-slate-400 tracking-widest w-[250px] hover:bg-sky-500 hover:-translate-y-1 transition-all ease-out duration-300 text-slate-900 hover:text-slate-100 px-6 py-3 rounded shadow-2xl">
            ORDER HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderNowSection;
