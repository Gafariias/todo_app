import { useTheme } from "../../context/themeContext";
import { Container } from "./styles";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";

export default function ThemeSwitcher() {
    const {toggleTheme, isDark} = useTheme()
    const icon = isDark ? <Moon />  : <Sun />

    return(
        <Container onClick={() => toggleTheme()}>
            {icon}
        </Container>
    )
} 