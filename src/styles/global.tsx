import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --header-height: 70px;
    --base-padding: 80px;

    @media (max-width: 992px) {
      --base-padding: 60px;
    }

    @media (max-width: 768px) {
      --base-padding: 40px;
    }

    @media (max-width: 600px) {
      --base-padding: 20px;
    }
  }

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
