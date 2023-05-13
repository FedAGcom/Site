import React from "react";

import {StyledCallTo} from "./CallTo.styles";

const CallToComponent = ({ phone, children }) => {
	return <StyledCallTo href={`tel:${phone}`}>{children}</StyledCallTo>;
};

export default CallToComponent;