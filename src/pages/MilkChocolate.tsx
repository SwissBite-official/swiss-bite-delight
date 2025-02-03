import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MilkChocolate = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
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
            {t('products.milkChocolate.name')}
          </h1>

          <img
            src="/milk-chocolate.jpg"
            alt={t('products.milkChocolate.name')}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Production Process</h2>
              <p className="text-gray-700">{t('products.milkChocolate.production')}</p>
              <p className="text-gray-700 mt-2">{t('products.milkChocolate.ingredients')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Flavor Profile</h2>
              <p className="text-gray-700">{t('products.milkChocolate.flavor')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Environmental Commitment</h2>
              <p className="text-gray-700">{t('products.milkChocolate.environmental')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Health Benefits</h2>
              <p className="text-gray-700">{t('products.milkChocolate.health')}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Ingredients</h2>
              <p className="text-gray-700">{t('products.milkChocolate.ingredients')}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MilkChocolate;
