import { usePersistentState } from "./usePersistentState";

export type ThemeName = "light" | "dark";

export function useThemePersistence(): [ThemeName, () => void] {
    const [theme, setTheme] = usePersistentState<ThemeName>("theme", "light")

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return [theme, toggleTheme]
}