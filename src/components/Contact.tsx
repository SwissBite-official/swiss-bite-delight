import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone } from "lucide-react";

export const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-swiss-red dark:text-swiss-gold">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('contact.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@swissbite.com"
              className="inline-block px-8 py-3 bg-swiss-red text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              {t('contact.button')}
            </a>
            <a
              href="tel:+420705998797"
              className="inline-flex items-center gap-2 px-8 py-3 bg-swiss-red text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +420 705 998 797
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};