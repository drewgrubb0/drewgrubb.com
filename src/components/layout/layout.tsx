import React, { FunctionComponent, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Footer />

      <div id="content">{children}</div>
    </div>
  );
};

export default Layout;
