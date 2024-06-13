import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function About() {
  const text = new SplitType(".about-desc");
  //   const splitDesc = text.lines;
  const aboutContainerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: "true",
        trigger: aboutContainerRef.current,
        start: "top 50%",
        end: "top top",
        scrub: 2,
      },
    });
    tl.from(text.lines, {
      opacity: 0,
      y: "100px",
      ease: "back.out",
      stagger: 0.5,
    });
  });
  return (
    <div>
      <div
        ref={aboutContainerRef}
        className="w-full text-zinc-50 bg-zinc-950 h-screen flex relative justify-center items-center"
      >
        <div className="w-11/12 relative mt-[-5%]  mx-auto overflow-hidden  px-5 flex justify-center items-center flex-col">
          {/* title  */}
          <div className="w-full mb-[1rem]   flex justify-center  items-start text-nowrap">
            <span className=" text-zinc-50 w-full text-center  text-2xl md:text-5xl uppercase font-semibold trackong-wider">
              About us
            </span>
          </div>
          {/* DESC  */}
          <div className="w-full md:w-9/12   flex justify-center text-center  items-start text-wrap">
            <p
              //   initial={{ opacity: 0 }}
              //   whileInView={{ opacity: 1 }}
              //   transition={{ duration: 0.5 }}
              className=" text-zinc-200 about-desc text-[15px] md:text-[1.5rem] font-normal w-full"
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
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[15rem] bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
}

export default About;
