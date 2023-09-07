import React from 'react'
import Navbar from '../components/Navbar'
import Image from "next/image"
import image from "../../public/assets/image-card.png"

const Page = () => {
  return (
    <div className="bg-fixed bg-no-repeat w-full h-0 bg-center">
      <header className="header w-full h-20 lg:h-28 border-b-[1px] bg-black border-gray-500 text-black">
        <Navbar />
      </header>
      <div className="flex w-[1906px] py-[60px] px-[270.5px] flex-col items-start">
        <div className="w-[1365px] h-[11619.59px]">
          <div className="flex w-[1331px] pr-0 items-start gap-[-146.41px] h-[710px] ml-[18px]">
            <div className="flex w-[665.5px] pt-[66.6px] pr-[66.6px] pl-[0px] pb-[0px] items-start flex-shrink-0">
              <div className="w-[598.94px] h-[644.19px]">
                <div className="w-[465.84px] h-[223px] flex-shrink-0 bg-[#CEC0C2]">
                  <div className="w-[465.84px] mt-[66.54px] ml-[66.55px]">
                    <div className="w-[412px] h-[412px] mt-[13px] ml-[27.01px]">
                      <div className="text-[20px] text-center fixed tracking-normal mt-8 font-[300] h-28 text-white">
                        Interview dans l'atelier de l'artiste Loick Mfoundou
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Page


