import React from "react";

import './CallTo.styles.scss';

const CallToComponent = ({ phone, children }) => {
	return <a className="call-to-anchor" href={`tel:${phone}`}>{children}</a>;
};

export default CallToComponent;