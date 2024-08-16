import HomeHero from "./components/HomeHero";
import HomeStay from "./components/HomeStay";
import HomeFromHome from "./components/HomeFromHome";
import HomeBeachHouse from "./components/HomeBeachHouse";
import ReserveHome from "./components/ReserveHome";

const HomePage = () => {
  return (
    <main className="space-y-20 lg:space-y-40">
      <HomeHero />
      <HomeStay />
      <HomeFromHome />
      <HomeBeachHouse />
      <ReserveHome />
    </main>
  );
};

export default HomePage;
