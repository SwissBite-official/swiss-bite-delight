import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ChocolateDroplet = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ 
      y: [0, 100, 100],
      opacity: [0, 1, 0]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: 4
    }}
    className="absolute w-4 h-4 rounded shadow-lg bg-gradient-to-br from-[#4A2319] to-[#2E1810] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-[rgba(255,255,255,0.1)] before:rounded"
  />
);

export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Chocolate pieces animation */}
      <div className="absolute inset-0 pointer-events-none">
        <ChocolateDroplet delay={0} />
        <motion.div className="absolute left-1/4 top-0">
          <ChocolateDroplet delay={1.5} />
        </motion.div>
        <motion.div className="absolute left-2/4 top-0">
          <ChocolateDroplet delay={0.8} />
        </motion.div>
        <motion.div className="absolute right-1/4 top-0">
          <ChocolateDroplet delay={2.2} />
        </motion.div>
        <motion.div className="absolute left-1/3 top-0">
          <ChocolateDroplet delay={3} />
        </motion.div>
        <motion.div className="absolute right-1/3 top-0">
          <ChocolateDroplet delay={2.5} />
        </motion.div>
      </div>
      
      {/* Gold accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-10 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-swiss-gold to-transparent opacity-30"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-10 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-swiss-gold to-transparent opacity-30"
      />

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src="/lovable-uploads/f30a0668-a4df-4b49-96cb-96c48cb3708a.png"
          alt="Swiss Bite Logo"
          className="w-64 md:w-96 mb-8 hover:scale-105 transition-transform duration-300"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-swiss-red text-center mb-6"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
};