import Image from "next/image";

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
          <div
            key={i + 1}
            className="w-full border border-lightBlack/50 rounded"
          >
            <Image
              src={item.image}
              alt={item.location}
              height={200}
              width={500}
              className="h-[200px] w-full rounded-t"
              sizes="100%"
            />
            <div className="w-full py-4 px-3">
              <h2 className="text-xl text-black font-semibold">{item?.name}</h2>

              <div className="flex flex-col gap-1 my-2">
                <span className="text-sm text-gray-500">
                  Bedrooms: {item?.bedrooms}
                </span>
                <span className="text-sm text-gray-500">
                  Bathrooms: {item?.bathrooms}
                </span>
                <span className="text-sm text-gray-500">
                  Kitchen: {item?.kitchen}
                </span>
              </div>

              <div className="mt-3 text-base text-black font-medium">
                {item?.location}
              </div>
            </div>
          </div>
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
