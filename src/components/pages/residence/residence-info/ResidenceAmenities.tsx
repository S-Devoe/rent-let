import { Button } from "@/components/ui/button";
import { generateUniqueId } from "@/lib/utils";
import React from "react";

const ResidenceAmenities = () => {
  return (
    <section className="w-full flex justify-center">
      <section className="flex flex-col gap-2 container__two">
        {amenities?.map((item) => (
          <div className="flex items-center gap-3" key={item?.id}>
            <span className="size-2 rounded-full bg-primary" />
            <p className="text-black font-semibold text-base">{item.amenity}</p>
          </div>
        ))}
        <Button className="w-fit text-base rounded-lg mt-3">Book Now</Button>
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
