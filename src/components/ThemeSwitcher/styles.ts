import { styled } from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    transition: all 100ms ease-in-out;

    &:hover {
        filter: brightness(80%);
    }
`