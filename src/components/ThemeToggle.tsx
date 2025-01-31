import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
      <Button
          variant="outline"
          size="icon"
          className="fixed top-10 left-6 z-50 p-2 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-md hover:bg-white dark:hover:bg-black transition-all"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
  );
}
