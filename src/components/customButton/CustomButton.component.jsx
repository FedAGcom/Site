import React from 'react';

import {StyledCustomButton} from "./CustomButton.styles";

const CustomButton = ({ submit, scrollTo, children, icon, ...props}) => {
	const scroll = () => {
		const section = document.querySelector(`#${scrollTo}`);
		section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
	};

	return (
		<StyledCustomButton onClick={ () =>
			submit
				? null
				: scroll()
		} {...props} icon={icon} className="button">
			{icon && (
				<img src={icon} alt="icon"/>
			)}
			<span>
				{children}
			</span>
		</StyledCustomButton>
	);
};

export default CustomButton;