"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { Icon } from "@iconify/react";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutDescRef = useRef(null);
  const aboutContainerRef = useRef(null);
  // useEffect(() => {
  //   if (aboutDescRef.current) {
  //     const text = new SplitType(aboutDescRef.current, { types: "lines" });
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         markers: true,
  //         trigger: aboutContainerRef.current,
  //         start: "top 50%",
  //         end: "top top",
  //         scrub: 2,
  //       },
  //     });
  //     tl.from(text.lines, {
  //       opacity: 0,
  //       y: "100px",
  //       ease: "back.out",
  //       stagger: 0.5,
  //     });
  //   }
  // }, []);

  return (
    <div className="w-full relative">
      {/* <div className="absolute w-full  flex justify-end items-center">
        <Image
          width={1000}
          height={1000}
          src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TU9VTlRBSU4lMjBCSUtJTkd8ZW58MHx8MHx8fDA%3D
"
          alt="about-us-img"
          className="w-full h-full object-cover object-center"
        ></Image>
      </div> */}
      <div className="w-10/12 mx-auto flex  h-screen">
        {/* image  */}
        <div className="w-full flex gap-3 justify-end items-center">
          <div className="w-[50%] h-full flex flex-col gap-3 justify-center">
            <div className="h-[30%] w-full rounded-3xl overflow-hidden relative">
              <div className="bg-black opacity-[0.3] absolute top-0 left-0 w-full h-full"></div>
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TU9VTlRBSU4lMjBCSUtJTkd8ZW58MHx8MHx8fDA%3D
"
                alt="about-us-img"
                className="w-full h-full object-cover object-center"
              ></Image>
            </div>
            <div className="h-[50%] w-full rounded-3xl overflow-hidden relative">
              <div className="bg-black opacity-[0.3] absolute top-0 left-0 w-full h-full"></div>
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TU9VTlRBSU4lMjBCSUtJTkd8ZW58MHx8MHx8fDA%3D
"
                alt="about-us-img"
                className="w-full h-full object-cover object-center"
              ></Image>
            </div>
          </div>
          <div className="w-[55%] h-[60%] rounded-3xl overflow-hidden relative">
            <div className="bg-black opacity-[0.3] absolute top-0 left-0 w-full h-full"></div>
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1573507712396-586c2fc99b36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about-us-img"
              className="w-full h-full object-cover object-center"
            ></Image>
          </div>
        </div>
        <div
          ref={aboutContainerRef}
          className="w-full text-zinc-50 bg-zinc-950 flex  justify-start relative  items-center"
        >
          {/* bg image about  */}
          <div className=" relative  mx-auto overflow-hidden  flex justify-start p-7 gap-2 items-start flex-col">
            {/* title  */}
            <div className="w-full    flex justify-center  items-start text-nowrap">
              <h1 className="inline-block text-zinc-50 w-full   text-2xl md:text-5xl uppercase font-semibold">
                About us
              </h1>
            </div>
            {/* DESC  */}
            <div className="w-full flex justify-center text-start  items-start text-wrap">
              <p
                ref={aboutDescRef}
                className="text-zinc-300 text-[15px] md:text-xl w-full"
              >
                Welcome to Travel Trek, your gateway to extraordinary adventures
                and unforgettable experiences. We believe in the transformative
                power of travel and aim to inspire your journeys with expertly
                curated itineraries and personalized service. Whether you're
                seeking thrilling explorations, serene landscapes, or vibrant
                cultural immersions, Travel Trek is here to make your travel
                dreams a reality.
              </p>
            </div>
            <Link
              href="about_us"
              className="bg-zinc-300 mt-6 hover:gap-3 flex justify-center items-center gap-1 h-[2.8rem] text-sm font-medium rounded-full w-[8rem] hover:bg-white hover:scale-105  text-black  hover:border-white border-black duration-300"
            >
              <span>View details</span>
              <Icon
                icon="mdi:arrow-right"
                className="w-[1rem] pt-[1px] h-[1rem]"
              />
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[15rem] bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
