"use client";
import React, { useState } from "react";
import CameraLen from "@/components/home-page/CameraLen";
import ScrollDownArrow from "@/components/home-page/ScrollDownArrow";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const headerContainer = useRef(null);
  const categoriesContainer = useRef(null);

  useGSAP(
    () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: headerContainer.current,
            scrub: true,
            pin: true,
            end: "+=1000",
            pinSpacing: false,
          },
        })
        .to(".camera-len", { autoAlpha: 0 });
    },
    { scope: headerContainer }
  );

  // useGSAP(
  //   () => {
  //     let targets = gsap.utils.toArray(".container");
  //     targets.map((t) => {
  //       gsap.from(".title", {
  //         autoAlpha: 0,
  //         scrollTrigger: {
  //           trigger: t,
  //           pin: true,
  //           scrub: true,
  //         },
  //       });
  //     });
  //   },
  //   { scope: categoriesContainer }
  // );

  return (
    <>
      <header
        ref={headerContainer}
        className="relative h-screen max-w-7xl mx-auto  w-full"
      >
        {/* Camera len */}
        <div className="absolute inset-0 m-auto aspect-square min-w-[30rem] w-[40vw] max-w-[45rem] z-40">
          <CameraLen />
        </div>
        {/* Scroll down arrow */}
        <ScrollDownArrow />
      </header>
      <section
        ref={categoriesContainer}
        className="pt-[50vh] max-w-7xl mx-auto  w-full"
      >
        <div className="container flex items-center justify-center bg-yellow-100 h-screen mx-auto ">
          <h2 className="title">dupa</h2>
        </div>
        <div className="container flex items-center justify-center bg-yellow-100 h-screen mx-auto ">
          <h2 className="title">dupa</h2>
        </div>
        <div className="container flex items-center justify-center bg-yellow-100 h-screen mx-auto ">
          <h2 className="title">dupa</h2>
        </div>
      </section>
    </>
  );
}
