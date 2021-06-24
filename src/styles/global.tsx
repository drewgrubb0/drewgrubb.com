import variables from './variables';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${variables};

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    width: 100%;
  }

  section {
    ${({ theme }) => theme.mixins.smoothScrollPadding};
    ${({ theme }) => theme.mixins.flexSection};
  }

  h1 {
    margin: 20px auto 40px auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
