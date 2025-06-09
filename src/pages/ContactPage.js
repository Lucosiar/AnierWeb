import { useState } from "react";
import Newsletter from "../components/Newsletter";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Añadir funcionalidad
    alert("Mensaje enviado ✉️");
  };

  return (
    <div>
      <div className=" max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-red-600 text-4xl font-bold mb-8 text-center">Contacto</h1>
        <h2 className="text-white pb-4 text-center">Para management y bookings rellena el formulario y nos pondremos en contacto. </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            onChange={handleChange}
            value={formData.name}
            className="w-full p-3 bg-zinc-800 text-white rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-3 bg-zinc-800 text-white rounded-md"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            onChange={handleChange}
            value={formData.subject}
            className="w-full p-3 bg-zinc-800 text-white rounded-md"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje"
            onChange={handleChange}
            value={formData.message}
            className="w-full p-3 bg-zinc-800 text-white rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-zinc-300 transition"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="mt-12 text-center space-y-2 text-gray-400">
          <p>Email: <a href="mailto:hola@musicbus.es" className="text-white underline">hola@musicbus.es</a></p>
          <p>Síguenos en redes:</p>
          <div className="flex justify-center space-x-6 invert pt-1">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/svg/youtube.svg" alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="https://deezer.com" target="_blank" rel="noopener noreferrer">
                <img src="/svg/deezer.svg" alt="Deezer" className="w-8 h-8" />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                <img src="/svg/spotify2.svg" alt="Spotify" className="w-8 h-8" />
              </a>
              <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer">
                <img src="/svg/itunes.svg" alt="Apple Music" className="w-8 h-8" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src="/svg/tiktok.svg" alt="TikTok" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/svg/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default ContactPage;
