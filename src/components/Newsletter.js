import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setEmail("");
  };

  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6">
        {/* Bloque texto a la izquierda */}
        <div className="flex flex-col flex-shrink-0">
          <h2 className="text-red-600 text-3xl font-bold">
            Suscríbete a la news
          </h2>
          <p className="text-gray-400 mt-2 max-w-xs">
            Recibe información sobre próximos eventos y ofertas exclusivas.
          </p>
        </div>

        {/* Formulario horizontal a la derecha */}
        {enviado ? (
          <p className="text-green-500 font-semibold">¡Gracias por suscribirte! 📩</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-grow max-w-2xl">
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow p-3 rounded-l-md bg-zinc-900 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
            <button
              type="submit"
              className="bg-red-600 px-6 py-3 rounded-r-md text-white hover:bg-red-700 transition">
              Suscribirse
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
