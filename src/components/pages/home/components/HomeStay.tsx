import Image from "next/image";

const HomeStay = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="container__two">
        <h2 className="subtitle text-center">
          Hello, where would you like your next stay to be?
        </h2>
        <p className="bold-paragraph text-center">
          Choose any of our Residence locations listed below.
        </p>
      </div>

      <div className="grid w-full grid-cols-3 gap-8 container__two mt-8">
        {arr?.map((item, i) => (
          <div key={i + 1} className="">
            <Image
              src={item.image}
              alt={item.location}
              height={200}
              width={500}
              className="h-[200px] w-full rounded-lg"
              sizes="100%"
            />
            <div className="mt-3 text-base text-black font-medium">
              {item?.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStay;

const arr = [
  {
    location: "Okoyi, Lagos",
    image: "/home/location.jpg",
  },
  {
    location: "Lagos Island, Lagos",
    image: "/home/location.jpg",
  },
  {
    location: "Lekki, Lagos",
    image: "/home/location.jpg",
  },
  {
    location: "Yaba, Lagos",
    image: "/home/location.jpg",
  },
];
