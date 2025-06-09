import { motion } from 'framer-motion';
import CountdownTimer from './CountDownTimer';

const ConcertsSection = () => {
  return (
    <section className="px-4 py-12 text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Próximos Conciertos 2025
      </motion.h2>

      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="/img/cartel_concierto.webp"
          alt="Cartel próximo concierto"
          className="rounded-2xl shadow-xl max-w-full w-[400px]"
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="text-lg mb-2">Cuenta atrás para el próximo concierto</p>
        <CountdownTimer targetDate="2025-09-10T21:00:00" />
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <a
          href="/shows"
          className="inline-block bg-red-600 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Ver más fechas
        </a>
      </motion.div>
    </section>
  );
};

export default ConcertsSection;
