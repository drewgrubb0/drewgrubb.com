import React, { FC } from 'react';
import styled from 'styled-components';

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
    <StyledContact id="contact">
      <h1>Contact me</h1>
      <p>
        Whether you want to collaborate on something or just want to chat, I am
        always looking forward to making new connections. I am most likely to
        respond to <a href="mailto: drew.grubb0@gmail.com">email me</a> or a
        message on{' '}
        <a href="https://www.linkedin.com/in/drew-grubb/">LinkedIn</a>. Thanks
        for checking out my portfolio!
      </p>
      <p>
        This is a new site so I will definitely be adding things to it as time
        goes on. Maybe check back later to find out what ;)
      </p>
    </StyledContact>
  );
};

export default Contact;
