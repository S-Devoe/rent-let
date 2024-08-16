'use client'
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/haven-logo.png";
import CloseIcon from "../icons/icon";
import { usePathname } from "next/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

const HamburgerDrawer = ({ open, onClose }: Props) => {
  const pathname = usePathname();

  const nav = [
    {
      title: "Home",
      link: "/",
      isActive: pathname === "/",
    },
    {
      title: "Residences",
      link: "/residence",
      isActive: pathname?.startsWith("/residence"),
    },
    {
      title: "Beach House",
      link: "/beach-house",
      isActive: pathname?.startsWith("/beach-house"),
    },
    {
      title: "Contact Us",
      link: "/contact",
      isActive: pathname?.startsWith("/contact"),
    },
  ];

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="pt-0 px-0 pb-0 flex flex-col z-[1009] w-full "
      >
        <SheetTitle className="sr-only" aria-describedby="mobile view drawer">
          mobile view drawer{" "}
        </SheetTitle>
        <SheetDescription
          className="sr-only"
          aria-describedby="mobile view drawer"
        >
          mobile view drawer{" "}
        </SheetDescription>
        <section className="px-6 mt-4 ">
          <div className="flex items-center justify-between" onClick={onClose}>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                height={40}
                width={40}
                className="h-20 w-20"
              />
            </Link>
            <SheetClose>
              <>
                <CloseIcon className="h-6 w-6 text-black" />
                {/* for screen readers  */}
                <span className="sr-only">Close</span>
              </>
            </SheetClose>
          </div>
          <div className="mt-8 items-start flex flex-col gap-8" onClick={onClose}>
            {nav?.map((item, i) => (
              <Link
                href={item?.link}
                className={`font-semibold ${
                  item?.isActive ? "text-primary" : "text-black"
                } text-base`}
                key={i + 1}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerDrawer;
