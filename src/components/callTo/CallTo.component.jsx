import React from "react";

import './CallTo.style.scss'

const CallToComponent = ({ phone, children }) => {
	return <a className='header-phone-number' href={`tel:${phone}`}>{children}</a>;
};

export default CallToComponent;