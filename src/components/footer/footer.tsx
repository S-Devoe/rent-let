import React from "react";
import { Facebook, Instagram, TwitterCircle } from "../icons/icon";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/haven-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-primary/10 flex  justify-center mt-20 px-6 py-10">
      <div className="container__two flex flex-col md:flex-row gap-10 justify-between lg:mx-28">
        <div className="">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              height={40}
              width={40}
              className="h-20 w-20 rounded-full"
            />
          </Link>
          <div className="flex justify-start items-center gap-5 text-primary mt-5">
            <Link href="#">
              <Facebook className="size-5" />
            </Link>
            <Link href="#">
              <TwitterCircle className="size-5" />
            </Link>
            <Link href="#">
              <Instagram className="size-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {link?.map((item, i) => (
            <Link
              href={item?.link}
              key={i + 1}
              className="text-base text-black font-medium"
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {link2?.map((item, i) => (
            <Link
              href={item?.link}
              key={i + 1}
              className="text-base text-black font-medium"
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <a
          href="https://freekassa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://cdn.freekassa.com/banners/big-dark-1.png"
            title="Receving payments on the site for individuals, etc."
            alt="freekassa"
            width={150}
            height={150}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

const link = [
  {
    link: "#",
    title: "Terms & Conditions",
  },
  {
    link: "#",
    title: "Privacy Policy",
  },
  {
    link: "#",
    title: "Contact Us",
  },
];

const link2 = [
  {
    link: "/beach-house",
    title: "Beach House",
  },
  {
    link: "/residence",
    title: "Residence",
  },
];
