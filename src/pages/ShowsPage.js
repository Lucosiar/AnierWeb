import { motion } from "framer-motion";
import CountDownTimer from "../components/CountDownTimer";
import concerts from "../data/concerts";
import ConcertCard from "../components/ConcertCard";

const ShowsPage = () => {
  const nextConcert = concerts.find(c => new Date(c.date) > new Date());

  return (
    <div className="text-white">
      {/* Hero con imagen y contador */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/img/anier_cartel.jpeg"
          alt="Cartel gira"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
        />
        <motion.div
          className="z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Próximos conciertos 2025</h1>

          {nextConcert ? (
            <div className="inline-block bg-black/70 px-6 py-4 rounded-xl backdrop-blur-md">
              <p className="text-lg mb-1">Próximo concierto:</p>
              <p className="font-semibold mb-3">📍{nextConcert.city} – {nextConcert.country}</p>
              <div className="flex justify-center">
                <CountDownTimer targetDate={nextConcert.date} />
              </div>
            </div>
          ) : (
            <p className="text-lg">No hay conciertos próximos.</p>
          )}
        </motion.div>
      </section>

      {/* Lista de conciertos */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">Fechas de la gira</h2>
        <div className="space-y-6">
          {concerts.map(concert => (
            <ConcertCard key={concert.id} concert={concert} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowsPage;
