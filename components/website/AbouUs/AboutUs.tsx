"use client"
import Image from 'next/image'
import React from 'react'
import { Icon } from "@iconify/react";
type Props = {}

function AboutUs({ }: Props) {
    return (
        <>
            <div className='w-8/12 mx-auto text-zinc-50 py-[5rem] flex gap-5 justify-center text-center items-center'>
                <div className='w-full h-[50vh]'>
                    <Image
                        width={1000}
                        height={1000}
                        src="https://images.unsplash.com/photo-1526963057617-9bc28fd645e5?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="hero-background-image"
                        className="w-full h-full object-cover object-center"
                    ></Image>
                </div>
                <p className='text-start w-full text-xl text-zinc-100'>Go travel is an independent media company championing outdoor lifestyle, environmental stewardship and regenerative living. Through celebrating the stories of those inspired by nature, we encourage people to connect with the natural world in meaningful ways so they may become active stewards of our planet.</p>
            </div>


            {/* MISSION  */}
            <div className='w-8/12 mx-auto  grid gap-5 text-zinc-50 grid-cols-2 place-content-start place-items-center'>
                <div className='w-full h-[25vh] border text-start p-10 border-zinc-800  backdrop-blur-sm rounded-3xl flex flex-col justify-center gap-2'>
                    <div className='flex gap-2 items-center'>
                        <Icon icon="octicon:goal-16" className='w-[2rem] h-[2rem]' />
                        <span className='text-xl font-semibold'>Our mission</span>
                    </div>
                    <p className='text-sm text-zinc-300'>Our mission is to be your guide on incredible Himalayan journeys, to help you live experiences that spark personal growth, and to build lasting connections within our community</p>
                </div>
                <div className='w-full h-[25vh] border text-start p-10 border-zinc-800  backdrop-blur-sm rounded-3xl flex flex-col justify-center gap-2'>
                    <div className='flex gap-2 items-center'>
                        <Icon icon="hugeicons:vision" className='w-[2rem] h-[2rem]'/>
                        <span className='text-xl font-semibold'>Our vision</span>
                    </div>
                    <p className='text-sm text-zinc-300'>Our vision to be the top storytellers of the Himalayas, to motivate upcoming generations to embrace adventure and find their own Everest withing.</p>
                </div>
            </div>


            {/* GUIDERS  */}
            <div className='w-8/12 mx-auto py-[5rem] text-center  text-zinc-50 '>
                <h1 className='mb-[2rem] w-full text-center  text-2xl md:text-4xl uppercase font-semibold'>Our Expertise Guiders</h1>
                <div className='grid gap-5 grid-cols-3 place-content-start place-items-center'>
                    <div className='w-full h-[15vh] border text-start p-5 border-zinc-800  backdrop-blur-sm rounded-3xl flex justify-start items-center  gap-5'>
                        <div className='w-[3rem] h-[3rem] overflow-hidden rounded-full'><img src='https://res.cloudinary.com/dubzpy7hn/image/upload/v1709027442/epeak-uploads/20240227T095041988Z_udayalimbu.jpg' className='w-full h-full object-cover object-center'></img></div>
                        <div className='flex flex-col gap-1'>
                            {/* name  */}
                            <span className='font-medium'>Name</span>
                            {/* role  */}
                            <span className='text-sm text-zinc-400'>Managing director</span>
                        </div>
                    </div>
                    <div className='w-full h-[15vh] border text-start p-5 border-zinc-800  backdrop-blur-sm rounded-3xl flex justify-start items-center  gap-5'>
                        <div className='w-[3rem] h-[3rem] overflow-hidden rounded-full'><img src='https://res.cloudinary.com/dubzpy7hn/image/upload/v1709027442/epeak-uploads/20240227T095041988Z_udayalimbu.jpg' className='w-full h-full object-cover object-center'></img></div>
                        <div className='flex flex-col gap-1'>
                            {/* name  */}
                            <span className='font-medium'>Name</span>
                            {/* role  */}
                            <span className='text-sm text-zinc-400'>Managing director</span>
                        </div>
                    </div>
                    <div className='w-full h-[15vh] border text-start p-5 border-zinc-800  backdrop-blur-sm rounded-3xl flex justify-start items-center  gap-5'>
                        <div className='w-[3rem] h-[3rem] overflow-hidden rounded-full'><img src='https://res.cloudinary.com/dubzpy7hn/image/upload/v1709027442/epeak-uploads/20240227T095041988Z_udayalimbu.jpg' className='w-full h-full object-cover object-center'></img></div>
                        <div className='flex flex-col gap-1'>
                            {/* name  */}
                            <span className='font-medium'>Name</span>
                            {/* role  */}
                            <span className='text-sm text-zinc-400'>Managing director</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs


