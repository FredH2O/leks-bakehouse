import Counter from "./Counter";

const data = [
  {
    title: "Occassions",
    start: 0,
    finish: 82,
  },
  {
    title: "Happy Customer",
    start: 0,
    finish: 344,
  },
  {
    title: "Cakes Baked",
    start: 0,
    finish: 128,
  },
  {
    title: "Sylvanas Made",
    start: 0,
    finish: 530,
  },
];

const MainCounter = () => {
  return (
    <div className="border-y-4 grid justify-center place-items-center md:grid-cols-4 grid-cols-2 gap-3 p-6 bg-white border-black h-auto">
      {data.map((info, index) => (
        <div className="text-center p-1" key={index}>
          <Counter
            className="text-6xl"
            title={info.title}
            start={info.start}
            finish={info.finish}
          />
        </div>
      ))}
    </div>
  );
};

export default MainCounter;
