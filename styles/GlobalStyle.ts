import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #0A1128;
        --subtitle-color: #bdbdbd;
        --white-color: #FFFFFF;
        --light-gray-color: #EEEEEE;
        --secondary-color: crimson;
        --gap: 3rem;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        color: var(--primary-color);
        line-height: 1.5;
        background-color: var(--white-color);
    }
`

export default GlobalStyle;