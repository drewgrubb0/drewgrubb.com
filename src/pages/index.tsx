import React, { ReactElement } from 'react';
import About from '../components/content/about';
import Contact from '../components/content/contact';
import Jobs from '../components/content/jobs';
import Hero from '../components/content/hero';
import Skills from '../components/content/skills';
import Layout from '../components/layout/layout';

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
