"use client";
import React from "react";
import { Icon } from "@iconify/react";
type Props = {};

function Contact({}: Props) {
  return (
    <>
      <div className="w-full  mx-auto   flex text-zinc-950 justify-center items-center">
        <div className="w-8/12 p-10 mt-[5rem] relative  rounded-3xl shadow-[inset_-12px_-8px_40px_#46464620]  bg-zinc-100">
          <h1 className="mb-[2rem] w-full text-start  text-2xl md:text-4xl uppercase font-semibold">
            CONTACT US
          </h1>
          <form action="" className="w-[40%]">
            {/* name  */}
            <div className="flex flex-col gap-2 mt-5">
              <span className="font-medium text-sm text-zinc-900">Name</span>
              <input
                type="text"
                className="outline-none border-b bg-transparent text-sm py-2 text-zinc-700"
                placeholder="john doe"
              />
            </div>
            {/* email  */}
            <div className="flex flex-col gap-2 mt-5">
              <span className="font-medium text-sm text-zinc-900">Email</span>
              <input
                type="text"
                className="outline-none border-b bg-transparent text-sm py-2 text-zinc-700"
                placeholder="johndoe@gmail.com"
              />
            </div>
            {/* message  */}
            <div className="flex flex-col gap-2 mt-5">
              <span className="font-medium text-sm text-zinc-900">Message</span>
              <textarea
                style={{
                  resize: "none",
                }}
                className="outline-none border-b bg-transparent h-[10vh] text-sm py-2 text-zinc-700"
                placeholder="Write something here.."
              />
            </div>

            <button
              type="submit"
              className="mt-10 bg-zinc-800 h-[2.8rem] text-sm font-medium rounded-full w-[10rem]  text-zinc-300  hover:text-zinc-50 hover:bg-zinc-950 hover:scale-95  duration-300"
            >
              SUBMIT
            </button>
          </form>
          {/* map  */}
          <div className="w-[60%] h-[50vh] bg-zinc-500 absolute top-[50%] overflow-hidden translate-x-[-50%] translate-y-[-50%] right-[-35%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl flex justify-items-center items-center z-[20]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28251.39495062205!2d85.30821117581752!3d27.73505395883926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19db1ac7cfc1%3A0x3f3557a1377b8d05!2sCreative%20Website%20Design%20in%20Nepal%20-%20WebX%20Nepal!5e0!3m2!1sen!2snp!4v1718262577899!5m2!1sen!2snp"
              width="600"
              height="450"
              loading="lazy"
              //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* bottom  */}

      <div className="w-8/12 mx-auto h-[20vh] mt-[5rem] ">
        <h1 className="mb-[1.5rem]  text-zinc-100 w-full text-start border-b border-zinc-800 py-3  text-2xl md:text-2xl uppercase font-semibold">
          Express your thoughts! Send us your message!
        </h1>

        <div className="w-full flex text-zinc-400 justify-between">
          {/* location  */}
          <span className="text-sm font-semibold hover:text-zinc-50 hover:scale-105 duration-300 cursor-pointer">
            Bhangal, Kathmandu, Nepal
          </span>

          {/* phone  */}
          <span className="text-sm font-semibold hover:text-zinc-50 hover:scale-105 duration-300 cursor-pointer">
            +977-9761725425
          </span>
          {/* gmail  */}
          <span className="text-sm font-semibold hover:text-zinc-50 hover:scale-105 duration-300 cursor-pointer">
            info@gotravel.com
          </span>

          {/* socio icon  */}
          <div className="flex gap-2 justify-center items-center">
            <Icon
              icon="mdi:facebook"
              className="w-[1.5rem] h-[1.5rem] hover:text-zinc-50 hover:scale-105 duration-300 cursor-pointer"
            />
            <Icon
              icon="mdi:instagram"
              className="w-[1.5rem] h-[1.5rem] hover:text-zinc-50 hover:scale-105 duration-300 cursor-pointer"
            />
            <Icon
              icon="mdi:whatsapp"
              className="w-[1.5rem] h-[1.5rem] hover:text-zinc-50 hover:scale-105 duration-300 cursor-pointer"
            />
            <Icon
              icon="mdi:linkedin"
              className="w-[1.5rem] h-[1.5rem] hover:text-zinc-50 hover:scale-105 duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
