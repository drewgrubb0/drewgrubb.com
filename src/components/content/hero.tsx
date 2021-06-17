import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHero = styled.section`
  height: 100vh;
  padding: 0;

  p {
    a {
      ${({ theme }) => theme.mixins.underlinedLink};
    }
  }
`;

const Hero: FC = () => {
  return (
    <StyledHero id="hero">
      <h1>Hello, my name is</h1>
      <h2>Drew Grubb</h2>
      <h3>I&apos;m a software engineer based in Austin, Texas</h3>
      <p>
        I specialize in designing and developing innovative solutions for
        complicated problems. I currently work as <br></br> a software engineer
        at <a href="https://iheartmedia.com">IHeartMedia</a>, building complex
        technologies for the new age of advertising.
      </p>
      <p>
        Trying to reach out to me? Why not{' '}
        <a href="mailto: drew.grubb0@gmail.com">send me a quick email?</a>
      </p>
    </StyledHero>
  );
};

export default Hero;
