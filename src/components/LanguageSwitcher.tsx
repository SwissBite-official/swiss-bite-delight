import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'cs' | 'en')}
        className="bg-white dark:bg-gray-900 border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-swiss-red"
      >
        <option value="cs">Čeština</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
