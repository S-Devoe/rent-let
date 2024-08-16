import { SolidLocation } from "@/components/icons/icon";

const ResidenceInfoHero = () => {
  return (
    <section className="home-header-hero flex justify-center">
      <div className="home-header-container flex flex-col justify-center gap-1">
        <p className="text-white text-sm flex items-center gap-2">
          <SolidLocation className="text-primary" />
          Ikoyi, Lagos
        </p>
        <h1 className="hero-header-title">RESIDENCE</h1>
        <p className="text-white text-base font-semibold flex items-center gap-2">
          A perfect fusion of functionality and style.
        </p>
      </div>
      
    </section>
  );
};

export default ResidenceInfoHero;
