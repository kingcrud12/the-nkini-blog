import React from 'react'
import Navbar from '../components/Navbar'
import "@/styles/globals.css";
import { Articles_arts } from '../components/Articles_arts';
import PageNav from '../components/PageNav';

const Page = () => {
  return (
    <div className="w-full">
      <PageNav />
      <Articles_arts />
    </div>
  )
}

export default Page


