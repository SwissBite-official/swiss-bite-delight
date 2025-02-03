import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const KidsChocolate = () => {
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
            {t('products.kidsVersion.name')}
          </h1>

          <img
            src="/kids-chocolate.jpg"
            alt={t('products.kidsVersion.name')}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Production Process</h2>
              <p >{t('products.kidsVersion.production')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Flavor Profile</h2>
              <p >{t('products.kidsVersion.flavor')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Environmental Commitment</h2>
              <p >{t('products.kidsVersion.environmental')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Health Benefits</h2>
              <p >{t('products.kidsVersion.health')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-swiss-red mb-4">Ingredients</h2>
              <p >{t('products.kidsVersion.ingredients')}</p>
            </section>
            <section className="flex justify-center">
              <table className="w-full max-w-4xl border-collapse border border-gray-300">
                <thead>
                <tr className="bg-swiss-red">
                  <th className="border border-gray-300 p-2">{t('products.kidsVersion.nutrition_values')}</th>
                  <th className="border border-gray-300 p-2">100 g</th>
                  <th className="border border-gray-300 p-2">{t('products.kidsVersion.portion')} (17 g)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">{t('products.kidsVersion.energy')}</td>
                  <td className="border border-gray-300 p-2">2242 kJ / 537 kcal</td>
                  <td className="border border-gray-300 p-2">381 kJ / 91 kcal (4,5%*)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">{t('products.kidsVersion.fat')}</td>
                  <td className="border border-gray-300 p-2">30 g</td>
                  <td className="border border-gray-300 p-2">5,1 g (7%*)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 pl-4">{t('products.kidsVersion.fat_acid')}</td>
                  <td className="border border-gray-300 p-2">18 g</td>
                  <td className="border border-gray-300 p-2">3,1 g (15%*)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">{t('products.kidsVersion.Carbohydrates')}</td>
                  <td className="border border-gray-300 p-2">61 g</td>
                  <td className="border border-gray-300 p-2">10 g (4%*)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 pl-4">{t('products.kidsVersion.sugar')}</td>
                  <td className="border border-gray-300 p-2">56 g</td>
                  <td className="border border-gray-300 p-2">9,5 g (11%*)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Protein</td>
                  <td className="border border-gray-300 p-2">4,8 g</td>
                  <td className="border border-gray-300 p-2">0,8 g (1,5%*)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">{t('products.kidsVersion.salt')}</td>
                  <td className="border border-gray-300 p-2">0,16 g</td>
                  <td className="border border-gray-300 p-2">0,03 g (&lt;1%*)</td>
                </tr>
                </tbody>
              </table>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KidsChocolate;
