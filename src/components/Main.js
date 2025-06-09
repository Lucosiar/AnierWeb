import Hero from "./Hero";
import Shows from "./Shows";
import Songs from "./Songs";
import Album from "./Album";
import Newsletter from "./Newsletter";

function Main() {
    return (
      <div className="mx-auto space-y-16">
        <Hero />
        <div>
          <section id="shows"> 
            <Shows />
          </section>
          <section id="songs">
            <Songs />
          </section>
          <section id="album">
            <Album />
          </section>
          <section id="newsletter">
            <Newsletter />
          </section>
        </div>
        
        
        
      </div>
    );
  }
  
  export default Main;