import { SolidLocation } from "@/components/icons/icon";
import Image from "next/image";

interface Props {
  apartment: {
    id: string;
    name: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    kitchen: number;
    price: string;
    images: string[];
  };
}

const ResidenceInfoHero = ({ apartment }: Props) => {
  return (
    <section
      className={`h-[80vh] lg:h-screen flex justify-center w-full relative`}
    >
      <div className="w-full z-[1] h-screen bg-black/20 absolute" />
      <Image
        src={apartment.images[0]}
        alt="residence"
        width={500}
        height={500}
        className="z-0 absolute h-screen w-full"
      />
      <div className="home-header-container flex flex-col justify-center gap-1 z-[4]">
        <p className="text-white text-sm flex items-center gap-2">
          <SolidLocation className="text-primary" />
          {apartment.location}
        </p>
        <h1 className="hero-header-title">{apartment.name}</h1>
        <p className="text-white text-base font-semibold flex items-center gap-2">
          A perfect fusion of functionality and style.
        </p>
      </div>
    </section>
  );
};

export default ResidenceInfoHero;
