"use client";
import Hero from "@/components/website/Hero";
import HomeMain from "@/components/website/Home/HomeMain";
// import TrekHero from "@/components/website/TrekHero";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <TrekHero /> */}
    </main>
  );
}