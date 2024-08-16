import ReserveHome from "../../home/components/ReserveHome";
import ResidenceAmenities from "./ResidenceAmenities";
import ResidenceInfoHero from "./ResidenceInfoHero";

const ResidenceInfoPage = () => {
  return (
    <main className="space-y-40">
      <ResidenceInfoHero />
      <ResidenceAmenities />
      <ReserveHome />
    </main>
  );
};

export default ResidenceInfoPage;
