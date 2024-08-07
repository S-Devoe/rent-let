import Image from "next/image";
import { Button } from "../ui/button";
import { Bath, BedOutline, LocationIcon, ToolKitchen } from "../icons/icon";

interface Props {
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  kitchen: number;
  name: string;
  price: string;
}

const HousingCard = ({
  bathrooms,
  bedrooms,
  image,
  kitchen,
  location,
  name,
  price,
}: Props) => {
  return (
    <div className="w-full border border-lightBlack/50 rounded">
      <Image
        src={image}
        alt={location}
        height={200}
        width={500}
        className="h-[200px] w-full rounded-t"
        sizes="100%"
      />
      <div className="w-full py-4 px-3">
        <h2 className="text-xl text-black font-semibold">{name}</h2>

        <div className="flex flex-col gap-1 my-2 text-gray-500">
          <span className="text-sm font-medium flex items-center gap-1 ">
            <LocationIcon className="text-primary size-4" /> {location}
          </span>
          <span className="text-sm flex items-center gap-1 ">
            <BedOutline className="text-primary size-4" /> Bedrooms: {bedrooms}
          </span>
          <span className="text-sm flex items-center gap-1 ">
            <Bath className="text-primary size-4" /> Bathrooms: {bathrooms}
          </span>
          <span className="text-sm flex items-center gap-1 ">
            <ToolKitchen className="text-primary size-4" /> Kitchen: {kitchen}
          </span>
        </div>

        <h3 className="text-xl text-black font-semibold mt-2">{price}</h3>
        <div className="w-full flex items-center gap-3  mt-1">
          <Button variant="outline">View More Details</Button>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HousingCard;
