"use client";
import React, { useState } from "react";
import CameraLen from "@/components/home-page/CameraLen";
import ScrollDownArrow from "@/components/home-page/ScrollDownArrow";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HomePage() {
  const [tl, setTl] = useState<any>();

  useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);

    const headerTl = gsap.timeline();
  }, []);

  function addToTimeline(animation: { animation: any }) {
    tl && tl.add(animation);
  }
  return (
    <>
      <header className="relative h-screen max-w-7xl mx-auto  w-full">
        {/* Camera len */}
        <div className="absolute inset-0 m-auto aspect-square min-w-[30rem] w-[40vw] max-w-[45rem] z-40">
          <CameraLen addToTimeline={addToTimeline} />
        </div>
        {/* Scroll down arrow */}
        <ScrollDownArrow />
      </header>
      <section>
        <div className="bg-yellow-100 h-screen">
          <h2>dupa</h2>
        </div>
      </section>
    </>
  );
}
