"use client"
import AllTrekMain from "@/components/website/AllTrek/AllTrekMain";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <AllTrekMain />
    </div>
  );
}

export default page;
