const conciertos2025 = [
  { fecha: "10 junio 2025", ciudad: "Madrid", lugar: "La Riviera", enlace: "https://tickets.madrid" },
  { fecha: "25 julio 2025", ciudad: "Barcelona", lugar: "Razzmatazz", enlace: "https://tickets.barcelona" },
  { fecha: "12 septiembre 2025", ciudad: "Valencia", lugar: "Sala Repvblicca", enlace: "https://tickets.valencia" },
];

function Shows() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Próximos Conciertos 2025</h2>
      <img
        src="/img/anier_tour.webp"
        alt="Pancarta de tour"
        className="h-full w-auto max-h-[425px] object-cover rounded-lg shadow-lg "
      />
      <div className="grid md:grid-cols-3 gap-6">
        {conciertos2025.map(({ fecha, ciudad, lugar, enlace }, i) => (
          <div key={i} className="bg-[#1e1e1e] rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
              <p className="text-red-500 font-semibold">{fecha}</p>
              <h3 className="text-xl font-bold">{ciudad}</h3>
              <p className="text-gray-400 mb-4">{lugar}</p>
            </div>
            <a
              href={enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
            >
              Comprar Entradas
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shows;