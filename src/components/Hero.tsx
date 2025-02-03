import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden dark:bg-black">
      {/* Gold accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-10 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-swiss-gold to-transparent opacity-30"
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
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl font-light text-swiss-gold mb-6 font-helvetica tracking-wide"
        >
          A bite of Switzerland in every piece
        </motion.p>

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
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-2xl"
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white dark:from-black to-transparent"
      />
    </section>
  );
};