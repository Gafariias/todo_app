import styled from "styled-components";

export const Container = styled.main`
    margin: auto;

    @media only screen and (max-width: 500px) {
        background-color: red;
        padding-top: 3rem;
        width: 90vw;
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