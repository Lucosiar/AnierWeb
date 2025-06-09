import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer role="contentinfo" className="text-center py-4 text-gray-300 text-sm bg-gray-800">
      {new Date().getFullYear()} Anier <br />     
      <p>Esto es una prueba</p>
    </footer>
  );
}

export default Footer;
