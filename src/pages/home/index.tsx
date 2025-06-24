import { useEffect, useState } from "react";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { BackgroundImage, Container, Header, Title } from "./styles";
import { useTheme } from "styled-components";

export default function Home() {
    const theme = useTheme()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [backgroundImg, setBackgroundImg] = useState('')

    useEffect(() => {
        if (windowWidth <= 768) {
            setBackgroundImg(theme.images.mobile)
        } else {
            setBackgroundImg(theme.images.desktop)
        }
    }, [windowWidth, theme]);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return(
        <>
            <BackgroundImage src={backgroundImg}/>
        
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
        </>
    )
}