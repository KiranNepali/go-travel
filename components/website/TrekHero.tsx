// "use client";
// import { useGSAP } from "@gsap/react";
// import { gsap, Expo } from "gsap";
// import React, { useRef, useState } from "react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { Icon } from "@iconify/react";

// // images
// import HeroMustangBg from "@/public/HeroImage/HeroBg1.png";
// import HeroPhoksundoBg from "@/public/HeroImage/HeroPhoksundo.png";
// import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";
// import HeroTilichoBg from "@/public/HeroImage/HeroTilicho.png";

// import LogoImage from "@/public/travel-logo.png";

// import Image from "next/image";
// import HomeMain from "./Home/HomeMain";
// type Props = {};

// gsap.registerPlugin(ScrollTrigger);
// export default function TrekHero({ }: Props) {
//     const mainContainerRef = useRef(null);
//     const pinContainerRef = useRef(null);
//     const slider2Ref = useRef(null);

//     useGSAP(() => {
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 // markers: true,
//                 trigger: mainContainerRef.current,
//                 pin: pinContainerRef.current,
//                 start: "top top",
//                 end: "100% top",
//                 scrub: 2,
//             },
//         });
//         tl.to(pinContainerRef.current, {
//             x: "-400vw",
//             duration: "20",
//             ease: "linear",
//         });
//         tl.to(".hi", {
//             display: "block",
//             // duration: "10",
//         });

//     });
//     const openContainerRef = useRef(null);

//     return (
//         <>



//             <div>
//                 {/* // main div */}
//                 <div
//                     ref={mainContainerRef}
//                     className="w-full relative  text-nowrap  overflow-x-hidden bg-black text-zinc-50 h-[400vh]"
//                 >
//                     {/* pin */}
//                     <div ref={pinContainerRef} className="w-[400vw] h-screen flex">
//                         <div className="w-full h-full bg-blue-600 flex justify-center items-center">
//                             <div className="w-full h-screen relative overflow-hidden">
//                                 <Image
//                                     src={HeroEverestBg}
//                                     alt="everest-image"
//                                     className="w-full h-full object-cover object-center"
//                                 ></Image>
//                                 <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
//                                     EVEREST
//                                 </span>
//                             </div>
//                         </div>
//                         <div
//                             ref={slider2Ref}
//                             className="w-full  h-full bg-yellow-600 flex justify-center items-center"
//                         >
//                             <div className="w-full h-screen relative overflow-hidden">
//                                 <Image
//                                     src={HeroPhoksundoBg}
//                                     alt="everest-image"
//                                     className="w-full h-full object-cover object-center"
//                                 ></Image>
//                                 <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] slider2Text font-black">
//                                     PHOKSUNDO
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="w-full h-full bg-red-600 flex justify-center items-center">
//                             <div className="w-full h-screen relative overflow-hidden">
//                                 <Image
//                                     src={HeroMustangBg}
//                                     alt="everest-image"
//                                     className="w-full h-full object-cover object-center"
//                                 ></Image>
//                                 <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
//                                     MUSTANG
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="w-full h-full bg-green-600 flex justify-center items-center">
//                             <div className="w-full h-screen relative overflow-hidden">
//                                 <Image
//                                     src={HeroTilichoBg}
//                                     alt="everest-image"
//                                     className="w-full h-full object-cover object-center"
//                                 ></Image>
//                                 <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
//                                     TILICHO
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <HomeMain
//                 openContainerRef={openContainerRef}
//             /> */}
//         </>
//     );
// }
