"use client";
import { Button } from "@/components/ui/button";
import { generateUniqueId } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

const ResidenceAmenities = () => {
  const { id } = useParams();
  
  return (
    <section className="w-full flex justify-center p-6">
      <section className="flex flex-col gap-2 container__two">
        {amenities?.map((item) => (
          <div className="flex items-center gap-3" key={item?.id}>
            <span className="size-2 rounded-full bg-primary" />
            <p className="text-black font-semibold text-base">{item.amenity}</p>
          </div>
        ))}
        <Button className="w-fit px-10 text-base rounded-lg mt-3" asChild>
          <Link href={`/book/${id}`}>Book Now</Link>
        </Button>
      </section>
    </section>
  );
};

export default ResidenceAmenities;

const amenities = [
  {
    id: generateUniqueId(),
    amenity: "Free wifi",
  },
  {
    id: generateUniqueId(),
    amenity: "Air Conditioning and Water Heater",
  },
  {
    id: generateUniqueId(),
    amenity: "Living Room Area.",
  },
  {
    id: generateUniqueId(),
    amenity: "TV and Entertainment",
  },
  {
    id: generateUniqueId(),
    amenity: "Kitchen",
  },
  {
    id: generateUniqueId(),
    amenity: "Free Parking",
  },
];
