"use client";
import { Button } from "@/components/ui/button";
import { generateUniqueId } from "@/lib/utils";
import { ApartmentI } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
  apartment: ApartmentI;
}
const ResidenceAmenities = ({ apartment }: Props) => {
  const { id } = useParams();

  return (
    <section className="w-full flex flex-col gap-5 p-6">
      <p className="text-sm text-black">{apartment.description}</p>
      <section className="flex flex-col gap-2 container__two">
        {apartment?.amenities?.map((item, i) => (
          <div className="flex items-center gap-3" key={`${item}+${i + 1}`}>
            <span className="size-2 rounded-full bg-primary" />
            <p className="text-black font-semibold text-base">{item}</p>
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
