import { css } from 'styled-components';

const variables = css`
  :root {
    --white: #f7f7f7;
    --grey-light: #f2f2f5;
    --grey: #dcd9d9;
    --light-blue: #217dbb;
    --sky-blue: #a0cfee;
    --black: #0a0b0c;

    --header-height: 60px;
    --footer-height: 40px;
    --base-padding: 80px;

    --font-size-small: 12px;
    --font-size-med: 16px;
    --font-size-large: 20px;
    --font-size-xlarge: 28px;

    @media (${({ theme }) => theme.breakPoints.laptop}) {
      --base-padding: 60px;
    }

    @media (${({ theme }) => theme.breakPoints.tablet}) {
      --base-padding: 40px;
    }

    @media (${({ theme }) => theme.breakPoints.mobile}) {
      --base-padding: 20px;
    }
  }
`;

export default variables;
