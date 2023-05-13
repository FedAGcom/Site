import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {
	StyledNavLink,
	StyledListElements,
	StyledUnorderedList,
	StyledNav
} from "./NavigationMenu.styles";

import CallToComponent from "../callTo/CallTo.component";
import {toggleCartHidden} from "../../redux/dropdown/dropdown.actions";
import {selectDropdownHidden} from "../../redux/dropdown/dropdown.selectors";


const NavigationMenuComponent = () => {
	const dispatch = useDispatch();
	const hidden = useSelector(selectDropdownHidden);
	const handleEvent = () => {
		dispatch(toggleCartHidden())
	}
	return (
		<StyledNav className={hidden ? "container" : "container"}>
			<CallToComponent className="header-phone-number" phone="+79112507289">+7 (911) 250-72-89</CallToComponent>
			<StyledUnorderedList className={hidden ? "" : ""}>
				<StyledListElements onClick={handleEvent}><StyledNavLink to="/technology" >Services</StyledNavLink></StyledListElements>
				<StyledListElements onClick={handleEvent}><StyledNavLink to="/cases" >Cases</StyledNavLink></StyledListElements>
				<StyledListElements onClick={handleEvent}><StyledNavLink to="/contact-us" >Become a customer</StyledNavLink></StyledListElements>
			</StyledUnorderedList>
		</StyledNav>
	)
}

export default NavigationMenuComponent;