import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media only screen and (max-width: 53.125rem) {
      font-size: 50%;
    }

    @media only screen and (max-width: 33.125rem) {
      font-size: 40%;
    }
    @media only screen and (max-width: 23.75rem) {
      font-size: 30%;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 80px;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background-color: #0B132B;

    @media only screen and (max-width: 53.125rem) {
      padding: 10px;
    }
  }

  h2, h1, h3 {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
