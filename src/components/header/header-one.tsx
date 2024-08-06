import Link from "next/link";
import React from "react";

const HeaderOne = () => {
  return (
    <header className="header__one">
      <div className="container__one px-0">
        <span>Logo</span>
        <div className="flex items-center gap-8">
          {nav?.map((item, i) => (
            <Link
              href={item?.link}
              className="font-semibold text-black text-sm"
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

const nav = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Residences",
    link: "#",
  },
  {
    title: "Beach House",
    link: "#",
  },
  {
    title: "Contact Us",
    link: "#",
  },
];
