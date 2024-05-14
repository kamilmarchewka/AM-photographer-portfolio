"use client";
import React from "react";
import CameraLen from "./CameraLen";
import ScrollDownArrow from "./ScrollDownArrow";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeInImage from "./FadeInImage";

import p1 from "/public/p1.jpg";
import p2 from "/public/p2.jpg";
import p3 from "/public/p3.jpg";
import p4 from "/public/p4.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function MainHeader() {
  const container = useRef(null);
  useGSAP(
    () => {
      const tlIntro = gsap.timeline();
      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
        },
      });

      tlIntro.set(".arrow", {
        strokeDasharray: 1481,
      });
      tlIntro.from(".arrow", {
        strokeDashoffset: 1481,
        duration: 2,
        ease: "power2.in",
      });
      tlIntro.from(
        ".arrow-text",
        {
          autoAlpha: 0,
          scale: 0.95,
          ease: "power2.in",
          stagger: 0.02,
          duration: 0.2,
        },
        "<80%"
      );

      tlScroll.to(".cameraLen", {
        autoAlpha: 0,
        scale: 7,
        rotate: 180,
      });
      tlScroll.to(".scrollDownArrow", { autoAlpha: 0 }, "<");
      tlScroll.set(".scrollDownArrow", { display: "none" });
      tlScroll.set(".cameraLen", { display: "none" });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen max-w-7xl mx-auto  w-full"
    >
      {/* Camera len */}
      <div className="absolute inset-0 m-auto aspect-square min-w-[30rem] w-[40vw] max-w-[45rem] z-40">
        <CameraLen />
      </div>

      {/* Scroll down arrow */}
      <ScrollDownArrow />

      {/* Images */}
      <div className="w-full h-full bg-yellow-400 grid grid-cols-10 grid-rows-10 grid-tem">
        <div className="absolute left-[3rem] top-[4rem] w-[20rem]">
          <FadeInImage src={p3} />
        </div>
        <div className="absolute left-[24rem] bottom-[2rem] w-[12rem]">
          <FadeInImage src={p4} />
        </div>
        <div className="absolute right-[4rem] bottom-[5rem] w-[15rem]">
          <FadeInImage src={p2} />
        </div>
        <div className="absolute right-[13rem] top-[6rem] w-[9rem]">
          <FadeInImage src={p1} />
        </div>
      </div>
    </section>
  );
}
