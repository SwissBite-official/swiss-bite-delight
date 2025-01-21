import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-swiss-red">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Want to learn more about Swiss Bite or place an order? We'd love to
            hear from you.
          </p>
          <a
            href="mailto:info@swissbite.com"
            className="inline-block px-8 py-3 bg-swiss-red text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};