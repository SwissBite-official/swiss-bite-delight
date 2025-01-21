import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const products = [
    {
      name: t('products.milkChocolate.name'),
      description: t('products.milkChocolate.description'),
      image: "/placeholder.svg",
      path: "/milk-chocolate"
    },
    {
      name: t('products.darkChocolate.name'),
      description: t('products.darkChocolate.description'),
      image: "/placeholder.svg",
      path: "/dark-chocolate"
    },
    {
      name: t('products.kidsVersion.name'),
      description: t('products.kidsVersion.description'),
      image: "/placeholder.svg",
      path: "/kids-chocolate"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-swiss-red"
        >
          {t('products.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-swiss-red">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <button 
                  onClick={() => navigate(product.path)}
                  className="mt-4 px-6 py-2 bg-swiss-gold text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  {t('products.learnMore')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};