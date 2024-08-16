import ReserveHome from "../home/components/ReserveHome";
import ResidenceHero from "./ResidenceHero";
import ResidenceHomes from "./ResidenceHomes";

const ResidencePage = () => {
  return (
    <main className="space-y-40">
      <ResidenceHero />
      <ResidenceHomes />
      <ReserveHome />
    </main>
  );
};

export default ResidencePage;
