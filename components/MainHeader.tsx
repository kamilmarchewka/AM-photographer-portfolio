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

export default function MainHeader({ addTimeline }: { addTimeline: any }) {
  const container = useRef(null);
  useGSAP(
    () => {
      const mainTl = gsap.timeline();

      mainTl.set(".arrow", {
        strokeDasharray: 1481,
      });
      mainTl.from(".arrow", {
        strokeDashoffset: 1481,
        duration: 2,
        ease: "power2.in",
      });
      mainTl.from(
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

      addTimeline(mainTl);

      // const tlScroll = gsap.timeline({
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: container.current,
      //     start: "top top",
      //     end: "+=1000",
      //     pin: true,
      //     scrub: true,
      //   },
      // });
      // tlScroll.to(".cameraLen", {
      //   autoAlpha: 0,
      //   scale: 7,
      //   rotate: 180,
      // });
      // tlScroll.to(".scrollDownArrow", { autoAlpha: 0 }, "<");
      // tlScroll.set(".scrollDownArrow", { display: "none" });
      // tlScroll.set(".cameraLen", { display: "none" });
    },
    { scope: container, dependencies: addTimeline }
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
    </section>
  );
}
