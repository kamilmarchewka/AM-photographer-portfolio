"use client";
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function PhotosSections() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".title", {
        autoAlpha: 0,
        x: 200,
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top top",
          end: "+=1000",
          pin: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <>
      <section
        ref={container}
        className="flex justify-center items-center min-h-screen bg-green-100"
      >
        <h1 className="title">Kategoria 1</h1>
      </section>
    </>
  );
}
