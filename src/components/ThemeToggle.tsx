import { useTheme } from "@/providers/theme/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-card hover:bg-neutral-300 hover:dark:bg-neutral-700 transition-colors flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Moon className="w-7 h-7 sm:w-5.5 sm:h-5.5" />
        ) : (
          <Sun className="w-7 h-7 sm:w-5 sm:h-5" />
        )}
      </button>
    </div>
  );
}
