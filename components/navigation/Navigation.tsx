import NavLink from "./NavLink";

export default function Navigation() {
  const navLinks = [
    { text: "strona główna", href: "/" },
    { text: "galeria", href: "/galeria" },
    { text: "kontakt", href: "/kontakt" },
  ];
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between items-center pl-7 bg-white z-50 ">
      <span>LOGO</span>
      <nav className="">
        <ul className="flex">
          {navLinks.map(({ text, href }) => (
            <li>
              <NavLink key={text} href={href} text={text}></NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
