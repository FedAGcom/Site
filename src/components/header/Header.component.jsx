import React from "react";

import HeaderLogoComponent from "../headerNavigationLogo/HeaderLogo.component";
import HeaderNavigationMenuComponent from "../headerNavigationMenu/HeaderNavigationMenu.component";
import NavigationButtonComponent from "../headerNavigationButton/HeaderNavigationButton.component";

import {StyledHeader} from "./Header.styles";

const Header = () => {
  return(
    <StyledHeader id="header">
      <HeaderLogoComponent />
      <NavigationButtonComponent />
      <HeaderNavigationMenuComponent />
    </StyledHeader>
  );
}

export default Header;