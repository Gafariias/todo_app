import styled from "styled-components";

export const Container = styled.div<{checked: boolean}>`
    width: 100%;
    height: 3rem;
    z-index: 50;
    border-radius: .5rem .5rem 0 0;
    display: flex;
    border-bottom: 1px solid ${p => p.theme.colors.element_highlight};
    background-color: ${p => p.theme.colors.elements};
    cursor: grab;

    p {
        display: flex;
        justify-content: left;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-right: 1rem;
        padding-left: .5rem;
        font-size: .8rem;
        color: ${p => p.checked ? p.theme.colors.font_highlight : p.theme.colors.font};
        text-decoration: ${p => p.checked ? "line-through" : ""};
    }
`

export const RemoveItemContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        background: none;
        border: none;
        outline: none;

        svg {
            width: .8rem;
            height: auto;
        }
    }
`

export const CustomCheckboxContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
`

export const CustomCheckbox = styled.label<{checked: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    border: 1px solid ${p => p.theme.colors.element_highlight};
    cursor: pointer;

    background: ${p => p.checked ? "linear-gradient(#71C2FD, #8B69C1)": ""};

    &:hover {
        background-color: ${p => p.theme.colors.checkbox_highlight};
    }
`