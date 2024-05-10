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
    <li className="">
      {
        <Link
          href={href}
          className={`block px-7 py-4 ${pathname == href ? "bg-red-500" : ""}`}
        >
          {text}
        </Link>
      }
    </li>
  );
}
