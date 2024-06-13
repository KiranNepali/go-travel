import Contact from "@/components/website/Contact/Contact";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <Contact />
    </div>
  );
}

export default page;
