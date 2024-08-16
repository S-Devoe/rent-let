import ReserveHome from "../home/components/ReserveHome";
import BeachHero from "./BeachHero";
import BeachHouse from "./BeachHouse";

const BeachPage = () => {
  return (
    <main className="space-y-10">
      <BeachHero />
      <BeachHouse />
      <ReserveHome />
    </main>
  );
};

export default BeachPage;
