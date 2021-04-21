import React, { FC } from 'react';
import styled from 'styled-components';
import IconBuilder from '../icons/icon-builder';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding: 0 60px;
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

    li > svg {
      transform: translateY(15%);
      width: 20px;
      height: 20px;
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
          <li>About</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </StyledNav>
      <StyledLogo>
        <div>
          <IconBuilder name="Logo" />
        </div>
      </StyledLogo>
      <StyledNav>
        <ul>
          <li>
            <IconBuilder name="Resume" />
          </li>
          <li>
            <IconBuilder name="Email" />
          </li>
          <li>
            <IconBuilder name="Github" />
          </li>
          <li>
            <IconBuilder name="LinkedIn" />
          </li>
          <li>
            <IconBuilder name="Facebook" />
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
