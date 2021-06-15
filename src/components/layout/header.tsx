import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import { IconBuilder } from '@icons';
import { navLinks, navIcons, SiteNavLink } from '@config';

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

    a {
      ${({ theme }) => theme.mixins.underlinedLink};
    }

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

      & > a {
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
          {navLinks.map((navLink: SiteNavLink, index: number) => (
            <li key={index}>
              <Link to={navLink.url}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </StyledNav>
      <StyledLogo>
        <a href="/" aria-label="home">
          <IconBuilder name="Logo" />
        </a>
      </StyledLogo>
      <StyledExternalLinks>
        <ul>
          {navIcons.map((navIcon: SiteNavLink, index: number) => (
            <li key={index}>
              <a
                href={navIcon.url}
                aria-label={navIcon.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBuilder name={navIcon.name} />
              </a>
            </li>
          ))}
        </ul>
      </StyledExternalLinks>
    </StyledHeader>
  );
};

export default Header;
