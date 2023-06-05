import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {
	StyledNavLink,
	StyledListElements,
	StyledUnorderedList,
	StyledNav,
	StyledNavigationLine,
	StyledHeaderCallTo
} from "./HeaderNavigationMenu.styles";

import {toggleCartHidden} from "../../redux/dropdown/dropdown.actions";
import {selectDropdownHidden} from "../../redux/dropdown/dropdown.selectors";
import CallToComponent from "../callTo/CallTo.component";

const HeaderNavigationMenuComponent = () => {
	const dispatch = useDispatch();
	const hidden = useSelector(selectDropdownHidden);
	const handleEvent = () => {
		dispatch(toggleCartHidden())
	}

	const firstRender = useRef(true);
	let classNameValue;
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
		}
	});

	if (firstRender.current && hidden) {
		classNameValue = "";
	} else if (firstRender.current || hidden) {
		classNameValue = "is-hidden";
	} else {
		classNameValue = "is-active";
	}

	const {t} = useTranslation()
	return (
		<StyledNav className={classNameValue}>

			<StyledHeaderCallTo>
				<CallToComponent phone="+79112507289">
					+7 (911) 250-72-89
				</CallToComponent>
			</StyledHeaderCallTo>


			<StyledNavigationLine />


			<StyledUnorderedList>
				<StyledListElements onClick={handleEvent}>
					<StyledNavLink to="/technology">
						{t('main.header.services')}
					</StyledNavLink>
				</StyledListElements>

				<StyledListElements onClick={handleEvent}>
					<StyledNavLink to="/cases">
						{t('main.header.cases')}
					</StyledNavLink>
				</StyledListElements>

				<StyledListElements onClick={handleEvent}>
					<StyledNavLink to="/contact-us">
						{t('main.header.becomeCustomer')}
					</StyledNavLink>
				</StyledListElements>
			</StyledUnorderedList>

		</StyledNav>
	)
}

export default HeaderNavigationMenuComponent;