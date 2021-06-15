import { css } from 'styled-components';

const variables = css`
  :root {
    --header-height: 70px;
    --base-padding: 80px;

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
