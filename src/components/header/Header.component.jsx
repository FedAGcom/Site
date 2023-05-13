import React, {useMemo} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectDropdownHidden} from "../../redux/dropdown/dropdown.selectors";

import withWrapper from "../withWrapper/withWrapper.component";
import LogoComponent from "../logo/Logo.component";
import NavigationMenuComponent from "../navigationMenu/NavigationMenu.component";
import NavigationButtonComponent from "../navigationButton/NavigationButton.component";

import {StyledHeader} from "./Header.styles";

const Header = ({ hidden }) => {
  console.log(hidden)

  let navigationMenu = useMemo(() => {
    if (window.innerWidth > 800 && (hidden === false)) {
      return <NavigationMenuComponent />
    } else if (window.innerWidth < 800 && (hidden === true)) {
      return <NavigationMenuComponent />
    } else {
      return null
    }
  },[hidden]);

  return(
    <StyledHeader>
      <LogoComponent />
      <NavigationButtonComponent />
      {navigationMenu}
    </StyledHeader>
  );
}

const mapStateToProps = createStructuredSelector ({
  hidden: selectDropdownHidden
})

export default connect(mapStateToProps, null)(withWrapper(Header));