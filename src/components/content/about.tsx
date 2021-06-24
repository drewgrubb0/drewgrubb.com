import React, { FC } from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  background-color: var(--grey-light);
  border-bottom: 1px solid var(--grey);
`;

const StyledAbout = styled.section``;

const StyledAboutText = styled.div``;

const StyledImages = styled.div`
  img {
    transition: 0.3s ease;

    &:nth-child(2) {
      margin: 0 10px;
    }

    &:hover,
    &:focus {
      transform: translateY(-5px);
    }
  }
`;

const About: FC = () => {
  return (
    <StyledBackground>
      <StyledAbout id="about">
        <h1>About me</h1>
        <StyledAboutText>
          <p>
            Welcome to my site! My name is Drew and I have a passion for all
            things development. I started out in 2013 making simple video games
            in Java and automation scripts in Bash, and have since gathered a
            wide array of knowledge from a variety of sources.
          </p>
          <p>
            I kicked off my professional career as the first ever Devops
            Engineering Intern at IHeartMedia, building deployment pipelines and
            serverless monitoring applications for the platform team. After
            graduating from Texas State University, I was eventually recruited
            into the software engineering space, where I have designed and
            developed a variety of full stack applications for ad tech and
            scheduling optimization.
          </p>
          <StyledImages>
            <img src="https://lh6.googleusercontent.com/proxy/u0kqVJJi3bazlEgS_n1-mAyc02cZbG2u-xMdT-LPnLWyyvEt2fPSvVZDqzGoidfyMsml296tvOkmLgWA2BXq4PlIrHPlEyudj659uszD_ALLfP3GDZHgPh-ojUYrKPufZhOCDAirhU--i5xsTGqQmvn1qg=w1200-h630-p-k-no-nu"></img>
            <img src="https://lh6.googleusercontent.com/proxy/u0kqVJJi3bazlEgS_n1-mAyc02cZbG2u-xMdT-LPnLWyyvEt2fPSvVZDqzGoidfyMsml296tvOkmLgWA2BXq4PlIrHPlEyudj659uszD_ALLfP3GDZHgPh-ojUYrKPufZhOCDAirhU--i5xsTGqQmvn1qg=w1200-h630-p-k-no-nu"></img>
            <img src="https://lh6.googleusercontent.com/proxy/u0kqVJJi3bazlEgS_n1-mAyc02cZbG2u-xMdT-LPnLWyyvEt2fPSvVZDqzGoidfyMsml296tvOkmLgWA2BXq4PlIrHPlEyudj659uszD_ALLfP3GDZHgPh-ojUYrKPufZhOCDAirhU--i5xsTGqQmvn1qg=w1200-h630-p-k-no-nu"></img>
          </StyledImages>
          <p>
            Working on the next big thing is not my only passion. I love to
            travel, play video games (RTS is my favorite, but I&apos;ve tried a
            lot of them), or immerse myself in language learning! I picked up
            (and subsequently lost) some Portuguese visiting Brazil in 2019, but
            right now I am focusing on 日本語 for a future trip to Japan!
          </p>
        </StyledAboutText>
      </StyledAbout>
    </StyledBackground>
  );
};

export default About;
