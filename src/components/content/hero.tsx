import React, { FC } from 'react';
import styled from 'styled-components';

const BackgroundPicture = styled.div`
  background-image: url('/images/workstation-bg.jpg');
  background-size: cover;
`;

const StyledBackground = styled.div`
  background-color: rgba(38, 153, 230, 0.8);
  border-bottom: 1px solid var(--grey);
`;

const StyledHero = styled.section`
  height: 100vh;
  padding: 0;

  h1 {
    margin: 0;
    color: var(--black);
    font-size: clamp(var(--font-size-med), 4vw, var(--font-size-large));
  }

  h2 {
    margin: 20px 0 15px 0;
    color: var(--black);
    font-size: clamp(30px, 6vw, 60px);
  }

  h3 {
    margin: 0 0 10px 0;
    color: var(--black);
    font-size: clamp(var(--font-size-large), 6vw, var(--font-size-xlarge));
  }

  p {
    a {
      ${({ theme }) => theme.mixins.underlinedLink};
    }
  }
`;

const Hero: FC = () => {
  return (
    <BackgroundPicture>
      <StyledBackground>
        <StyledHero id="hero">
          <h1>Hello, my name is</h1>
          <h2>Drew Grubb</h2>
          <h3>I&apos;m a software engineer based in Austin, Texas</h3>
          <p>
            I specialize in designing and developing innovative solutions for
            complicated problems. I currently work as <br></br> a software
            engineer at <a href="https://iheartmedia.com">IHeartMedia</a>,
            building complex technologies for the new age of advertising.
          </p>
          <p>
            Trying to reach out to me? Why not{' '}
            <a href="mailto: drew.grubb0@gmail.com">send me a quick email?</a>
          </p>
        </StyledHero>
      </StyledBackground>
    </BackgroundPicture>
  );
};

export default Hero;
