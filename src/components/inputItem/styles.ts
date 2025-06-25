import { styled } from "styled-components"

export const Container = styled.div`
    background-color: ${p => p.theme.colors.elements};
    width: 100%;
    height: 3rem;
    display: flex;
    border-radius: 5px;
    box-shadow: -1px 1px 5px rgba(0,0,0,0.3);

    #input-item {
        background: none;
        border: none;
        outline: none;
        width: 85%;
        color: ${p => p.theme.colors.font};
        
        &::placeholder {
            color: ${p => p.theme.colors.font_highlight};
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
    transition: background-color 100ms ease-in;
    cursor: pointer;

    background: ${p => p.checked ? "linear-gradient(#71C2FD, #8B69C1)": ""};

    &:hover {
        background-color: ${p => p.theme.colors.checkbox_highlight};
    }
`