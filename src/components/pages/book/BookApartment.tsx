"use client";

import Input from "@/components/forms/input/input";
import Textarea from "@/components/forms/input/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { apartmentData } from "@/data/data";
import { calculateDaysBetweenDates, cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DateRange } from "react-day-picker";

interface FormData {
  checkin: any;
  checkout: any;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  extraInfo: string;
}

interface StepProps {
  setFormData?: Dispatch<SetStateAction<FormData>>;
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setCurrentStage: Dispatch<SetStateAction<number>>;
}

const BookApartment = () => {
  const [currentStep, setCurrentStage] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    checkin: "",
    checkout: "",
    firstName: "",
    lastName: "",
    extraInfo: "",
    email: "",
    phone: "",
  });

  const handleInputChange: StepProps["handleInputChange"] = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderStep = (
    currentStep: number,
    formData: FormData,
    handleInputChange: StepProps["handleInputChange"],
    setFormData: Dispatch<SetStateAction<FormData>>,
    setCurrentStage: Dispatch<SetStateAction<number>>
  ) => {
    switch (currentStep) {
      case 1:
        return (
          <FormStep1
            formData={formData}
            handleInputChange={handleInputChange}
            setFormData={setFormData}
            setCurrentStage={setCurrentStage}
          />
        );
      case 2:
        return (
          <FormStep2
            formData={formData}
            handleInputChange={handleInputChange}
            setCurrentStage={setCurrentStage}
          />
        );
      case 3:
        return (
          <FormStep3
            formData={formData}
            handleInputChange={handleInputChange}
            setCurrentStage={setCurrentStage}
          />
        );
      default:
        return (
          <FormStep1
            formData={formData}
            handleInputChange={handleInputChange}
            setCurrentStage={setCurrentStage}
          />
        );
    }
  };

  const stepHeader = [
    {
      text: "Your stay",
      id: 1,
    },
    {
      text: "Customer Information",
      id: 2,
    },
    {
      text: "Confirm booking",
      id: 3,
    },
  ];
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="h-screen w-full flex justify-center pt-[10rem] px-6">
      <div className="w-full max-w-[50rem]">
        <div className="flex items-center justify-between mb-4">
          {stepHeader?.map((header) => (
            <div
              className={`p-2 flex flex-col md:flex-row justify-center items-center gap-2 font-semibold text-xs md:text-base  ${
                header?.id <= currentStep
                  ? "text-black cursor-pointer"
                  : "text-primary/80"
              }  ${
                header?.id === currentStep && "border-b-2 border-primary"
              }  `}
              key={header?.id}
              onClick={() => {
                header?.id <= currentStep && setCurrentStage(header?.id);
              }}
            >
              <span
                className={`size-4 md:size-6 text-xs md:text-base shrink-0 ${
                  currentStep < header?.id ? "bg-primary/50 " : "bg-primary"
                }  text-white flex items-center justify-center rounded-full`}
              >
                {header?.id}
              </span>
              <p className="text-center" >{header?.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit}>
          {renderStep(
            currentStep,
            formData,
            handleInputChange,
            setFormData,
            setCurrentStage
          )}
        </form>
      </div>
    </section>
  );
};

export default BookApartment;

const FormStep1 = ({
  formData,
  handleInputChange,
  setFormData,
  setCurrentStage,
}: StepProps) => {
  const [date, setDate] = useState<any>();

  useEffect(() => {
    if (date && date?.from && date?.to) {
      setFormData &&
        setFormData((prev) => ({
          ...prev,
          checkin: formatDate(date!.from),
          checkout: formatDate(date!.to),
        }));
    }
  }, [date, setFormData]);

  const numberOfNights = calculateDaysBetweenDates(
    date?.from ?? new Date(),
    date?.to ?? new Date()
  );

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="form_header">Haven Homes Booking</h2>
        <p className="form_drescription">Kindly provide your booking details</p>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <div className="w-full flex items-center gap-4">
            <Button
              type="button"
              id="date"
              variant={"outline"}
              className={cn(
                "w-full justify-start h-[2.5rem] lg:h-[3.125rem] text-left p-[10px] text-base font-normal flex items-center truncate border-gray-300 text-black rounded"
              )}
            >
              {formData?.checkin
                ? formatDate(formData?.checkin, "DD MMM,YYYY")
                : "Check In"}
            </Button>
            <Button
              type="button"
              id="date"
              variant={"outline"}
              className={cn(
                "w-full justify-start h-[2.5rem] lg:h-[3.125rem] text-left p-[10px] text-base font-normal flex items-center truncate border-gray-300 text-black rounded"
              )}
            >
              {formData?.checkin ? (
                formatDate(formData?.checkout, "DD MMM,YYYY")
              ) : (
                <span className="text-gray-500">Check Out</span>
              )}
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 z-[999] " align="start">
          <Calendar
            // initialFocus
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            fromDate={new Date()}
          />
          <p className="text-center text-base text-black py-3 font-semibold">
            Selected: {numberOfNights} Night
          </p>
        </PopoverContent>
      </Popover>
      <Button
        disabled={!Boolean(formData?.checkout)}
        type="button"
        className="w-full px-5 text-base font-semibold mt-8"
        onClick={() => setCurrentStage(2)}
      >
        Proceed
      </Button>
    </div>
  );
};

