import { useState } from "react";
import "../App.css";

const canciones = [
  {
    titulo: "Quiebra",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "Descosío roto",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "Lejos",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "La razón",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "Vueltas",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "No lo sé",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "Atardecer",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "Honey",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "Shock cuerdo",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "La culpa",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
  {
    titulo: "Ruido",
    enlaces: {
      spotify: "https://spotify.com/...",
      itunes: "https://music.apple.com/...",
      youtube: "https://youtube.com/...",
      deezer: "https://deezer.com/..."
    }
  },
];

function Songs() {
  const [desplegableIndex, setDesplegableIndex] = useState(null);

  const toggleDesplegable = (index) => {
    setDesplegableIndex(desplegableIndex === index ? null : index);
  };

  return (
    <section id="shows" className="bg-[#121212] py-16 px-4 md:px-12 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        {/* Portada del disco */}
        <div className="flex-shrink-0 h-full">
           <img
              src="/img/portada_disco.png"
              alt="Portada del disco"
              className="h-full w-auto max-h-[425px] object-cover rounded-lg shadow-lg"
            />
        </div>

        {/* Info y canciones */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-2">Último Disco: <span className="text-red-500">DUSKDOWN</span></h2>
          <p className="text-gray-400 mb-6">Lanzamiento: 3 de mayo de 2025</p>

          <div className="scrollbar-custom overflow-y-auto max-h-80 px-2">
            {canciones.map((cancion, index) => (
              <div key={index} className="border-b border-gray-600 pb-2 py-2">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg">
                    {index + 1}. {cancion.titulo}
                  </span>
                  <button
                    onClick={() => toggleDesplegable(index)}
                    className="text-sm bg-red-600 hover:bg-red-800 px-3 py-1 rounded transition" 
                  >
                    Escuchar
                  </button>
                </div>

                {/* Desplegable */}
                {desplegableIndex === index && (
                  <div className="mt-2 flex gap-4 flex-wrap">
                    {Object.entries(cancion.enlaces).map(([plataforma, url]) => (
                      <a
                        key={plataforma}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-red-400 hover:underline"
                      >
                        {plataforma.charAt(0).toUpperCase() + plataforma.slice(1)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Songs;
