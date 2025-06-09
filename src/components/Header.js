import { useEffect, useState } from "react";

function Header() {
  const [mostrarFondo, setMostrarFondo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMostrarFondo(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#giras", label: "Giras" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        mostrarFondo ? "bg-[#7E22CE] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl">ANIER</div>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
