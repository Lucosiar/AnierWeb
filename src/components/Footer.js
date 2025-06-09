import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/20 text-sm text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Nombre o logo */}
        <div>
          <p className="text-white font-bold text-xl">Anier</p>
        </div>

        {/* Redes sociales en el centro */}
        <div className="flex justify-center space-x-4">
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

        {/* Contacto y Política de privacidad a la derecha */}
        <div className="text-right space-y-2">
          <Link
            to="/contacto"
            className="block text-white font-semibold hover:underline"
          >
            Contacto
          </Link>
          <Link
            to="/politica-privacidad"
            className="block text-white font-semibold hover:underline"
          >
            Política de privacidad
          </Link>
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
