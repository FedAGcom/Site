import React from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {
	StyledCasesPage,
	StyledCasesPageHeadline,
	StyledCasesPageMain,
	StyledLinkToBack
} from "./CasesPage.styles";

import arrowToLeft from "../../assets/arrow_to_left.svg";

import FilterButtonComponent from "../filterButton/fillterButton.component";
import ListOfCasesComponent from "../listOfCases/ListOfCases.component";


const CasesPage = () => {
	const navigate = useNavigate();
	const {i18n, t} = useTranslation()
	const isRussian = i18n.resolvedLanguage === "ru";
	const handleClick = () => {
		navigate(-1)
	}

	return (
		<StyledCasesPage russian={isRussian.toString()}>
			<StyledCasesPageMain>
				<StyledLinkToBack onClick={handleClick}>
					<img src={arrowToLeft} alt='arrow-to-back'/>
					<p>{t('main.casesPage.btnText')}</p>
				</StyledLinkToBack>
				<StyledCasesPageHeadline>
					{t('main.casesPage.headline')}
				</StyledCasesPageHeadline>
				<FilterButtonComponent collection="cases"/>
				<ListOfCasesComponent top="51px" routepage="cases"/>
			</StyledCasesPageMain>
		</StyledCasesPage>
	);
}

export default CasesPage;
