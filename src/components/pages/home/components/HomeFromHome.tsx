import HousingCard from "@/components/cards/house-card";
import { apartmentData } from "@/data/data";

const HomeFromHome = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col p-6">
      <div className="container__two">
        <p className="bold-paragraph text-center !text-black !font-semibold">
          Residence
        </p>
        <h2 className="subtitle text-center">
          Choose any of our Residence locations listed below.
        </h2>
      </div>

      <div className="grid w-full lg:grid-cols-2 gap-4 container__two mt-8">
        {apartmentData?.map((item, i) => (
          <HousingCard
            key={i + 1}
            bathrooms={item?.bathrooms}
            bedrooms={item?.bedrooms}
            name={item?.name}
            image={item?.images[0]}
            kitchen={item?.kitchen}
            location={item?.location}
            price={item?.price}
            id={item?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFromHome;
