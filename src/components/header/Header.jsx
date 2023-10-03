import "./header.css"
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
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
    <div className="Header">
        <div className="title text-2xl md:text-4xl uppercase font-bold">
          See  beyond  appearances
        </div>
      <p className="subTitle text-base md:text-lg font-semibold mt-2">{text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" /></p>
    </div>
  )
}

export default Header
