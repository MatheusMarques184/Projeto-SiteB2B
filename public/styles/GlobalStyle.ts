import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #4BA87D;
        --white-color: #FFFFFF;
        --black-color: #000000;
    }

    @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 800;
      src: url('../fonts/raleway-v27-latin-800.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('../fonts/raleway-v27-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../fonts/raleway-v27-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
          url('../fonts/raleway-v27-latin-800.woff') format('woff'), /* Modern Browsers */
          url('../fonts/raleway-v27-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../fonts/raleway-v27-latin-800.svg#Raleway') format('svg'); /* Legacy iOS */
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Raleway', sans-serif;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        font-family: 'Raleway', sans-serif;
    }
    body {
        color: var(--black-color);
        background-color: var(--white-color);
        font-style: normal;
        font-family: 'Raleway', sans-serif;
    }
    p {
      font-weight: 500;
      font-size: 1.9rem;
      line-height: 2.6rem;
    }

`

export default GlobalStyle;
