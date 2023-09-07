import React from 'react'
import Navbar from '../components/Navbar'
import "@/styles/globals.css";
import { Articles_arts } from '../components/Articles_arts';

const Page = () => {
  return (
    <div>
      <header className="header w-full h-20 lg:h-28 border-b-[1px] bg-black border-gray-500 text-black relative">
        <Navbar />
      </header>
      <Articles_arts />
    </div>
  )
}

export default Page


