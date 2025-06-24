import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Josefin Sans", sans-serif;
    }

    body {
        background-color: ${p => p.theme.colors.background};
    }

    h1 {
        color: #e4e5f1;
        font-weight: 600;
        margin-right: .5rem;
    }
`