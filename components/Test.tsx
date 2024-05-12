"use client";
import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          pin: true,
        },
      });

      tl.to(".lean", {
        rotate: 360,
        scale: 8,
        autoAlpha: 0,
      });
      tl.from(
        ".photo",
        {
          autoAlpha: 0,
        },
        "-=55%"
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className=" bg-blue-50 w-full h-screen flex items-center justify-center"
    >
      <div className="lean bg-red-300 w-60 h-60"></div>
      <div className="photo w-60 h-60 bg-yellow-700"></div>
    </div>
  );
}
