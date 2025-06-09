function Album() {
    const fotos = [
      "/img/anier_back.jpg",
      "/img/anier_cartel.jpeg",
      "/img/anier_tour.webp",
      "/img/portada_disco.png",
      "/img/anier5.webp",
      "/img/anier6.jpeg",
    ];
  
    return (
      <section className="max-w-5xl mx-auto p-4">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Álbum @anier_deer</h2>
        <div className="grid grid-cols-3 gap-4">
          {fotos.map((src, i) => (
            <div key={i} className="w-full aspect-square overflow-hidden rounded-md">
              <img
                src={src}
                alt={`Foto ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Album;
  