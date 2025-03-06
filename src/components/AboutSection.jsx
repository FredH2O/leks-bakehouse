import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="border my-10">
      <div className="container m-auto grid grid-cols-2 items-center place-items-center">
        {/* image  */}
        <div className="p-10 border">
          <Image
            className="rounded"
            src="/images/about-image.jpg"
            width={500}
            height={500}
          />
        </div>

        {/* about */}
        <div className="text-center mb-8 border relative">
          <div className="absolute inset-0 -z-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFD6E8"
                d="M44.1,-75.5C56.7,-69.1,66.3,-56.4,71.7,-42.8C77.2,-29.2,78.5,-14.6,79.1,0.3C79.7,15.3,79.5,30.5,72.2,40.9C64.9,51.3,50.5,56.8,37.2,59.1C24,61.3,12,60.2,-1.1,62.2C-14.3,64.2,-28.6,69.2,-39.7,65.8C-50.8,62.3,-58.7,50.4,-67.8,38C-76.8,25.7,-86.9,12.8,-87.9,-0.6C-89,-14,-81,-28.1,-71.4,-39.5C-61.8,-50.9,-50.6,-59.6,-38.4,-66.2C-26.3,-72.8,-13.1,-77.4,1.3,-79.7C15.7,-81.9,31.5,-81.9,44.1,-75.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <h2 className="text-9xl font-modak text-slate-900 mb-4">
            bringing smiles, one slice at a time
          </h2>

          <p className="text-lg text-gray-600">
            At Lek's Bakehouse, we specialize in homemade cakes and desserts
            that bring a touch of Filipino flavor to Dublin. Based in Lucan
            Village, we pride ourselves on creating delightful treats that are
            perfect for any occasion—whether it's a birthday, wedding, or just a
            sweet craving. Our goal is to share the love and tradition of
            Filipino baking with the community, offering cakes that not only
            taste incredible but also bring joy to your special moments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
