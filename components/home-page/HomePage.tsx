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

  function arrowAnim() {
    const tl = gsap
      .timeline({
        defaults: {
          ease: "power2.in",
        },
      })
      .set(".arrow", {
        strokeDasharray: 1481,
      })
      .from(".arrow", {
        strokeDashoffset: 1481,
        duration: 2,
      })
      .from(
        ".arrow-text",
        {
          autoAlpha: 0,
          scale: 0.95,
          stagger: 0.02,
          duration: 0.2,
        },
        "<80%"
      );

    return tl;
  }
  function lenAnim() {
    const tl = gsap
      .timeline({
        ease: "none",
        scrollTrigger: {
          trigger: headerContainer.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: true,
        },
      })
      .to(".cameraLen", { rotate: 180, scale: 8 })
      .to([".cameraLen", ".arrow"], { autoAlpha: 0 }, "<");

    return tl;
  }

  useGSAP(
    () => {
      const mainTl = gsap.timeline();
      mainTl.add(arrowAnim());
      mainTl.add(lenAnim());
    },
    { scope: headerContainer }
  );

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
      <section>
        <div className="bg-yellow-100 h-screen">
          <h2>dupa</h2>
        </div>
      </section>
    </>
  );
}
