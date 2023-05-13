import React from "react";

import {ReactComponent as Logo} from '../../assets/fedag.svg';

import {StyledLogoForHeader} from "./Logo.styles";

const LogoComponent = () => (
	<StyledLogoForHeader as="a" href="/"><Logo /></StyledLogoForHeader>
);

export default LogoComponent;