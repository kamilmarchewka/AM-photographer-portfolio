"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TProps = {
  text: string;
  href: string;
};

export default function NavLink({ text, href }: TProps) {
  const pathname = usePathname();

  if (pathname == href) console.log(pathname, href);

  return (
    <Link
      href={href}
      className={`group relative block px-7 py-4 overflow-hidden ${
        pathname == href ? "bg-black text-white" : ""
      } transition-colors `}
    >
      <span
        className={`absolute left-0 top-0 block w-full h-1/2 bg-black/10 transform -translate-x-[calc(100%+2px)] ${
          pathname == href
            ? ""
            : "group-hover:animate-[navLinkUpper_250ms_linear_1]"
        }`}
      />
      <span
        className={`absolute left-0 bottom-0 block w-full h-1/2 bg-black/10 transform translate-x-[calc(100%+2px)] ${
          pathname == href
            ? ""
            : "group-hover:animate-[navLinkLower_250ms_linear_1]"
        }`}
      />
      <span className="relative">{text}</span>
    </Link>
  );
}
