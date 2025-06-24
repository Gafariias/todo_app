import { useEffect, useState } from "react";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { BackgroundImage, Container, FiltersContainer, Header, ItensContainer, ItensFooter, Title } from "./styles";
import { useTheme } from "styled-components";
import InputItem from "../../components/inputItem";
import Card from "../../components/card";
import itens from "../../data/data.json";

interface newItemDataTS {
  id: string;
  title: string;
  completed: boolean;
}

type FilterType = "all" | "active" | "completed";

export default function Home() {
    const [filter, setFilter] = useState<FilterType>("all");
    const [remainingCount, setRemainingCount] = useState(0);
    const [itensData, setItensData] = useState<newItemDataTS[]>(itens);
    const theme = useTheme();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [backgroundImg, setBackgroundImg] = useState("");

    const getFilteredItems = () => {
        switch (filter) {
            case "active":
            return itensData.filter(item => !item.completed);
            case "completed":
            return itensData.filter(item => item.completed);
            default:
            return itensData;
        }
    };

    const handleNewItemData = (data: newItemDataTS) => {
        setItensData((prev) => [...prev, data]);
        console.log("Novo item:", data);
    };

    const handleRemoveItem = (idToRemove: string) => {
        setItensData((prev) => prev.filter((item) => item.id !== idToRemove));
    };

    const handleToggleComplete = (id: string) => {
        setItensData((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        )
        );
    };

        const handleClearCompleted = () => {
            setItensData((prev) => prev.filter(item => !item.completed));
        };  

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 500) {
        setBackgroundImg(theme.images.mobile);
        } else {
        setBackgroundImg(theme.images.desktop);
        }
    }, [windowWidth, theme]);

    useEffect(() => {
        const pendentes = itensData.filter((item) => !item.completed).length;
        setRemainingCount(pendentes);
    }, [itensData]);

    return (
        <>
        <BackgroundImage src={backgroundImg} />

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

            <InputItem onSendData={handleNewItemData} />

            <ItensContainer>
                {getFilteredItems().map((item) => (
                    <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    completed={item.completed}
                    onRemove={handleRemoveItem}
                    onToggleComplete={handleToggleComplete}
                    />
                ))}

            <ItensFooter>
                <span>
                {remainingCount} {remainingCount === 1 ? "item" : "itens"} left
                </span>

                <button onClick={handleClearCompleted}>
                <span>Clear Completed</span>
                </button>
            </ItensFooter>
            </ItensContainer>

            <FiltersContainer>
                <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
                <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Remaining</button>
                <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
            </FiltersContainer>
        </Container>

        </>
    );
}
