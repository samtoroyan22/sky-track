import { useTheme } from "@/providers/theme/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="p-2 rounded-full bg-card hover:bg-neutral-700 transition-colors
        flex items-center justify-center "
      >
        {theme === "dark" ? <Moon size={28} /> : <Sun size={28} />}
      </button>
    </div>
  );
}
