"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import OtherActivities from "./OtherActivities";
type Props = {};

function OtherActivitesMain({}: Props) {
  return (
    <div className="w-full pb-10">
      <div className="w-8/12 mx-auto text-zinc-50  py-[5rem] flex gap-5 justify-center text-center items-center">
        <div className="w-full h-[60vh] flex rounded-3xl overflow-hidden  bg-[#111b06]">
          <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1526963057617-9bc28fd645e5?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero-background-image"
            className="w-[50%] h-full object-cover object-center"
          ></Image>

          <div className="flex text-start justify-center flex-col gap-3 w-[50%] p-10">
            <span className="font-semibold text-2xl">
              Exciting Outdoor Adventures
            </span>
            <p className="text-lg text-zinc-100">
              Explore activities like rafting, paragliding, and more. Celebrate
              stories inspired by nature, encouraging meaningful connections and
              environmental stewardship through thrilling outdoor adventures.
            </p>

            <Link
              href="contact_us"
              className="bg-zinc-300 mt-3 hover:gap-3 flex justify-center items-center gap-1 h-[2.8rem] text-sm font-medium rounded-full w-[8rem] hover:bg-white border-2 text-black  hover:border-white border-black duration-300"
            >
              <span>Contact us</span>
              <Icon
                icon="mdi:arrow-right"
                className="w-[1rem] pt-[1px] h-[1rem]"
              />
            </Link>
          </div>
        </div>
      </div>

      <OtherActivities />
    </div>
  );
}

export default OtherActivitesMain;
