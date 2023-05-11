import React from "react";

import withWrapper from "../withWrapper/withWrapper.component";
import LogoComponent from "../logo/Logo.component";
import CallToComponent from "../callTo/CallTo.component";
import NavigationMenuComponent from "../navigationMenu/NavigationMenu.component";

import './Header.style.scss';

const Header = () => (
  <div className="header">
    <LogoComponent />
    <CallToComponent className="header-phone-number" phone="+79112507289">+7 (911) 250-72-89</CallToComponent>
    <NavigationMenuComponent />
  </div> 
);

export default withWrapper(Header);