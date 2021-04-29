import React, { FC } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import Footer from './footer';
import Header from './header';

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 var(--base-padding);
  margin-top: var(--header-height);
`;

const Layout: FC = (children) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMainContainer>{children.children}</StyledMainContainer>
      <Footer />
    </>
  );
};

export default Layout;
