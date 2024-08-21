import HousingCard from "@/components/cards/house-card";
import { HomeModern } from "@/components/icons/icon";
import { apartmentData } from "@/data/data";

const ResidenceHomes = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col p-6">
      <div className="container__two">
        <h2 className="capitalize text-lg font-semibold flex items-center gap-1">
          <span>
            <HomeModern className="text-primary" />
          </span>
          {apartmentData?.length} residence available
        </h2>
      </div>

      <div className="grid w-full  md:grid-cols-2 gap-4 container__two mt-8">
        {apartmentData?.map((item, i) => (
          <HousingCard
            key={i + 1}
            bedrooms={item?.bedrooms}
            name={item?.name}
            image={item?.images[0]}
            location={item?.location}
            price={item?.price}
            id={item?.id}
            maxGuests={item?.maxGuests}
          />
        ))}
      </div>
    </section>
  );
};

export default ResidenceHomes;
