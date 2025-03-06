"use client";

import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { X } from "lucide-react";

const navigation = ["HOME", "PRODUCTS", "CONTACT"];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="mr-5">
      <BurgerMenu handleClick={handleClick} />

      <div
        className={`fixed inset-0 z-10 bg-black transition-opacity duration-300 ${
          isMenuOpen
            ? "visible opacity-50"
            : "invisible opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed h-full top-0 left-0 px-20 py-10 bg-slate-800 border-r z-10 border-sky-200 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={handleClick}
        >
          <X />
        </button>
        <ul className="flex flex-col gap-3">
          {navigation.map((title, index) => (
            <li
              className="rounded-sm text-center py-1 px-3 cursor-pointer text-white hover:bg-gray-200 hover:text-slate-900 transition-all ease-in duration-150"
              key={index}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>

      <ul className="lg:flex gap-5 hidden">
        {navigation.map((title, index) => (
          <li
            className="py-1 px-3 cursor-pointer hover:border-b hover:bg-gray-50  border-pink-400 hover:text-slate-900 transition-all ease-in duration-150"
            key={index}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
