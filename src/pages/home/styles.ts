import styled from "styled-components";

export const Container = styled.main`
    margin: auto;
    padding-top: 3rem;
    width: 100%;
    max-width: 100vw;  
    overflow-x: hidden;   

    @media only screen and (max-width: 450px) {
        width: 90vw;
    }

    @media only screen and (min-width: 450px) {
        width: 425px;
    }
`

export const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    z-index: -20;
    left: 0;
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
    box-shadow: -1px 1px 5px rgba(0,0,0,0.3);
    width: 100%;
    max-width: 100vw; 
`

export const ItensFooter = styled.section`
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
    margin: 1rem 0;
    width: 100%;
    height: 3rem;
    background-color: ${p => p.theme.colors.elements};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20%;
    box-shadow: -1px 1px 5px rgba(0,0,0,0.3);

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
            filter: ${p => p.theme.colors.font};
        }
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2rem 0 1rem;
    width: 100vw;
    height: 5rem;
    border-top: 1px solid ${p => p.theme.colors.element_highlight};

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        height: auto;
        padding: 1rem 2rem 1rem 1rem;
    }
`

export const PersonalInfo = styled.div`
    p {
        color: ${p => p.theme.colors.font_highlight};
        font-size: .8rem;
    }

    @media only screen and (max-width: 500px) {
        margin-bottom: 1rem;
        text-align: center;

        p {
            text-align: center;
        }
    }
`

export const PersonalLinks = styled.div`
    a {
        margin: .5rem;
    }
`