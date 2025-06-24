import styled from "styled-components";

export const Container = styled.main`
    margin: auto;
    padding-top: 3rem;

    @media only screen and (max-width: 450px) {
        width: 90vw;
    }

    @media only screen and (min-width: 450px) {
        width: 425px;
    }
`

export const BackgroundImage = styled.img`
    width: 100vw;
    position: fixed;
    z-index: -20;
    top: 0;
    filter: brightness(80%);
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.5rem;
`

export const Title = styled.div`
    display: flex;
`

export const ItensContainer = styled.section`
    background-color: ${p => p.theme.colors.elements};
    margin-top: 1rem;
    border-radius: .5rem;
`

export const ItensFooter = styled.footer`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    span {
        color: ${p => p.theme.colors.font_highlight};
        font-size: .7rem;
        transition: all 100ms ease-in-out;
    }

    button {
        display: flex;
        justify-content: right;
        align-items: center;
        background: none;
        border: none;

        &:hover {
            color: ${p => p.theme.colors.font};
        }
    }
`

export const FiltersContainer = styled.section`
    margin-top: 1rem;
    width: 100%;
    height: 3rem;
    background-color: ${p => p.theme.colors.elements};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20%;

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: .8rem;
        color: ${p => p.theme.colors.font_highlight};

        &.active {
            color:rgb(78, 179, 251);
            font-weight: 600;
        }

        &:hover {
            filter: brightness(80%);
        }
    }
`