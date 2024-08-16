"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/haven-logo.png";

const HeaderOne = () => {
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
      link: "#",
      isActive: pathname?.startsWith("/beach-house"),
    },
    {
      title: "Contact Us",
      link: "#",
      isActive: pathname?.startsWith("/contant"),
    },
  ];
  return (
    <header className="header__one">
      <div className="container__one px-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            height={40}
            width={40}
            className="h-20 w-20"
          />
        </Link>
        <div className="flex items-center gap-8">
          {nav?.map((item, i) => (
            <Link
              href={item?.link}
              className={`font-semibold ${
                item?.isActive ? "text-primary" : "text-black"
              } text-sm`}
              key={i + 1}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
