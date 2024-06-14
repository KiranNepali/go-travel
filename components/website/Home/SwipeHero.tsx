import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image"; // Import Image component from next/image
import { Icon } from "@iconify/react";
// import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";

import "./styles.css";

// images
import HeroMustangBg from "@/public/HeroImage/HeroBg1.png";
import HeroPhoksundoBg from "@/public/HeroImage/HeroPhoksundo.png";
import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";
import HeroTilichoBg from "@/public/HeroImage/HeroTilicho.png";
import HeroPersonImage from "@/public/HeroImage/HeroPerson.png";
import Link from "next/link";

export default function SwipeHero() {
  const images = [
    { id: 1, name: "Mustang", src: HeroMustangBg },
    { id: 2, name: "Phoksundo", src: HeroPhoksundoBg },
    { id: 3, name: "Everest", src: HeroEverestBg },
    { id: 4, name: "Tilicho", src: HeroTilichoBg },
  ];
  const swiperRef = useRef<any>();

  //   useEffect(() => {
  //     const swiper = swiperRef.current.swiper;

  //     swiper.on("slideChange", () => {
  //       const currentSlide = swiper.slides[swiper.activeIndex];
  //       const nameElement = currentSlide.querySelector(".text-8xl");
  //       if (nameElement) {
  //         gsap.fromTo(
  //           nameElement,
  //           { opacity: 0, y: -20 },
  //           { opacity: 1, y: 0, duration: 0.5 }
  //         );
  //       }
  //     });
  //   }, []);
  return (
    <div className="w-full h-screen relative text-zinc-50">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        speed={1000}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper relative"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="swiper-image-container ">
              <Image
                src={image.src}
                alt={image.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.3] bg-zinc-950"></div>
            </div>
            <div className="absolute text-zinc-200 top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <span className="text-[10vw] inline-block  uppercase font-black">
                {image.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-40 bottom-0 left-0 w-full pointer-events-none h-[15rem] bg-gradient-to-t from-zinc-950 to-transparent"></div>
      <div className="absolute z-20 bottom-0 left-[50%] translate-x-[-50%] w-[40vW] h-[60vh]">
        <Image
          src={HeroPersonImage}
          alt="hero-person"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex w-full bottom-20 left-0  absolute z-50 justify-end items-center ">
        <div className="w-11/12 justify-end mx-auto flex gap-5">
          <div
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slidePrev();
              }
            }}
            className="w-[2rem] md:w-[2.5rem] h-[2rem] md:h-[2.5rem] hover:scale-105 duration-300 cursor-pointer overflow-hidden  text-zinc-300 hover:text-zinc-50 rounded-full"
          >
            <Icon
              icon="mynaui:fat-arrow-left"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideNext();
              }
            }}
            className="w-[2rem] md:w-[2.5rem] h-[2rem] md:h-[2.5rem] hover:scale-105 duration-300 cursor-pointer  overflow-hidden  text-zinc-300 hover:text-zinc-50 rounded-full"
          >
             <Icon
              icon="mynaui:fat-arrow-right"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full bottom-20 left-0  absolute z-40 justify-start items-center ">
        <div className="w-11/12 flex-col justify-center items-start mx-auto flex gap-4">
          <Link
            href="contact_us"
            className="bg-zinc-300 mt-3 hover:gap-3 flex justify-center items-center gap-1 h-[2.8rem] text-sm font-medium rounded-full w-[8rem] hover:bg-white hover:scale-105  text-black  hover:border-white border-black duration-300"
          >
            <span>Explore now</span>
            <Icon
              icon="mdi:arrow-right"
              className="w-[1rem] pt-[1px] h-[1rem]"
            />
          </Link>
          <p className="w-[30%] text-zinc-400">
            "Embark on unforgettable adventures with our expertly curated gear
            and guided treks. Discover your next epic journey today!"
          </p>
        </div>
      </div>
    </div>
  );
}
