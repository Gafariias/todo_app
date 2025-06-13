import ThemeSwitcher from "../../components/ThemeSwitcher";
import { Container, Header, Title } from "./styles";

export default function Home() {
    return(
        <Container>
            <Header>
                <Title>
                    <h1>T</h1>
                    <h1>O</h1>
                    <h1>D</h1>
                    <h1>O</h1>
                </Title>

                <ThemeSwitcher />
            </Header>

            
        </Container>
    )
}