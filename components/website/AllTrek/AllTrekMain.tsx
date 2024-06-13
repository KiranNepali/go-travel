import React from "react";
import AllTrekCard from "./AllTrekCard";

type Props = {};

function AllTrekMain({}: Props) {
  return (
    <div className="w-full pb-10">
      {/* TOP IMAGE  */}
      <div className="w-full text-zinc-50 h-[50vh] relative">
        <div className="w-full z-0 absolute h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1690842855840-0b56f4b2a208?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero-background-image"
            className="w-full h-full object-cover object-bottom"
          ></img>
          <div className="absolute top-0 left-0 opacity-[0.5]  w-full h-full bg-zinc-950 z-10"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-[10rem] bg-gradient-to-b from-black to-transparent"></div>
      </div>

      <h1 className="w-full text-center mb-[2rem]  text-2xl md:text-4xl uppercase font-semibold">
        Discover epic treks{" "}
      </h1>
      {/* CARDS  */}
      <AllTrekCard />
    </div>
  );
}

export default AllTrekMain;
