import React from "react";

type Props = {};

function AcitvityDetail({}: Props) {
  return (
    <div className="w-11/12 md:w-9/12 mx-auto py-[5rem] text-zinc-50">
      {/* title  */}
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Heli Tour</h1>

        {/* DESC  */}
        <p className="text-lg  text-zinc-300">
          Embark on an unforgettable helicopter adventure across Nepal's
          stunning landscapes. Soar high above the clouds for a bird's-eye view
          of the Himalayas, including the iconic Mount Everest. Our helicopter
          tours provide a luxurious and effortless way to explore remote
          regions, sacred sites, and picturesque valleys in just a few hours.
          Perfect for those who want to experience mountain beauty without the
          physical challenges of trekking.
        </p>
      </div>

      {/* gallery  */}
      <div className=" w-full py-10">
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 auto-rows-[20rem] gap-5">
          {Gallery.map((item, i) => (
            <div
              key={i}
              className={`works  w-full rounded-3xl overflow-hidden group flex flex-col gap-[1rem] justify-start items-center relative cursor-pointer ${
                i === 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
              } ${i === 2 ? "md:row-span-2" : ""}`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] group-hover:opacity-[0] duration-300"></div>
              {/* img  */}
              <div className="w-full h-full  overflow-hidden flex justify-center items-center">
                <img
                  className="object-cover object-top md:object-center hover:scale-[10rem] w-full h-full"
                  src={item.img}
                  alt="project"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AcitvityDetail;

const Gallery = [
  {
    id: 1,
    name: "Paragliding",
    desc: "Experience the thrill of paragliding over scenic landscapes and enjoy a bird's eye view of nature.",
    img: "https://images.unsplash.com/photo-1573507712396-586c2fc99b36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Rafting",
    desc: "Enjoy the excitement and adrenaline rush of white water rafting through challenging rapids.",
    img: "https://images.unsplash.com/photo-1508166466920-f65aa51f727c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Mountain Biking",
    desc: "Ride through rugged trails and explore mountainous terrain on a mountain bike.",
    img: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TU9VTlRBSU4lMjBCSUtJTkd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Heli Tour",
    desc: "Take a leisurely ride or a competitive race on a bicycle, enjoying the freedom of the open road.",
    img: "https://images.unsplash.com/photo-1534867758447-521fe739fb14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Heli Tour",
    desc: "Take a leisurely ride or a competitive race on a bicycle, enjoying the freedom of the open road.",
    img: "https://images.unsplash.com/photo-1534867758447-521fe739fb14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
