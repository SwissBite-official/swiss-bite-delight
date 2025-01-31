import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import Index from "./pages/Index";
import MilkChocolate from "./pages/MilkChocolate";
import DarkChocolate from "./pages/DarkChocolate";
import KidsChocolate from "./pages/KidsChocolate";
import Branches from "@/pages/Branches.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <LanguageSwitcher />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/milk-chocolate" element={<MilkChocolate />} />
            <Route path="/dark-chocolate" element={<DarkChocolate />} />
            <Route path="/kids-chocolate" element={<KidsChocolate />} />
            <Route path="/branches" element={<Branches />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
