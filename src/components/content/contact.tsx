import React, { FC } from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  background-color: var(--white);
  border-bottom: 1px solid var(--grey);
`;

const StyledContact = styled.section`
  max-width: 920px;
  margin: 0 auto;
  padding-bottom: calc(var(--header-height) + var(--footer-height));
  p {
    a {
      ${({ theme }) => theme.mixins.underlinedLink};
    }
  }
`;

const Contact: FC = () => {
  return (
    <StyledBackground>
      <StyledContact id="contact">
        <h1>Contact me</h1>
        <p>
          Whether you want to collaborate on something or just want to chat, I
          am always looking forward to making new connections. I am most likely
          to respond to <a href="mailto: drew.grubb0@gmail.com">email me</a> or
          a message on{' '}
          <a href="https://www.linkedin.com/in/drew-grubb/">LinkedIn</a>. Thanks
          for checking out my portfolio!
        </p>
        <p>
          This is in the early stages so I will definitely be adding new
          features and UX improvements to it as time goes on. Maybe check back
          later to see some of them ;)
        </p>
      </StyledContact>
    </StyledBackground>
  );
};

export default Contact;
