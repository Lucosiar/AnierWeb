import { useEffect, useState } from "react";

function Header() {
  const [mostrarFondo, setMostrarFondo] = useState(false);
  const [mostrarTitulo, setMostrarTitulo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setMostrarFondo(scrolled);
      setMostrarTitulo(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#show", label: "Shows" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        mostrarFondo ? "bg-[#121212] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Título que aparece solo al hacer scroll */}
        <div
          className={`text-red-500 font-bold text-xl transition-all duration-500 ${
            mostrarTitulo 
            ? "text-3xl opacity-100 translate-y-0" 
            : "text-lg opacity-0 -translate-y-2"
          }`}
        >
          ANIER
        </div>

        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-all duration-300 text-white hover:text-gray-200 ${
                  mostrarTitulo 
                  ? "text-xl" 
                  : "text-lg" 
                }`}
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