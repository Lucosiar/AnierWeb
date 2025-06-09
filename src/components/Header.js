import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [mostrarFondo, setMostrarFondo] = useState(false);
  const [mostrarTitulo, setMostrarTitulo] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
    { to: "/", label: "Inicio", isHome: true },
    { to: "/#album", label: "Álbum", isAnchor: true },
    { to: "/shows", label: "Shows" },
    { to: "/contacto", label: "Contacto" },
  ];

  const handleAnchorClick = (e, to) => {
    e.preventDefault();
    const id = to.split("#")[1]; // "album"
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Ajusta según el header fijo
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Ya estás en home: scroll arriba
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // No estás en home: navega a "/" y scroll arriba tras navegación
      navigate("/");

      // Scroll arriba tras navegar: una forma simple es escuchar en el componente Home o usar timeout
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        mostrarFondo ? "bg-[#121212] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
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
            <li key={link.to}>
              {link.isHome ? (
                <a
                  href="/"
                  onClick={handleHomeClick}
                  className={`transition-all duration-300 text-white hover:text-gray-200 ${
                    mostrarTitulo ? "text-xl" : "text-lg"
                  }`}
                >
                  {link.label}
                </a>
              ) : link.isAnchor ? (
                <a
                  href={link.to}
                  onClick={(e) => handleAnchorClick(e, link.to)}
                  className={`transition-all duration-300 text-white hover:text-gray-200 ${
                    mostrarTitulo ? "text-xl" : "text-lg"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={`transition-all duration-300 text-white hover:text-gray-200 ${
                    mostrarTitulo ? "text-xl" : "text-lg"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
