import ScrollVelocity from "./ScrollVelocity";

const OrderNowSection = () => {
  return (
    <section
      className="relative bg-pink-200 h-screen bg-center bg-repeat"
      style={{
        backgroundImage: "url(/images/transparent-img.png)",
        backgroundSize: "500px",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bg-black inset-0 opacity-50"></div>
      <div className="h-full flex justify-center items-center relative z-20 text-center">
        <div className="text-white flex flex-col justify-center items-center space-y-10">
          <div className="relative overflow-hidden md:max-w-full max-w-md">
            <ScrollVelocity
              texts={["Order Now 🎂"]}
              velocity={50}
              className="custom-scroll-text text-shadow-black-lg font-modak lg:text-7xl md:text-6xl text-3xl w-auto"
            />
          </div>
          <div className="max-w-md">
            <p className="lg:text-5xl text-xl p-1 text-shadow-black-lg">
              SWEET CAKES FOR EVERY OCCASION, OR JUST BECAUSE YOU DESERVE A
              LITTLE JOY!
            </p>
          </div>

          <button
            onClick={console.log("button click for order")}
            className="bg-sky-400 border border-slate-400 tracking-widest w-[250px] hover:bg-sky-500 hover:-translate-y-1 transition-all ease-out duration-300 text-slate-900 hover:text-slate-100 px-6 py-3 rounded shadow-2xl"
          >
            ORDER HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderNowSection;
