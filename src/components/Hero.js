function Hero() {
    return (
      <div className="relative w-full h-screen" id="home">
        <img
          src="./img/anier_back.jpg"
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-white text-7xl font-bold drop-shadow-lg transition-all duration-500">
            ANIER
          </h1>
          <div className="flex space-x-6">
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
    );
  }
  
  export default Hero; 