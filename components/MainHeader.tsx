"use client";
import React from "react";
import CameraLen from "./CameraLen";
import ScrollDownArrow from "./ScrollDownArrow";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div className="absolute inset-0 m-auto aspect-square min-w-[30rem] w-[40vw] max-w-[45rem]">
        <CameraLen />
      </div>
      <ScrollDownArrow />
    </section>
  );
}
