"use client";
import Input from "@/components/forms/input/input";
import Textarea from "@/components/forms/input/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent, useRef } from "react";

const ContactPage = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col h-screen p-6">
      <div className="container__two !max-w-[45rem] ">
        <div className="container__two">
          <p className="bold-paragraph text-center !text-black !font-semibold">
            WANT TO MAKE AN INQUIRY?
          </p>
          <h2 className="subtitle text-center">Send Us A Message</h2>
        </div>
        <FormSection />
      </div>
    </section>
  );
};

export default ContactPage;

function FormSection() {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const eventRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const values = {
      fullName: fullNameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      event: eventRef.current?.value,
      subject: subjectRef.current?.value,
      message: descriptionRef.current?.value,
    };

    console.log(values);
  };
  const inputClassName =
    "h-[2.5rem] lg:h-[3.125rem] p-[10px] rounded text-base";

  return (
    <form className="flex flex-col gap-4 mt-8 lg:mt-4" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-3 lg:gap-5">
        <Input
          name="fullName"
          required
          placeholder="Full Name"
          ref={fullNameRef}
          className={inputClassName}
        />
        <Input
          name="email"
          type="email"
          required
          placeholder="Email"
          ref={emailRef}
          className={inputClassName}
        />
        <Input
          name="phone"
          required
          placeholder="Phone"
          type="tel"
          ref={phoneRef}
          className={inputClassName}
        />
        <Input
          name="subject"
          required
          placeholder="Subject"
          ref={subjectRef}
          type="number"
          className={inputClassName}
        />
      </div>

      <Textarea
        name="message"
        placeholder="Enter your message"
        ref={descriptionRef}
        className="h-[125px]"
      />
      <Button className="p-4 text-base lg:text-base font-bold" type="submit">
        Send
      </Button>
    </form>
  );
}
