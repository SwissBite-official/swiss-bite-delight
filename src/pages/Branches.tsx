import {motion} from "framer-motion";
import {useLanguage} from "@/contexts/LanguageContext";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {ArrowLeft, Tag} from "lucide-react";
import {useEffect} from "react";

const Branches = () => {
    const {t} = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="container mx-auto px-4 py-12">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="mr-2"/>
                        {t('products.backToHome')}
                    </Button>
                </Link>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                        <h1 className="text-4xl font-bold text-swiss-red mb-4 md:mb-0">
                            {t('products.branches.name')}
                        </h1>

                        {/* MSRP Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-r from-swiss-gold/10 via-swiss-gold/20 to-swiss-gold/10 p-4 rounded-lg border border-swiss-gold/30 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Tag className="h-5 w-5 text-swiss-gold" />
                                <span className="text-sm font-medium text-swiss-gold">{t('products.branches.price')}</span>
                            </div>
                            <div className="text-3xl font-bold text-swiss-red">
                                50 {t('products.branches.currency')}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {t('products.branches.price_note')}
                            </div>
                        </motion.div>
                    </div>

                    <img
                        src={import.meta.env.BASE_URL + "./branches_wide.jpg"}
                        alt={t('products.branches.name')}
                        className="w-full h-64 object-cover rounded-lg mb-8"
                    />

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-swiss-red mb-4">{t('products.branches.production_process')}</h2>
                            <p>{t('products.branches.production')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-swiss-red mb-4">{t('products.branches.flavor_profile')}</h2>
                            <p>{t('products.branches.flavor')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-swiss-red mb-4">{t('products.branches.health_benefits')}</h2>
                            <p>{t('products.branches.health')}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-swiss-red mb-4">{t('products.branches.ingredients_list')}</h2>
                            <p>{t('products.branches.ingredients')}</p>
                        </section>

                        <section className="flex justify-center">
                            <table className="w-full max-w-4xl border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-swiss-red">
                                    <th className="border border-gray-300 p-2">{t('products.branches.nutrition_values')}</th>
                                    <th className="border border-gray-300 p-2">100 g</th>
                                    <th className="border border-gray-300 p-2">{t('products.branches.portion')} (27 g)
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2">{t('products.branches.energy')}</td>
                                    <td className="border border-gray-300 p-2">2259 kJ / 541 kcal</td>
                                    <td className="border border-gray-300 p-2">610 kJ / 146 kcal (7,3%*)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">{t('products.branches.fat')}</td>
                                    <td className="border border-gray-300 p-2">32 g</td>
                                    <td className="border border-gray-300 p-2">8,6 g (12%*)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 pl-4">{t('products.branches.fat_acid')}</td>
                                    <td className="border border-gray-300 p-2">16 g</td>
                                    <td className="border border-gray-300 p-2">4,3 g (21%*)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">{t('products.branches.Carbohydrates')}</td>
                                    <td className="border border-gray-300 p-2">55 g</td>
                                    <td className="border border-gray-300 p-2">15 g (6%*)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 pl-4">{t('products.branches.sugar')}</td>
                                    <td className="border border-gray-300 p-2">53 g</td>
                                    <td className="border border-gray-300 p-2">14,3 g (16%*)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">Protein</td>
                                    <td className="border border-gray-300 p-2">6,7 g</td>
                                    <td className="border border-gray-300 p-2">1,8 g (3,6%*)</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">{t('products.branches.salt')}</td>
                                    <td className="border border-gray-300 p-2">0,16 g</td>
                                    <td className="border border-gray-300 p-2">0,04 g (&lt;1%*)</td>
                                </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="max-w-4xl mx-auto"
                >
                    <div className="space-y-8">
                        <section>
                            <p>{t('products.branches.recommended')}</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Branches;
