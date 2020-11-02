import React from "react";

import { Root, Wrapper, Logo, NavBar, NavBarLink } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <NavBar>
        <NavBarLink href="/start">Start</NavBarLink>
        <NavBarLink href="/my-profile">My Profile</NavBarLink>
      </NavBar>
    </Wrapper>
  </Root>
);
