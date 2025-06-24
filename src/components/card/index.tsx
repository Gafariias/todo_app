import { useTheme } from "styled-components";
import { Container, CustomCheckbox, CustomCheckboxContainer, RemoveItemContainer } from "./styles";
import Check from "../../assets/icons/Check";
import Cross from "../../assets/icons/Cross";
import type { ChangeEvent } from "react";

interface CardTS {
  id: string;
  title: string;
  completed: boolean;
  onRemove: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export default function Card(p: CardTS) {
  const theme = useTheme();

  return (
    <Container checked={p.completed}>
      <CustomCheckboxContainer>
        <CustomCheckbox checked={p.completed} htmlFor={`check-${p.id}`}>
          {p.completed ? <Check /> : ""}
        </CustomCheckbox>

        <input
          type="checkbox"
          id={`check-${p.id}`}
          checked={p.completed}
          onChange={() => p.onToggleComplete(p.id)}
        />
      </CustomCheckboxContainer>

      <p>{p.title}</p>

      <RemoveItemContainer>
        <button onClick={() => p.onRemove(p.id)}>
          <Cross />
        </button>
      </RemoveItemContainer>
    </Container>
  );
}
