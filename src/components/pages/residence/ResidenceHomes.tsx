import HousingCard from "@/components/cards/house-card";
import React from "react";
import { details } from "../home/components/HomeFromHome";
import { HomeModern } from "@/components/icons/icon";

const ResidenceHomes = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col p-6">
      <div className="container__two">
        <h2 className="capitalize text-lg font-semibold flex items-center gap-1">
          <span>
            <HomeModern className="text-primary" />
          </span>
          {details?.length} residence available
        </h2>
      </div>

      <div className="grid w-full  md:grid-cols-2 lg:grid-cols-3 gap-8 container__two mt-8">
        {details?.map((item, i) => (
          <HousingCard
            key={i + 1}
            bathrooms={item?.bathrooms}
            bedrooms={item?.bedrooms}
            name={item?.name}
            image={item?.image}
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

export default ResidenceHomes;
