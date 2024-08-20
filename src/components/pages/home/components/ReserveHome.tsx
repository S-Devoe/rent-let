"use client";
import Input from "@/components/forms/input/input";
import Textarea from "@/components/forms/input/textarea";
import { HeadsetIcon, LocationIcon, Mail02Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { FormEvent, useRef } from "react";

const ReserveHome = () => {
  return (
    <section className="w-full flex justify-center items-center p-6">
      <section className="container__two flex flex-col-reverse lg:flex-row gap-10">
        <div className="home-reserve flex-1 flex items-center justify-center rounded">
          <div className="bg-white w-full py-10 md:px-14 z-5 flex flex-col gap-3">
            {/* address  */}
            <div className="flex items-center gap-2">
              <LocationIcon className="text-primary size-5" />
              <p className="text-black font-medium text-base">Haven Homes</p>
            </div>
            {/* tel   */}
            <div className="flex items-center gap-2">
              <HeadsetIcon className="text-primary size-5" />
              <p className="text-black font-medium text-base">
                +234 123 456 7890
              </p>
            </div>
            {/* mail  */}
            <div className="flex items-center gap-2">
              <Mail02Icon className="text-primary size-5" />
              <p className="text-black font-medium text-base">
                name@example.com
              </p>
            </div>
          </div>
        </div>
        <FormSection />
      </section>
    </section>
  );
};

export default ReserveHome;

function FormSection() {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const eventRef = useRef<HTMLInputElement>(null);
  const guestRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const values = {
      fullName: fullNameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      event: eventRef.current?.value,
      guests: guestRef.current?.value,
      description: descriptionRef.current?.value,
    };
  };

  return (
    <div className="flex-1 flex flex-col">
      <h2 className="subtitle">Exclusive Booking</h2>
      <span className="w-20 bg-primary rounded h-[3px] block mt-2" />
      <p className="text-base font-medium text-black mt-5 leading-8">
        For special bookings and inquiries, we are delighted to provide you with
        an exclusive experience. Please fill out the form below, and we will
        ensure your reservation is meticulously arranged.
      </p>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
        <Input
          name="fullName"
          required
          placeholder="Full Name"
          ref={fullNameRef}
        />
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            name="email"
            type="email"
            required
            placeholder="Email"
            ref={emailRef}
          />
          <Input
            name="phone"
            required
            placeholder="Phone"
            type="tel"
            ref={phoneRef}
          />
          <Input
            name="eventType"
            required
            placeholder="Event Type"
            ref={eventRef}
          />
          <Input
            name="numberOfGuest"
            required
            placeholder="Number of Guest"
            ref={guestRef}
            type="number"
          />
        </div>

        <Textarea
          name="description"
          placeholder="Event description"
          ref={descriptionRef}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
