import React from "react";
import HomeHero from "./components/HomeHero";
import HomeStay from "./components/HomeStay";
import HomeFromHome from "./components/HomeFromHome";

const HomePage = () => {
  return (
    <main className="space-y-40" >
      <HomeHero />
      <HomeStay />
      <HomeFromHome />
    </main>
  );
};

export default HomePage;
