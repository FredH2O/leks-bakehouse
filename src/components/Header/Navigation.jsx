"use client";

import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { X } from "lucide-react";
import Link from "next/link";

const nav = [
  { title: "HOME", link: "/" },
  { title: "PRODUCTS", link: "/products" },
  { title: "CONTACT", link: "/contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(nav[0].title);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="mr-5">
      <BurgerMenu handleClick={toggleMenu} />

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-20 bg-black opacity-50 transition-opacity duration-300"
        ></div>
      )}
      {/* mobile nav here */}
      <div
        className={`fixed h-full top-0 left-0 px-20 py-10 bg-slate-800 border-r z-30 border-sky-200 transition-transform duration-150 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={closeMenu}
        >
          <X />
        </button>
        <ul className="flex flex-col gap-3">
          {nav.map((navigation) => (
            <li
              key={navigation.title}
              className="rounded-sm text-center py-1 px-3 cursor-pointer text-white hover:bg-gray-200 hover:text-slate-900 transition-all ease-in duration-150"
            >
              <Link onClick={closeMenu} href={navigation.link}>
                {navigation.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* desktop navigation here */}
      <ul className="lg:flex gap-5 hidden">
        {nav.map((navigation) => (
          <li
            key={navigation.title}
            onClick={() => setActive(navigation.title)}
            className={`py-1 px-3 cursor-pointer ${
              active === navigation.title
                ? "bg-rose-200 text-slate-900 rounded transition-all duration-300 ease-in"
                : ""
            }`}
          >
            <Link href={navigation.link}>{navigation.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
