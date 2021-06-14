import React, { ReactElement } from 'react';
import { About, Contact, Hero, Jobs, Layout, Skills } from '@components';

export default function Home(): ReactElement {
  return (
    <Layout>
      <Hero />
      <About />
      <Jobs />
      <Skills />
      <Contact />
    </Layout>
  );
}
