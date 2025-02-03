import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-swiss-red"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-6"
          >
            {t('about.text1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mb-6"
          >
            {t('about.text2')}
          </motion.p>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-6"
          >
            {t('about.text3')}
          </motion.p>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-6"
          >
            {t('about.text4')}
          </motion.p>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-6"
          >
            {t('about.text5')}
          </motion.p>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-6"
          >
            {t('about.text6')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-swiss-red dark:text-swiss-gold">
              {t('about.team.title')}
            </h3>
            <p className="text-lg text-gray-600">
              {t('about.team.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
