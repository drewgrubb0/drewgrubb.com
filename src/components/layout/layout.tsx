import React, { FC } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import Footer from './footer';
import Header from './header';

const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout: FC = (children) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />

      <StyledContentDiv>{children.children}</StyledContentDiv>
    </>
  );
};

export default Layout;
