import React from "react";

import { ReactComponent as Logotype } from '../../assets/fedag.svg';

import './Logo.style.scss';

const LogoComponent = () => (
	<a href='/'>
		<Logotype className='logo' />
	</a>
);

export default LogoComponent;