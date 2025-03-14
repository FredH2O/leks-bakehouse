import Counter from "./Counter";

const data = [
  {
    title: "Occassions Served",
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
    <div className="border bg-white border-black border-b-2 flex justify-evenly h-[100px]">
      {data.map((info, index) => (
        <div className="text-center" key={index}>
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
