import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

// Elements
import { 
    BackgroundImage, 
    Container, 
    FiltersContainer, 
    Header, 
    ItensContainer, 
    ItensFooter, 
    Title,
    Footer,
    PersonalInfo,
    PersonalLinks
} from "./styles";

// Components
import ThemeSwitcher from "../../components/ThemeSwitcher";
import InputItem from "../../components/inputItem";
import initialData from "../../data/data.json";

// Drag & Drop
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
} from '@dnd-kit/core';

import type { DragEndEvent } from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableCard from "../../components/sortableCard";
import GitHub from "../../assets/icons/Github";
import Instagram from "../../assets/icons/Instagram";
import { usePersistentState } from "../../hooks/usePersistentState";

interface newItemDataTS {
  id: string;
  title: string;
  completed: boolean;
}

type FilterType = "all" | "active" | "completed";

export default function Home() {
    const [filter, setFilter] = useState<FilterType>("all");
    const [remainingCount, setRemainingCount] = useState(0);
    const [itensData, setItensData] = usePersistentState<newItemDataTS[]>("todos-itens", initialData);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [backgroundImg, setBackgroundImg] = useState("");
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const theme = useTheme();
    
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
                
    const handleDragEnd = (e: DragEndEvent) => {
        const {active, over} = e

        if (active.id !== over?.id) {
            const oldIndex = itensData.findIndex(item => item.id === active.id)
            const newIndex = itensData.findIndex(item => item?.id === over?.id )

            setItensData((items) => arrayMove(items, oldIndex, newIndex))
        }
    }

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
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(hasTouch)

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


    const sensors = useSensors(
        isTouchDevice
        ? useSensor(TouchSensor, {
            activationConstraint: {
            delay: 200,
            tolerance: 5,
            },
        })
        : useSensor(PointerSensor, {
            activationConstraint: {
            distance: 5,
            },
        })
    );

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
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={itensData.map(item => item.id)} strategy={verticalListSortingStrategy}>
                            {getFilteredItems().map((item) => (
                                <SortableCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    completed={item.completed}
                                    onRemove={handleRemoveItem}
                                    onToggleComplete={handleToggleComplete}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>

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

                <h2>Drag & Drop to reorder list</h2>
            </Container>

            <Footer>
                <PersonalInfo>
                    <p>Developed by Gabriel Farias</p>
                    <p>© 2025</p>
                    <p>Made using React + TypeScript + Styled Components</p>
                </PersonalInfo>

                <PersonalLinks>
                    <a href="https://github.com/Gafariias" target="_blank">
                        <GitHub />
                    </a>
                    
                    <a href="https://www.instagram.com/gafarias._" target="_blank">
                        <Instagram />
                    </a>
                    
                    {/* <a href="">
                        <img src="" alt="" />
                    </a> */}
                </PersonalLinks>
            </Footer>
        </>
    );
}
