import { createContext, useContext, type ReactNode } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";
import { ThemeProvider as StyledProvider} from "styled-components";
import { useThemePersistence} from "../hooks/useThemePersistence";

interface themeContextTS {
    toggleTheme: () => void;
    isDark: boolean
};

const ThemeContext = createContext<themeContextTS | undefined>(undefined);

export const useTheme = () => {
    const ctx = useContext(ThemeContext);

    if (!ctx) throw new Error('useTheme deve ser usado dentro de ThemeProvider');
    return ctx;
};

export default function CustomThemeProvider({children}: {children: ReactNode}) {
    const [themeName, toggleTheme] = useThemePersistence()
    const isDark = themeName === "dark";
    const theme = isDark ? darkTheme : lightTheme;

    return(
        <ThemeContext.Provider value={{toggleTheme, isDark}}>
            <StyledProvider theme={theme}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    )
}