import { Button } from "@/components/ui/button";

const BeachHouse = () => {
  return (
    <div className="container__two mx-auto flex flex-col justify-center items-center gap-4 py-10 p-6">
      <div className="flex-1 flex items-center flex-col">
        <div className="flex items-center gap-2">
          <span className="w-10 bg-primary rounded h-[2px]" />
          <p className="uppercase text-sm text-black font-bold">Beach House</p>
        </div>
        <div className="">
          <h2 className="text-black font-bold text-center text-3xl mt-2">
            A Haven for Relaxation
          </h2>
          <p className="text-base font-medium text-center text-black mt-5 leading-8 w-full max-w-[55rem]">
            Nestled among palm trees and endless stretches of golden sand with a
            breathtaking view of the Atlantic Ocean, Haven Homes is a sanctuary
            for relaxation—a stunning four-bedroom destination villa. Tucked
            away in a culturally rich beach haven, this modern residence exudes
            luxury and elegance, with interiors that showcase exquisite taste
            and cutting-edge amenities for discerning guests, including a pool.
            The villa&apos;s secluded beachfront location overlooking Ilashe
            Beach, combined with its suitability for yoga and indulgent
            relaxation, creates a retreat of unparalleled tranquility and
            well-being, perfectly embodying The Haven Homes lifestyle concept of
            ‘passionate serenity.’
          </p>
        </div>
      </div>
      <Button className="mt-4 w-fit px-10 font-medium text-base">Book Now</Button>
    </div>
  );
};

export default BeachHouse;
