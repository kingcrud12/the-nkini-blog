import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";



const Navbar = () => {

  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <Link href="/"><h1 className="text-2xl uppercase font-bold">The nkini project</h1></Link>
        <ul className="list">
        <Link href="/"><li className="navbarLi">Accueil</li></Link>
          <li className="navbarLi">Arts</li>
          <li className="navbarLi">Musique</li>
          <li className="navbarLi">Cinema</li>
          <li className="navbarLi">Portfolio</li>
          <li className="navbarLi">A propos</li>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <BsSearch className="text-xl hover:text-hoverColor" />
          <div className="relative">
            <ImCart className="text-xl" />
            <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
              0
            </span>
          </div>
          <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
            Voir votre panier
          </button>
        </div>
        <button><div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div></button>
      </div>
    </div>
  );
};

export default Navbar;