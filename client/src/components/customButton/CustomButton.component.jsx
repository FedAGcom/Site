import React from 'react';

import {StyledCustomButton} from "./CustomButton.styles";

const CustomButton = ({ children, ...props}) => {
	const scroll = () => {
		const section = document.querySelector( '#application-section' );
		section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
	};
	return (
		<StyledCustomButton onClick={scroll} {...props} className="button">
			<span>
				{children}
			</span>
		</StyledCustomButton>
	);
};

export default CustomButton;