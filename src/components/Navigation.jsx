"use client";

import { useState } from "react";
const navigation = ["Home", "Products", "Contact"];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("false");

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="mr-5">
      {isMenuOpen && (
        <div className="relative">
          {/* shade */}
          <div className="fixed bg-black inset-0 opacity-50 border-red-500"></div>
          <div className="fixed h-full top-0 right-0 px-10 py-10 bg-slate-800 border-l border-sky-200">
            <ul className="flex flex-col gap-3">
              {navigation.map((title, index) => (
                <li
                  className="rounded-sm py-1 px-3 cursor-pointer hover:bg-gray-200 hover:text-slate-900 transition-all ease-in duration-150"
                  key={index}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <ul className="lg:flex gap-5 hidden font-bold">
        {navigation.map((title, index) => (
          <li
            className="rounded-sm py-1 px-3 cursor-pointer hover:bg-gray-200 hover:text-slate-900 transition-all ease-in duration-150"
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
