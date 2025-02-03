import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import Index from "./pages/Index";
import MilkChocolate from "./pages/MilkChocolate";
import DarkChocolate from "./pages/DarkChocolate";
import KidsChocolate from "./pages/KidsChocolate";
import Branches from "@/pages/Branches.tsx";

const queryClient = new QueryClient();

// Detect system theme preference
const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme={getSystemTheme()} storageKey="vite-ui-theme">
      <TooltipProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ThemeToggle />
            <Toaster />
            <Sonner />
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
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;