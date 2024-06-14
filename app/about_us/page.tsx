"use client"
import AboutUs from "@/components/website/AbouUs/AboutUs";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="bg-zinc-950">
      <AboutUs />
    </div>
  );
}

export default page;
