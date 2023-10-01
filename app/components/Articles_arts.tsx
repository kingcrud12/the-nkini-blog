import React from "react";
import LoickM from "../../public/assets/loickM.jpg"
import Image from "next/image"
import {getArticles} from "@/sanity/sanity.query"
import type { articlesType } from "@/types";
import Link from "next/link"

export default function Articles_arts () {
  return (
    <div className="inline-flex flex-col items-center pl-[30.5px] pr-[64.5px] py-[60px] relative bg-white">
      <div className="flex flex-col max-w-[1426px] w-[1331px] items-start relative flex-[0_0_auto]">
        <div className="relative self-stretch w-full h-[11619.44px]">
          <div className="pl-0 pr-[146.41px] py-0 top-0 flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.55px] pb-0 z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[644.67px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="absolute w-[466px] h-[223px] top-[67px] left-[67px]">
                  <div className="absolute h-[28px] top-[12px] left-[27px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px] whitespace-nowrap">
                    Interview
                  </div>
                  <div className="absolute h-[28px] top-[68px] left-[125px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center items-center tracking-[0] leading-[27.9px] whitespace-nowrap">
                    Loick
                  </div>
                  <div className="absolute w-[465px] h-[112px] top-[110px] left-0 mt-[30px]">
                    <div className="absolute w-[465px] h-[56px] top-0 left-0 [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                      MFOUNDOU
                    </div>
                  </div>
                </div>
                <div className="absolute w-[466px] h-[184px] top-[308px] left-[67px]">
                  <div className="relative w-[469px] h-[185px] top-[-2px] left-px">
                    <p className="absolute h-[31px] top-0 left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      Loïck Mfoundou est un artiste originaire du 95
                    </p>
                    <p className="absolute h-[31px] top-[31px] left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap items-center">
                      son département l’inspire autant que le Basket
                    </p>
                  </div>
                </div>
                <button className="pl-[129.78px] pr-[130.04px] py-0 top-[520px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.6px] pb-[19.04px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[18.6px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Lire plus
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-[665.5px] items-start pr-[3.05e-05px] pl-0 pt-0 pb-[61.7px] relative self-stretch mr-[-34.00px] ml-[-146.41px] z-0">
              <Image  src={LoickM} alt="image for a post"/>
            </div>
          </div>
          <div className="top-[745px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-104-mask-group.svg"
              />
            </div>
            <div className="pl-[66.55px] pr-[0.01px] pt-[66.55px] pb-[44.36px] mr-[-34.00px] flex w-[665.5px] items-start relative">
              <div className="h-[538.61px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[13.13px] pr-[12.93px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[439.78px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Flojo Forever
                  </div>
                </div>
                <div className="absolute w-[466px] h-[246px] top-[141px] left-[67px]">
                  <div className="relative w-[470px] h-[246px] top-[-2px] left-px">
                    <p className="absolute h-[31px] top-0 left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      For nearly twelve years of my life, track was my life.
                    </p>
                    <p className="absolute h-[31px] top-[31px] left-[22px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      I can remember the feeling of nervousness the
                    </p>
                    <p className="absolute h-[31px] top-[61px] left-[24px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      night before a meet, waking up at 6AM to get
                    </p>
                    <p className="absolute h-[31px] top-[92px] left-[4px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      ready for an all day meet, &amp; the anxiety that came
                    </p>
                    <p className="absolute h-[31px] top-[123px] left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      along with waiting for your event to start. Sitting in
                    </p>
                    <p className="absolute h-[31px] top-[153px] left-[8px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      the blocks, heart about to beat out of your chest.
                    </p>
                    <p className="absolute h-[31px] top-[184px] left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      That last 100m in the 400m where you feel like your
                    </p>
                    <div className="absolute h-[31px] top-[215px] left-[170px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      legs are jello.
                    </div>
                  </div>
                </div>
                <button className="pl-[129.79px] pr-[130.03px] py-0 top-[414px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[18.6px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      READ MORE
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-[146.41px] py-0 top-[1429px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.55px] pb-[13.12px] z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[569.3px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[76.06px] pr-[75.88px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[313.9px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Study Hall
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[2.52px] pr-[2.32px] pt-0 pb-[0.38px] absolute top-[140px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    In my previous post, I briefly touched on how I
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    choose locations. I always default to shooting in
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    locations that scream NYC which is authentic to
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    who I am but also can be a bit lazy. New York has
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    so many dope locations, many of which are
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    overused (I’m guilty of this). Lately, I’ve been
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    challenging myself to think outside what’s directly
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px]">
                    in front of me and give the girls range. One way to <br />
                    do this is by creating a color story.
                  </p>
                </div>
                <button className="pl-[143.59px] pr-[143.23px] py-0 top-[445px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="pr-[3.05e-05px] pl-0 py-0 mr-[-34.00px] ml-[-146.41px] z-0 flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[648.97px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-113-mask-group.svg"
              />
            </div>
          </div>
          <div className="top-[2112px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-122-mask-group.svg"
              />
            </div>
            <div className="pl-[66.55px] pr-[0.01px] pt-[66.55px] pb-[105.74px] mr-[-34.00px] flex w-[665.5px] items-start relative">
              <div className="h-[477.23px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[90.86px] pr-[90.65px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[284.33px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Eggplant
                  </div>
                </div>
                <div className="absolute w-[466px] h-[184px] top-[141px] left-[67px]">
                  <div className="relative w-[470px] h-[184px] top-[-2px]">
                    <p className="absolute h-[31px] top-0 left-[14px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      Nike recently released a new design for their Air
                    </p>
                    <p className="absolute h-[31px] top-[31px] left-px text-neutral-950 text-[18.9px] tracking-[0.20px] leading-[30.7px] whitespace-nowrap [font-family:'Inter',Helvetica] font-light text-center">
                      Max 270 Reacts. This version is called ENG and the
                    </p>
                    <p className="absolute h-[31px] top-[61px] left-[11px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      first women’s colorway is in 🍆. If you’re unfamiliar
                    </p>
                    <p className="absolute h-[31px] top-[92px] left-[19px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      with the design, it’s Nike’s first lifestyle Air Max
                    </p>
                    <p className="absolute h-[31px] top-[123px] left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      combined with the “softest, smoothest and resilient
                    </p>
                    <p className="absolute h-[31px] top-[153px] left-[124px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      foam” of the Nike React.
                    </p>
                  </div>
                </div>
                <button className="pl-[143.6px] pr-[143.22px] py-0 top-[353px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-[146.41px] py-0 top-[2795px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.55px] pb-[136.42px] z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[446.55px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[95.15px] pr-[94.96px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[275.73px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Wash Day
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[2.01px] pr-[1.82px] pt-0 pb-[0.38px] absolute top-[140px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    Socks are probably my favorite accessory. I
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    remember as a kid my family would make fun of me
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    for wearing them all the time but particularly when
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px]">
                    I would wear them during the summer and to bed. <br />
                    It was mainly for comfort I guess, they felt good!
                  </p>
                </div>
                <button className="pl-[143.59px] pr-[143.23px] py-0 top-[322px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="pr-[3.05e-05px] pl-0 py-0 mr-[-34.00px] ml-[-146.41px] z-0 flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-131-mask-group.svg"
              />
            </div>
          </div>
          <div className="top-[3479px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[608.92px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-140-mask-group.svg"
              />
            </div>
            <div className="pl-[66.55px] pr-[0.01px] pt-[66.55px] pb-[75.37px] mr-[-34.00px] flex w-[665.5px] items-start relative">
              <div className="h-[467px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[23px] pr-[22.81px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[420.03px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Thrifted Tings
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[3.52px] pr-[3.32px] pt-0 pb-[0.38px] absolute top-[140px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    My love for thrifting started back in college - I was
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    young, creative, &amp; super experimental with my
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px]">
                    style. The thrift store opened me up to a world no <br />
                    retail store could ever do at the moment.
                  </p>
                </div>
                <button className="pl-[143.6px] pr-[143.22px] py-0 top-[343px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.6px] pb-[19.04px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-[146.41px] py-0 top-[4190px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.54px] pb-[111.31px] z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[471.67px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[30.14px] pr-[29.96px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[405.74px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    No Place Like
                  </div>
                  <div className="relative w-[295.2px] mt-[-0.19px] text-white text-[55.8px] tracking-[0] leading-[27.9px] [font-family:'Inter',Helvetica] font-light text-center">
                    Brooklyn
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[1.52px] pr-[1.32px] pt-0 pb-[0.37px] absolute top-[196px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    If you don&#39;t know anything else about me you know
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    that I am from Brooklyn, and I never miss an
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px]">
                    opportunity to let people know that &#34;I&#39;m from <br />
                    Brooklyn&#34; (my fellow Brooklynites feel me!)
                  </p>
                </div>
                <button className="pl-[143.59px] pr-[143.23px] py-0 top-[347px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="pr-[3.05e-05px] pl-0 py-0 mr-[-34.00px] ml-[-146.41px] z-0 flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-149-mask-group.svg"
              />
            </div>
          </div>
          <div className="top-[4941px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-158-mask-group.svg"
              />
            </div>
            <div className="pl-[66.55px] pr-[0.01px] pt-[66.55px] pb-[49.92px] mr-[-34.00px] flex w-[665.5px] items-start relative">
              <div className="h-[533.05px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="gap-[13.81px] pl-[72.52px] pr-[72.32px] pt-[13px] pb-[0.82px] top-[67px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px] whitespace-nowrap">
                    #chandon
                  </div>
                  <div className="relative w-[194.5px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Squad
                  </div>
                </div>
                <div className="absolute w-[466px] h-[184px] top-[197px] left-[67px]">
                  <div className="relative w-[441px] h-[183px] -top-px left-[13px]">
                    <p className="absolute h-[31px] top-0 left-[8px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.5px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      I had the opportunity to attend the Who What
                    </p>
                    <p className="absolute h-[31px] top-[30px] left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      Wear x Chandon&#39;s Superwoman Power Hour with
                    </p>
                    <p className="absolute h-[31px] top-[60px] left-[32px] [font-family:'Inter',Helvetica] font-normal text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      <span className="font-light">special guests, designer </span>
                      <span className="font-light italic">Rebecca Minkoff</span>
                      <span className="font-light">, </span>
                    </p>
                    <p className="absolute h-[31px] top-[91px] left-px [font-family:'Inter',Helvetica] font-normal text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      <span className="font-light">Chandon&#39;s winemaker </span>
                      <span className="font-light italic">Pauline Lhot</span>
                      <span className="font-light">e, VP of talent </span>
                    </p>
                    <p className="absolute h-[31px] top-[122px] left-[19px] [font-family:'Inter',Helvetica] font-normal text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      <span className="font-light italic">Rachel Zeilic</span>
                      <span className="font-light">, &amp; Bumble&#39;s Director of Content </span>
                    </p>
                    <p className="absolute h-[31px] top-[152px] left-[119px] [font-family:'Inter',Helvetica] font-normal text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      <span className="font-light">Strategy </span>
                      <span className="font-light italic">Andee Olson</span>
                      <span className="font-light">.</span>
                    </p>
                  </div>
                </div>
                <button className="pl-[143.6px] pr-[143.22px] py-0 top-[409px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-[146.41px] py-0 top-[5693px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.54px] pb-[74.88px] z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[507.92px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[20.47px] pr-[20.26px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[425.11px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    That 70’s Show
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[5.02px] pr-[4.82px] pt-0 pb-[0.37px] absolute top-[140px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    No matter how often my style evolves I still make
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    my way back to the one style era that&#39;s true to my
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    heart - the 70s! It was an era of revolution and
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    liberation. Whether you identify with the hippie
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    movement or a more radical group like the Black
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px]">
                    Panthers, there&#39;s no denying the impact the <br />
                    60&#39;s/70&#39;s had on our culture.
                  </p>
                </div>
                <button className="pl-[143.59px] pr-[143.23px] py-0 top-[384px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="pr-[3.05e-05px] pl-0 py-0 mr-[-34.00px] ml-[-146.41px] z-0 flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.34px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-167-mask-group.svg"
              />
            </div>
          </div>
          <div className="top-[6444px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-176-mask-group.svg"
              />
            </div>
            <div className="pl-[66.55px] pr-[0.01px] pt-[66.55px] pb-[167.11px] mr-[-34.00px] flex w-[665.5px] items-start relative">
              <div className="relative w-[598.94px] h-[415.86px] bg-[#cec0c2]">
                <div className="pl-[9.96px] pr-[9.74px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[446.14px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Coachella Fits
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[1.53px] pr-[1.31px] pt-0 pb-[0.37px] absolute top-[140px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    It&#39;s that time of the year again - music festival
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    season! If you&#39;re anything like me, you love music,
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px]">
                    fashion, and getting your life, so what better place <br />
                    to do all 3 than at a music festival.
                  </p>
                </div>
                <button className="flex flex-col w-[466px] items-center pl-[143.6px] pr-[143.22px] py-0 absolute top-[292px] left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-[146.41px] py-0 top-[7196px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.54px] pb-[141.45px] z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[440.98px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="gap-[13.81px] pl-[17.01px] pr-[16.83px] pt-[13px] pb-[0.82px] top-[67px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px] whitespace-nowrap">
                    Cold Weather
                  </div>
                  <div className="relative w-[311.33px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Body Care
                  </div>
                </div>
                <div className="absolute w-[466px] h-[92px] top-[197px] left-[67px]">
                  <div className="relative w-[467px] h-[92px] top-[-2px] left-px">
                    <p className="absolute h-[31px] top-0 left-[8px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      Fall is finally here which means it&#39;s time to switch
                    </p>
                    <p className="absolute h-[31px] top-[31px] left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      up our skincare routine. Cold weather not only dries
                    </p>
                    <p className="absolute h-[31px] top-[61px] left-[79px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                      your hair out but your skin as well.
                    </p>
                  </div>
                </div>
                <button className="pl-[143.59px] pr-[143.23px] py-0 top-[317px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="pr-[3.05e-05px] pl-0 py-0 mr-[-34.00px] ml-[-146.41px] z-0 flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[648.97px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-185-mask-group.svg"
              />
            </div>
          </div>
          <div className="top-[7947px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.63px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-194-mask-group.svg"
              />
            </div>
            <div className="pl-[66.55px] pr-[0.01px] pt-[66.54px] pb-[142.11px] mr-[-34.00px] flex w-[665.5px] items-start relative">
              <div className="h-[440.98px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="gap-[13.81px] pl-[31.88px] pr-[31.68px] pt-0 pb-[14.82px] top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[402.28px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    My Signature
                  </div>
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px] whitespace-nowrap">
                    Fro
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[2.52px] pr-[2.32px] pt-0 pb-[0.37px] absolute top-[196px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    Over the years I’ve tried countless hairstyles - from
                  </p>
                  <p className="relative w-fit mt-[-0.31px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px]">
                    braid-outs to twist-outs and even bantu knots but <br />
                    what constantly remains the same is my fro.
                  </p>
                </div>
                <button className="pl-[143.6px] pr-[143.22px] py-0 top-[317px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-[146.41px] py-0 top-[8698px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.55px] pb-[55.72px] z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[527.48px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[12.58px] pr-[12.38px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[348.82px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Tips To Help
                  </div>
                  <div className="relative w-[440.88px] mt-[-0.2px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Fight Humidity
                  </div>
                  <div className="relative w-[192.37px] mt-[-0.2px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    &amp; Frizz
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[0.18px] pr-0 pt-0 pb-[0.38px] absolute top-[252px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    One of the biggest questions I get, as far as my
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    natural hair is concerned, is how do I maintain my
                  </p>
                  <p className="relative w-fit ml-[-1.67px] mr-[-1.67px] mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px]">
                    BIG hair during the hot humid summer months. This <br />
                    is actually a really good question.
                  </p>
                </div>
                <button className="pl-[143.59px] pr-[143.23px] py-0 top-[403px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.6px] pb-[19.04px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="pr-[3.05e-05px] pl-0 py-0 mr-[-34.00px] ml-[-146.41px] z-0 flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.75px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-203-mask-group.svg"
              />
            </div>
          </div>
          <div className="top-[9450px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-212-mask-group.svg"
              />
            </div>
            <div className="pl-[66.55px] pr-[0.01px] pt-[66.55px] pb-[167.11px] mr-[-34.00px] flex w-[665.5px] items-start relative">
              <div className="relative w-[598.94px] h-[415.86px] bg-[#cec0c2]">
                <div className="pl-[155.02px] pr-[154.82px] pt-[13px] pb-[14.81px] top-[67px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-fit mt-[-1.00px] text-white text-[55.8px] tracking-[0] leading-[27.9px] whitespace-nowrap [font-family:'Inter',Helvetica] font-light text-center">
                    Nola
                  </div>
                </div>
                <div className="flex flex-col w-[466px] items-center pl-[1.02px] pr-[0.82px] py-0 absolute top-[140px] left-[67px]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    I travelled to New Orleans a few weeks ago for the
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-normal text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    <span className="font-light">infamous </span>
                    <span className="font-light italic">Essence Festival </span>
                    <span className="font-light">and I couldn&#39;t miss an </span>
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.2px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    opportunity to take photos in the architecturally
                  </p>
                  <p className="relative w-fit mt-[-0.3px] [font-family:'Inter',Helvetica] font-normal text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                    <span className="font-light">and aesthetically pleasing </span>
                    <span className="font-light italic">French Quarter.</span>
                  </p>
                </div>
                <button className="flex flex-col w-[466px] items-center pl-[143.6px] pr-[143.22px] py-0 absolute top-[292px] left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-[146.41px] py-0 top-[10201px] flex w-[1297px] items-start absolute left-[17px]">
            <div className="pl-0 pr-[66.56px] pt-[66.54px] pb-[24.81px] z-[1] flex w-[665.5px] items-start relative">
              <div className="h-[558.17px] relative w-[598.94px] bg-[#cec0c2]">
                <div className="pl-[48.59px] pr-[48.39px] py-0 top-[66px] flex flex-col w-[466px] items-center absolute left-[67px]">
                  <div className="relative w-[351.52px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Diy Cut-off
                  </div>
                  <div className="relative w-[368.86px] mt-[-0.2px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Shorts With
                  </div>
                  <div className="relative w-[208.95px] mt-[-0.2px] [font-family:'Inter',Helvetica] font-light text-white text-[55.8px] text-center tracking-[0] leading-[27.9px]">
                    Bustle!
                  </div>
                </div>
                <div className="absolute w-[466px] h-[153px] top-[253px] left-[67px]">
                  <div className="relative w-[471px] h-[155px] top-[-2px]">
                    <div className="absolute w-[471px] h-[154px] top-0 left-0">
                      <p className="absolute h-[31px] top-0 left-[9px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                        I had the awesome opportunity of participating in
                      </p>
                      <p className="absolute h-[31px] top-[31px] left-[11px] [font-family:'Inter',Helvetica] font-normal text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                        <span className="font-light">my first DIY video via </span>
                        <span className="font-light italic">Facebook Live </span>
                        <span className="font-light">with </span>
                        <span className="font-light italic">Bustle&#39;s</span>
                        <span className="font-light">&nbsp;</span>
                      </p>
                      <p className="absolute h-[31px] top-[61px] left-0 [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.9px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                        Senior Fashion &amp; Beauty Editor - Kara McGrath. This
                      </p>
                      <p className="absolute h-[31px] top-[92px] left-[13px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[18.7px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                        DIY is perfect for the summer, it&#39;s super easy and
                      </p>
                      <p className="absolute h-[31px] top-[123px] left-[68px] [font-family:'Inter',Helvetica] font-light text-neutral-950 text-[19.1px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                        quick. Check out the full video
                      </p>
                    </div>
                    <div className="absolute w-[53px] h-[29px] top-[126px] left-[345px] border-b [border-bottom-style:solid] border-[#1111114c]">
                      <div className="absolute h-[31px] top-[-3px] left-0 [font-family:'Inter',Helvetica] font-light text-white text-[18.6px] text-center tracking-[0.20px] leading-[30.7px] whitespace-nowrap">
                        HERE!
                      </div>
                    </div>
                  </div>
                </div>
                <button className="pl-[143.59px] pr-[143.23px] py-0 top-[434px] flex flex-col w-[466px] items-center absolute left-[67px] all-[unset] box-border">
                  <div className="inline-flex items-start justify-center pt-[17.59px] pb-[19.05px] px-[46.51px] relative flex-[0_0_auto] bg-[#0a0000] rounded-[81.86px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#f7f2f2] text-[15.8px] text-center tracking-[0.56px] leading-[20.5px] whitespace-nowrap">
                      Read More
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="pr-[3.05e-05px] pl-0 py-0 mr-[-34.00px] ml-[-146.41px] z-0 flex flex-col w-[665.5px] items-start relative self-stretch">
              <img
                className="h-[649.52px] relative self-stretch w-full mr-[-0.41px] object-cover"
                alt="Div yui"
                src="https://c.animaapp.com/ixdSDvxd/img/div-yui-3-17-2-1-1695586599653-221-mask-group.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

