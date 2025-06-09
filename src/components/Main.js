import Hero from "./Hero";
import Shows from "./Shows";
import Songs from "./Songs";

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
        </div>
        
        
        
      </div>
    );
  }
  
  export default Main;