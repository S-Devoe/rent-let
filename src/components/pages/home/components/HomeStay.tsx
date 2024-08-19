"use client";
import { LocationIcon } from "@/components/icons/icon";
import Image from "next/image";
import { useRouter } from "next/navigation";


const HomeStay = () => {
  const router = useRouter();
  return (
    <section className="w-full flex justify-center items-center flex-col p-6">
      <div className="container__two">
        <h2 className="subtitle text-center">
          Hello, where would you like your next stay to be?
        </h2>
        <p className="bold-paragraph text-center mt-1">
          Choose any of our Residence locations listed below.
        </p>
      </div>

      <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-8 container__two mt-8">
        {arr?.map((item, i) => (
          <div
            key={i + 1}
            onClick={() => router.push("/residence")}
            className="cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.location}
              height={200}
              width={500}
              className="h-[200px] w-full rounded-lg"
              sizes="100%"
            />
            <div className="mt-3 text-base text-black font-medium flex items-center gap-1">
              <LocationIcon className="text-primary size-5" /> {item?.location}
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
    location: "Chicago, Illinos",
    image: "/images/haven-homes/chicago_illonis/image/pic2.jpg",
  },
  {
    location: "Key, West Florida",
    image:
      "/images/haven-homes/key_west_florida/silver_palm_inn_key_west/pic2.jpg",
  },
  {
    location: "Las Vegas, Florida",
    image:
      "/images/haven-homes/las_vegas_nevada/luxirious and private/pic9.jpg",
  },
];
