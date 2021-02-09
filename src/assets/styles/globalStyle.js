import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 50px;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background-color: #0B132B;
    color: white;
  }
`;

export default GlobalStyle;
