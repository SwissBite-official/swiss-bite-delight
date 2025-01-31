import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DarkChocolate = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" />
            {t('products.backToHome')}
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-swiss-red mb-8">
            {t('products.darkChocolate.name')}
          </h1>

          <img
            src="/dark-chocolate.jpg"
            alt={t('products.darkChocolate.name')}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Production Process</h2>
              <p className="text-gray-700">{t('products.darkChocolate.production')}</p>
              <p className="text-gray-700 mt-2">{t('products.darkChocolate.ingredients')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Flavor Profile</h2>
              <p className="text-gray-700">{t('products.darkChocolate.flavor')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Environmental Commitment</h2>
              <p className="text-gray-700">{t('products.darkChocolate.environmental')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Health Benefits</h2>
              <p className="text-gray-700">{t('products.darkChocolate.health')}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DarkChocolate;
