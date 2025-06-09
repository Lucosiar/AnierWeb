import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/20 text-sm text-gray-300 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Nombre o logo */}
        <div>
          <p className="text-white font-bold text-xl">Anier</p>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <Link
            to="/contacto"
            className="text-white font-semibold mb-2 inline-block hover:underline"
          >
            Contacto
          </Link>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" fill="currentColor">
            <img src="/svg/spotify2.svg" alt="Spotify" className="w-8 h-8 invert" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/svg/youtube.svg" alt="YouTube" className="w-8 h-8 invert" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" fill="currentColor">
            <img src="/svg/instagram.svg" alt="Instagram" className="w-8 h-8 invert" />
          </a>
        </div>
      </div>

      {/* Parte inferior con derechos */}
      <div className="text-center text-xs text-gray-500 py-3">
        © {new Date().getFullYear()} Anier | Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
