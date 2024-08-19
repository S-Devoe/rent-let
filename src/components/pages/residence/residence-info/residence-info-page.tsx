"use client";
import { useParams } from "next/navigation";
import ReserveHome from "../../home/components/ReserveHome";
import ResidenceAmenities from "./ResidenceAmenities";
import ResidenceInfoHero from "./ResidenceInfoHero";
import { apartmentData } from "@/data/data";

const ResidenceInfoPage = () => {
  const { id } = useParams();
  // apartmentData
  const apartment = apartmentData.find((item) => item.id === id);


  if (!apartment) {
    return <div className="py-32 h-screen">Apartment not found</div>;
  }

  return (
    <main className="space-y-10 lg:space-y-40">
      <ResidenceInfoHero apartment={apartment} />
      <ResidenceAmenities />
      <ReserveHome />
    </main>
  );
};

export default ResidenceInfoPage;
