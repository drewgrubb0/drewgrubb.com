import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import { IconBuilder } from '@components/shared/icons';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--header-height);
  box-sizing: border-box;
  padding: 0 calc(var(--base-padding) / 2);
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  background-color: blue;
`;

const StyledNav = styled.nav`
  width: 25%;
  ul {
    padding: 0px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledExternalLinks = styled.nav`
  width: 25%;
  ul {
    padding: 0px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      transition: 0.2s ease;
      &:hover,
      &:focus {
        transform: scale(1.25, 1.25);
      }
      a {
        padding: 10px;
        svg {
          transform: translateY(15%);
          width: 24px;
          height: 24px;
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledLogo = styled.div`
  width: 50%;
  svg {
    transform: translateY(5%);
    width: 48px;
    height: 48px;
  }
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#work">Work</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </StyledNav>
      <StyledLogo>
        <a href="/" aria-label="home">
          <IconBuilder name="Logo" />
        </a>
      </StyledLogo>
      <StyledExternalLinks>
        <ul>
          <li>
            <a
              href="/resume.pdf"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBuilder name="Resume" />
            </a>
          </li>
          <li>
            <a
              href="mailto: drew.grubb0@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBuilder name="Email" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/drewgrubb0"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBuilder name="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/drew-grubb/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBuilder name="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/drew.grubb/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBuilder name="Facebook" />
            </a>
          </li>
        </ul>
      </StyledExternalLinks>
    </StyledHeader>
  );
};

export default Header;
