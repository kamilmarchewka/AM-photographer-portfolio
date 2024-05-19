"use client";
import React, { useState } from "react";

import MainHeader from "./MainHeader";
import PhotosSections from "./PhotosSections";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Timeline = any;

export default function MainTl() {
  const [tl, setTl] = useState<undefined | Timeline>();

  useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
  }, []);

  function addTimeline(timeline: { timeline: any }) {
    tl && tl.add(timeline);
  }

  return (
    <>
      <MainHeader addTimeline={addTimeline} />
      <PhotosSections />
    </>
  );
}
