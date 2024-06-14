import React from "react";
import AllTrekCard from "./AllHikeCard";
import Image from "next/image";

type Props = {};

function AllHikeMain({}: Props) {
  return (
    <div className="w-full pb-10">
      {/* TOP IMAGE  */}
      <div className="w-full text-zinc-50 h-[50vh] relative flex justify-center items-center">
        <div className="w-full z-0 absolute h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero-background-image"
            className="w-full h-full object-cover object-center"
          ></img>
          <div className="absolute top-0 left-0 opacity-[0.5]  w-full h-full bg-zinc-950 z-10"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-[10rem] bg-gradient-to-b from-black to-transparent"></div>
        <h1 className="w-full text-center mb-[2rem]  text-2xl md:text-4xl uppercase font-semibold">
          Discover epic Hikes{" "}
        </h1>
      </div>

      {/* NAVIGATION  activities */}
      <div className="w-10/12 mx-auto py-10 flex justify-center">
        <div className="w-full flex gap-5 justify-center items-center flex-wrap mx-auto">
          {FilterSeasonHike.map((item) => (
            <div
              key={item.id}
              className="w-[10rem] rounded-full cursor-pointer group relative overflow-hidden flex justify-center items-center h-[7vh] bg-slate-300"
            >
              <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-[0.7] bg-zinc-950 opacity-[0.4] z-10 duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  width={1000}
                  height={1000}
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                ></Image>
              </div>
              {/* name  */}
              <div className="w-full relative p-4 z-20 font-medium text-sm  text-zinc-50 h-full flex justify-center items-center">
                {item.season}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CARDS  */}
      <AllTrekCard />
    </div>
  );
}

export default AllHikeMain;

const FilterSeasonHike = [
  {
    id: 1,
    name: "Spring Paragliding",
    desc: "Experience the thrill of paragliding over scenic landscapes and enjoy a bird's eye view of nature.",
    img: "https://images.unsplash.com/photo-1573507712396-586c2fc99b36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    season: "Spring",
  },
  {
    id: 2,
    name: "Summer Rafting",
    desc: "Enjoy the excitement and adrenaline rush of white water rafting through challenging rapids.",
    img: "https://images.unsplash.com/photo-1508166466920-f65aa51f727c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    season: "Summer",
  },
  {
    id: 3,
    name: "Autumn Mountain Biking",
    desc: "Ride through rugged trails and explore mountainous terrain on a mountain bike.",
    img: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TU9VTlRBSU4lMjBCSUtJTkd8ZW58MHx8MHx8fDA%3D",
    season: "Autumn",
  },
  {
    id: 4,
    name: "Winter Heli Tour",
    desc: "Take a leisurely ride or a competitive race on a bicycle, enjoying the freedom of the open road.",
    img: "https://images.unsplash.com/photo-1534867758447-521fe739fb14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    season: "Winter",
  },
];
