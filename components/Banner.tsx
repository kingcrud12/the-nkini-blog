"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
        
        "Embrace your legacy",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center mt-20 pb-96 bg-fixed bg-no-repeat bg-cover">
      <h1 className="text-2xl md:text-4xl uppercase font-bold">
        See beyond appearances
      </h1>
      <p className="text-base md:text-lg font-semibold mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
  );
};

export default Banner;