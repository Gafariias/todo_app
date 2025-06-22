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
        background-color: ${p => p.theme.background};
    }

    h1 {
        color: ${p => p.theme.font};
    }
`