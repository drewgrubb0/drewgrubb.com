import variables from './variables';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${variables};

  body {
    margin: 0;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
