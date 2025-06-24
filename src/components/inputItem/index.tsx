import { useRef, useState } from "react";
import type { KeyboardEvent } from 'react';
import { Container, CustomCheckbox, CustomCheckboxContainer } from "./styles";
import Check from "../../assets/icons/Check";

interface newItemDataTS {
  id: string;
  title: string;
  completed: boolean;
}

interface propsTS {
  onSendData: (dados: newItemDataTS) => void;
}

export default function InputItem({ onSendData }: propsTS) {
  const inputRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const [completed, setCompleted] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const textoAtual = inputRef.current?.value.trim() || "";
      const marcadoAtual = checkboxRef.current?.checked ?? false;

      if (textoAtual === "") {
        alert("Título não pode estar vazio");
        return;
      }

      onSendData({
        id: crypto.randomUUID?.() || Date.now().toString(),
        title: textoAtual,
        completed: marcadoAtual,
      });

      setCompleted(false);

      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <Container>
      <CustomCheckboxContainer>
        <CustomCheckbox checked={completed} htmlFor="check-item">
          {completed ? <Check /> : ""}
        </CustomCheckbox>

        <input
          ref={checkboxRef}
          type="checkbox"
          name="check-item"
          id="check-item"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </CustomCheckboxContainer>

      <input
        ref={inputRef}
        type="text"
        name="input-item"
        id="input-item"
        placeholder="Create a new todo."
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}
