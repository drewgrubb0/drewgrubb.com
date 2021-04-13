import React, { ReactElement } from 'react';
import About from '../components/content/about';
import Contact from '../components/content/contact';
import Hero from '../components/content/hero';
import Jobs from '../components/content/jobs';
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
