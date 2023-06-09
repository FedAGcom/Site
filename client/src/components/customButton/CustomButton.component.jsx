import React from 'react';

import {StyledCustomButton} from "./CustomButton.styles";

const CustomButton = ({ submit, scrollTo, children, ...props}) => {
	const scroll = () => {
		const section = document.querySelector(`#${scrollTo}`);
		section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
	};

	return (
		<StyledCustomButton onClick={ () =>
			submit
				? null
				: scroll()
		} {...props} className="button">
			<span>
				{children}
			</span>
		</StyledCustomButton>
	);
};

export default CustomButton;