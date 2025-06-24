import styled from "styled-components";

export const Container = styled.main`
    margin: auto;
    padding-top: 3rem;

    @media only screen and (max-width: 450px) {
        background-color: red;
        width: 90vw;
    }

    @media only screen and (min-width: 450px) {
        background-color: red;
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