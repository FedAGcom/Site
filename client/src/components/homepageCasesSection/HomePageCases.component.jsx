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

const HomePageCasesComponent = () => {
	const navigate = useNavigate();
	const handleClickEvent = () => {
		navigate("/cases")
	}
	return (
		<StyledHomePageCasesSection>

			<StyledHomePageCasesHeadline>Cases</StyledHomePageCasesHeadline>
			<StyledHomePageCasesArrow
				src={arrowBtn}
				alt="button" onClick={handleClickEvent}/>

			<FilterButtonComponent collection="cases" top="78px"/>

			<ListOfCasesComponent top="155px" routepage="homepage"/>

		</StyledHomePageCasesSection>
	);
};

export default HomePageCasesComponent;