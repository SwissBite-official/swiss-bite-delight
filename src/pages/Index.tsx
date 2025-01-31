import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <LanguageSwitcher />
      <Hero />
      <Products />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
