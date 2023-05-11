import React from "react";

import './NavigationMenu.style.scss';

const NavigationMenuComponent = () => {
	return (
		<div className='header-navmenu'>
			<ul className='header-navmenu-ul'>
				<li><a className='header-navmenu-services' href='#'>Services</a></li>
				<li><a className='header-navmenu-cases' href='#'>Cases</a></li>
				<li><a className='header-navmenu-customer' href='#'>Become a customer</a></li>
			</ul>
			<div className="header-burger" >
			</div>
		</div>
	)
}

export default NavigationMenuComponent;