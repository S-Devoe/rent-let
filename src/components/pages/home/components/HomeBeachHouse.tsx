import { ArrowRightIcon } from "@/components/icons/icon";
import Image from "next/image";
import Link from "next/link";

const HomeBeachHouse = () => {
  return (
    <section className="bg-gray-100 full">
      <div className="container__two mx-auto flex items-center gap-4 py-20">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2">
            <span className="w-10 bg-primary rounded h-[2px]" />
            <p className="uppercase text-sm font-bold">Beach House</p>
          </div>
          <div className="">
            <h2 className="text-black font-bold text-3xl mt-2">
              A Haven for Relaxation
            </h2>
            <p className="text-base font-medium text-black mt-5 leading-8">
              Name, is a remarkable four-bedroom luxury beach house in Lagos,
              nestled within a culturally rich enclave. <br /> As one of
              Nigeria&apos;s finest beach houses, this elegant and luxurious
              retreat boasts an exquisite interior design and state-of-the-art
              amenities, including indoor pools for discerning guests. <br />{" "}
              Enjoy beachside comfort with activities like sunbathing, massage
              sessions, yoga stretches, or picnics at our secluded beachfront
              area, which offers stunning views of the Ilashe beachfront and
              takes your breath away almost instantly.
            </p>
          </div>
          <Link
            href="/beach-house"
            className="text-primary text-base font-medium mt-10 flex items-center gap-1"
          >
            Explore More
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
        <div className="flex-1 w-full">
          <Image
            src="/home/home-beach.jpg"
            alt="Beach House"
            width={700}
            height={500}
            className="w-full h-[45rem] rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBeachHouse;
