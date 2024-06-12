import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
function About() {
    return (
        <div>
            <div className="w-full text-zinc-50 bg-black h-screen flex justify-center items-center">
                <div className="w-full z-0 absolute h-full overflow-hidden">
                    <Image
                        width={1000}
                        height={1000}
                        src="https://images.unsplash.com/photo-1526963057617-9bc28fd645e5?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="hero-background-image"
                        className="w-full h-full object-cover object-center"
                    ></Image>
                    <div className="absolute top-0 left-0 opacity-[0.7] w-full h-full bg-black z-10"></div>
                </div>
                <div className="w-11/12 relative mt-[-5%]  mx-auto overflow-hidden  px-5 flex justify-center items-center flex-col">
                    {/* title  */}
                    <div className="w-full mb-[1rem]   flex justify-center  items-start text-nowrap">
                        <span className=" text-zinc-50 w-full text-center  text-2xl md:text-5xl uppercase font-semibold trackong-wider">
                            About us
                        </span>
                    </div>
                    {/* DESC  */}
                    <div className="w-full md:w-8/12   flex justify-center text-center  items-start text-wrap">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.5 }}
                            className=" text-zinc-200 opacity-0 text-[1.5rem] font-medium w-full">
                            Welcome to Travel Trek, your gateway to extraordinary adventures and unforgettable experiences. We believe in the transformative power of travel and aim to inspire your journeys with expertly curated itineraries and personalized service. Whether you're seeking thrilling explorations, serene landscapes, or vibrant cultural immersions, Travel Trek is here to make your travel dreams a reality.
                        </motion.p>
                    </div>

                </div>

                <div className="absolute bottom-0 left-0 w-full h-[15rem] bg-gradient-to-t from-black to-transparent"></div>

            </div>
        </div>
    )
}

export default About