import React from 'react'
import Navbar from '../components/Navbar'
import "@/styles/globals.css";

const PageNav = () => {
  return (
    <div className="w-full">
    <header className="w-full h-20 lg:h-28 border-b-[1px] bg-black border-gray-500 text-black">
      <Navbar />
    </header>
  </div>
  )
}

export default PageNav