const FormStep2 = ({
  formData,
  handleInputChange,
  setCurrentStage,
}: StepProps) => {
  const inputClassName =
    "h-[2.5rem] lg:h-[3.125rem] p-[10px] rounded text-base";

  const isFormComplete = (): boolean => {
    return (
      formData.checkin &&
      formData.checkout &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.extraInfo
    );
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="form_header">
          Customer information To complete the booking,
        </h2>
        <p className="form_drescription"> Please enter your details</p>
      </div>
      <div className="w-full grid gap-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <Input
            name="firstName"
            required
            placeholder="First Name"
            className={inputClassName}
            value={formData?.firstName}
            onChange={handleInputChange}
          />
          <Input
            name="lastName"
            required
            placeholder="Last Name"
            className={inputClassName}
            value={formData?.lastName}
            onChange={handleInputChange}
          />
          <Input
            name="email"
            type="email"
            required
            placeholder="Email"
            className={inputClassName}
            value={formData?.email}
            onChange={handleInputChange}
          />
          <Input
            name="phone"
            required
            placeholder="Phone"
            type="tel"
            className={inputClassName}
            value={formData?.phone}
            onChange={handleInputChange}
          />
        </div>
        <Textarea
          name="extraInfo"
          placeholder="Please write any other information you would want us to know about"
          value={formData.extraInfo}
          onChange={handleInputChange}
          className="h-[125px]"
        />
      </div>
      <Button
        disabled={!isFormComplete()}
        type="button"
        className="w-full px-5 text-base font-semibold mt-8"
        onClick={() => setCurrentStage(3)}
      >
        Proceed
      </Button>
    </div>
  );
};

const FormStep3 = ({ formData, handleInputChange }: StepProps) => {
  const { id } = useParams();
  const apartment = apartmentData.find((apartment) => apartment.id === id);

  if (!apartment) {
    return (
      <div className="mt-6 text-black text-base">
        Please select an apartment
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="form_header">Confirm your booking</h2>
        <p className="form_drescription">Please confirm your booking below</p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src={apartment.images[0]}
            alt="img"
            height={200}
            width={200}
            className="h-[100px] w-[150px] rounded "
          />
          <div className="font-medium">
            <h2 className="text-base text-black font-semibold">
              {apartment.name}
            </h2>
            <h3 className="text-sm text-black">
              {calculateDaysBetweenDates(formData.checkin, formData.checkout)}{" "}
              Night
            </h3>
            <h3 className="text-sm text-black">
              {formatDate(formData.checkin, "DD MMMM, YYYY")} -{" "}
              {formatDate(formData.checkout, "DD MMMM, YYYY")}
            </h3>
          </div>
        </div>
        <div className="font-bold text-lg text-black">{apartment.price}</div>
      </div>
      <div className="border-t border-gray-300 w-full mt-6 space-y-4 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl">Sub Total</h3>
          <h3 className="text-xl">
            $
            {calculateDaysBetweenDates(formData.checkin, formData.checkout) *
              500}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Total</h3>
          <h3 className="text-2xl font-semibold">
            $
            {calculateDaysBetweenDates(formData.checkin, formData.checkout) *
              500}
          </h3>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full px-5 text-base font-semibold mt-4"
      >
        Make Reservation
      </Button>
    </div>
  );
};
