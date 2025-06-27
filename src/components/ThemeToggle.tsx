import { useTheme } from "@/providers/theme/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="fixed top-7 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="p-2 rounded-full bg-card hover:bg-neutral-700 transition-colors
        flex items-center justify-center"
      >
        {theme === "dark" ? <Moon size={22} /> : <Sun size={22} />}
      </button>
    </div>
  );
}
