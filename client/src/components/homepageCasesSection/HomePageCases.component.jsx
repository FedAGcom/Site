import React from "react";
import {useNavigate} from "react-router-dom";

import arrowBtn from '../../assets/Arrow.svg';

import {
	StyledHomePageCasesArrow,
	StyledHomePageCasesHeadline,
	StyledHomePageCasesSection
} from "./HomePageCases.styles";

import FilterButtonComponent from "../filterButton/fillterButton.component";
import ListOfCasesComponent from "../listOfCases/ListOfCases.component";
import {useTranslation} from "react-i18next";

const HomePageCasesComponent = () => {
	const navigate = useNavigate();
	const handleClickEvent = () => {
		navigate("/cases")
	}
	const { t } = useTranslation();
	return (
		<StyledHomePageCasesSection>

			<StyledHomePageCasesHeadline>{t('main.homepage.casesSection.headline')}</StyledHomePageCasesHeadline>
			<StyledHomePageCasesArrow
				src={arrowBtn}
				alt="button" onClick={handleClickEvent}/>

			<FilterButtonComponent collection="cases" top="-18px"/>

			<ListOfCasesComponent top="13px" routepage="homepage"/>

		</StyledHomePageCasesSection>
	);
};

export default HomePageCasesComponent;