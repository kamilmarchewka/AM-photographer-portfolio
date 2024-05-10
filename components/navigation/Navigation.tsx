import NavLink from "./NavLink";

export default function Navigation() {
  const navLinks = [
    { text: "strona główna", href: "/" },
    { text: "galeria", href: "/galeria" },
    { text: "kontakt", href: "/kontakt" },
  ];
  return (
    <div className="flex justify-between items-center pl-7">
      <span>LOGO</span>
      <nav className="">
        <ul className="flex gap-5">
          {navLinks.map(({ text, href }) => (
            <NavLink key={text} href={href} text={text}></NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}
