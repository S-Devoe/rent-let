"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/haven-logo.png";
import { HamburgerMenu } from "../icons/icon";
import HamburgerDrawer from "../sheet/mobile-menu-sheet";
import { useState } from "react";

const HeaderOne = () => {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);

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
        <button
          className="md:hidden"
          type="button"
          onClick={() => setOpenDrawer(true)}
          aria-label='open menu'
        >
          <HamburgerMenu className="size-6 text-black md:hidden" />
        </button>
        <HamburgerDrawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        />
        <div className="hidden md:flex items-center gap-8">
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
