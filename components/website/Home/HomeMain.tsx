import React, { useEffect } from "react";
import Hero from "../Hero";
import PopularTrek from "./PopularTrek";
import Service from "./Service";
import Upcoming from "./Upcoming";
import Affiliations from "./Affiliation";
import ParallaxTestimonial from "./ParallaxTestimonial";
import Contact from "./Contact";
import Footer from "../Footer";
import HeroIntro from "./HeroIntro";
import Navbar from "../Navbar";
import About from "./About";
import gsap from "gsap";
import Lenis from "lenis";
import SwipeHero from "./SwipeHero";
type Props = {};

function HomeMain({ openContainerRef, handleWheel }: any) {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <div
      ref={openContainerRef}
      onWheel={handleWheel}
      className="w-full relative top-[100%] left-0 h-full scroll-section   bg-white z-[50]"
    >
      <SwipeHero />
      <div className=" w-full bg-zinc-950 ">
        {/* <HeroIntro /> */}
        <About />
      </div>
      <div className="">
        <Service />
      </div>
      <PopularTrek />
      <Upcoming />
      <Affiliations />
      <ParallaxTestimonial />
      <Contact />
    </div>
  );
}

export default HomeMain;
