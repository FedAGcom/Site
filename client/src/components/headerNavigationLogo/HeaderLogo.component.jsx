import React from "react";

import {ReactComponent as Logo} from '../../assets/fedag.svg';

import {StyledLogoForHeader} from "./HeaderLogo.styles";

const HeaderLogoComponent = () => (
	<StyledLogoForHeader as="a" href="/"><Logo /></StyledLogoForHeader>
);

export default HeaderLogoComponent;