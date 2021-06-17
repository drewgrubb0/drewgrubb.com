import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles';
import { Footer, Header } from '@components';
import { theme } from '@styles';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('smooth-scroll')('a[href*="#"]');
}

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 var(--base-padding);
  /* margin-top: var(--header-height); */
`;

const Layout: FC = (children) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <StyledMainContainer>{children.children}</StyledMainContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
