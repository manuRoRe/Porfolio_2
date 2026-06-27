import { useTheme } from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-gray-900 px-4 py-2 text-white dark:bg-gray-100 dark:text-gray-900"
    >
      {theme === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro"}
    </button>
  );
}
