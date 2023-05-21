import React from 'react';

import './CustomButton.styles.scss'

const CustomButton = ({ children, ...props}) => (
	<button {...props} className="button" >
		<span>
			{children}
		</span>
	</button>
);

export default CustomButton;