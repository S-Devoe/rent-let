import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { Bath, BedOutline, LocationIcon, ToolKitchen, UsersGroup } from "../icons/icon";
import Link from "next/link";

interface Props {
  image: string | StaticImageData;
  location: string;
  bedrooms: number;
  maxGuests: number;
  name: string;
  price: string;
  id: string | number;
}

const HousingCard = ({
  maxGuests,
  bedrooms,
  image,
  location,
  name,
  price,
  id,
}: Props) => {
  return (
    <div className="w-full p-3 border border-lightBlack/50 rounded">
      <div className="flex gap-2">
        <Image
          src={image}
          alt={location}
          height={200}
          width={500}
          className="h-[120px] lg:h-[200px] w-full rounded lg:shrink"
          sizes="100%"
        />
        <div className="w-full px-2">
          <h2 className="text-base lg:text-xl text-black font-semibold">
            {name}
          </h2>

          <div className="flex flex-col gap-1 my-2 text-gray-500">
            <span className="text-sm font-medium flex items-center gap-1 ">
              <LocationIcon className="text-primary size-4" /> {location}
            </span>
            <span className="text-sm flex items-center gap-1 ">
              <BedOutline className="text-primary size-4" /> Bedrooms:{" "}
              {bedrooms}
            </span>
            <span className="text-sm flex items-center gap-1 ">
              <UsersGroup className="text-primary size-4" /> Guests: {maxGuests}
            </span>
          </div>

          <h3 className="text-xl text-black font-semibold mt-2 hidden lg:block">
            {price}
          </h3>
          <div className="w-full lg:flex items-center gap-3  mt-1 hidden">
            <Button variant="outline" asChild>
              <Link href={`/residence/${id}`}>View More Details </Link>
            </Button>
            <Button asChild>
              <Link href={`/book/${id}`}>Book Now </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className=" lg:hidden">
        <h3 className="text-base text-black font-semibold lg:hidden">
          {price}
        </h3>
        <div className="w-full flex items-center gap-3  mt-1">
          <Button variant="outline" asChild>
            <Link href={`/residence/${id}`}>View More Details </Link>
          </Button>
          <Button asChild>
            <Link href={`/book/${id}`}>Book Now </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HousingCard;
