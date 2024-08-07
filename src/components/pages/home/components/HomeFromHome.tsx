import HousingCard from "@/components/cards/house-card";

const HomeFromHome = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="container__two">
        <p className="bold-paragraph text-center !text-black !font-semibold">
          Residence
        </p>
        <h2 className="subtitle text-center">
          Choose any of our Residence locations listed below.
        </h2>
      </div>

      <div className="grid w-full grid-cols-3 gap-8 container__two mt-8">
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
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFromHome;

const details = Array(4).fill({
  name: "Residence",
  location: "Lagos, Nigeria",
  bedrooms: 3,
  bathrooms: 2,
  kitchen: 1,
  price: "From ₦ 500,000",
  image: "/home/location.jpg",
});
