"use client";
import Image from "next/image";
import React from "react";
import LogoImage from "@/public/travel-logo.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
type Props = {};

// Define your paths
const homePath = "/";
const aboutPath = "/about";
const treksPath = "/treks";
const contactPath = "/contact";
function Footer({}: Props) {
  const navItems = [
    { name: "Home", path: homePath },
    { name: "About us", path: aboutPath },
    { name: "Treks", path: treksPath },
    { name: "Contact us", path: contactPath },
  ];

  return (
    <>
      <div className="w-full bg-zinc-950 ">
        <div className="w-full mx-auto bg-zinc-200 rounded-tr-3xl rounded-tl-3xl    relative flex items-center justify-center">
          <div className="w-11/12 mx-auto  border-t-2 border-x-2   py-10 border-zinc-80   px-4 text-zinc-950 flex flex-col">
            <div className="flex flex-col">
              <div className="flex  mb-5 flex-row justify-between">
                {/* logo  */}
                <span className="font-semibold text-sm w-[8.5rem]  opacity-[0.9]  h-[2rem] cursor-pointer  overflow-hidden">
                  <Image
                    src={LogoImage}
                    alt="travel-logo"
                    className="w-full h-full  object-cover object-center"
                  ></Image>
                </span>

                {/* links  */}
                <div className="flex  w-9/12 justify-center  gap-10 text-sm text-zinc-700 font-semibold">
                  {navItems.map((item, index) => (
                    <Link
                      href={item.path}
                      key={index}
                      className="hidden md:block uppercase hover:text-zinc-950 hover:scale-105 duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* SOCIO ICONS  */}
                <div className="flex flex-row space-x-3 pr-3 text-zinc-700 items-center justify-between">
                  <Icon
                    icon="mdi:facebook"
                    className="w-[1.5rem] h-[1.5rem] hover:text-zinc-950 hover:scale-105 duration-300 cursor-pointer"
                  />
                  <Icon
                    icon="mdi:instagram"
                    className="w-[1.5rem] h-[1.5rem] hover:text-zinc-950 hover:scale-105 duration-300 cursor-pointer"
                  />
                  <Icon
                    icon="mdi:whatsapp"
                    className="w-[1.5rem] h-[1.5rem] hover:text-zinc-950 hover:scale-105 duration-300 cursor-pointer"
                  />
                  <Icon
                    icon="mdi:linkedin"
                    className="w-[1.5rem] h-[1.5rem] hover:text-zinc-950 hover:scale-105 duration-300 cursor-pointer"
                  />
                </div>
              </div>

              <p className="w-full text-center mt-4 text-[13px] text-zinc-700 font-medium">
                Copyright © 2024 WebX
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
