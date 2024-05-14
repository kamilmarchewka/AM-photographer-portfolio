"use client";
import React from "react";
import CameraLen from "./CameraLen";
import ScrollDownArrow from "./ScrollDownArrow";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function MainHeader() {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.set(".arrow", {
        strokeDasharray: 1481,
      });
      tl.from(".arrow", {
        strokeDashoffset: 1481,
        duration: 2,
      });
      tl.from(
        ".arrow-text",
        {
          autoAlpha: 0,
          scale: 0.95,
          stagger: 0.02,
        },
        "<40%"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className=" relative max-h-screen max-w-7xl mx-auto bg-red-100 w-full"
    >
      <CameraLen />
      <ScrollDownArrow />
    </section>
  );
}
