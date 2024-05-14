import React from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function FadeInImage({
  src,
  size = 4,
}: {
  src: StaticImport;
  size?: 1 | 2 | 3 | 4;
}) {
  console.log(typeof src);
  return (
    <div>
      {/* Cover */}
      <div className="absolute z-10 w-full h-full bg-yellow-100" />
      <Image src={src} alt="" className={`block`} />
    </div>
  );
}
