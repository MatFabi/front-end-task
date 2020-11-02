import React from "react";
import styled from "styled-components";

import logoImg from "./assets/logo.svg";

export const Logo = () => <img alt="Startup Development House" src={logoImg} />;

export const Root = styled.header`
  height: 5rem;
`;
export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavBarLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  padding: 0.75rem;
`;
