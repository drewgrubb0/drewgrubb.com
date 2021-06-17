import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: var(--footer-height);
  background-color: blue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: #ffffff;
    ${({ theme }) => theme.mixins.underlinedLink};
  }
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/drewgrubb0/drewgrubb.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed and Developed by Drew Grubb
      </a>
    </StyledFooter>
  );
};

export default Footer;
