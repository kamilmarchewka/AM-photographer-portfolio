import React, { ReactElement } from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import animation from "gsap";

export default function FadeInImage({
  src,
  size = 4,
}: {
  src: StaticImport;
  size?: 1 | 2 | 3 | 4;
}) {
  return (
    <div>
      {/* Cover */}
      <div className="photo-cover absolute z-10 w-full h-full bg-yellow-100" />
      <Image src={src} alt="" className={`block`} />
    </div>
  );
}
