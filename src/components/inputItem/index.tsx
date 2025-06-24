import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from 'react'
import { Container, CustomCheckbox, CustomCheckboxContainer } from "./styles";
import Check from "../../assets/icons/Check";

interface newItemDataTS {
    title: string,
    completed: boolean
}

interface propsTS {
    onSendData: (dados: newItemDataTS) => void
}

export default function InputItem({ onSendData }: propsTS) {
    const [title, setTitle] = useState("")
    const [completed, setCompleted] = useState(true)

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (title == "") {
            alert("Titulo não pode estar vazio")
        }else if (e.key === "Enter") {
            e.preventDefault();
            onSendData({ title, completed });
            setTitle("");
            setCompleted(false);
        }
    };

    return(
        <Container>
            <CustomCheckboxContainer>
                <CustomCheckbox checked={completed} htmlFor="check-item">
                    {
                        completed ? (<Check/>) : ""
                    }
                </CustomCheckbox>

                <input 
                    type="checkbox" 
                    name="check-item" 
                    id="check-item" 
                    checked={completed}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setCompleted(e.target.checked)}
                />
            </CustomCheckboxContainer>

            <input 
                type="text" 
                name="input-item" 
                id="input-item" 
                placeholder="Create a new todo." 
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </Container>
    )
}