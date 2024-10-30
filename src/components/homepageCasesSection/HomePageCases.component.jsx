import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import arrowBtn from "../../assets/cases_arrow.svg";

import {
	StyledHomePageCasesArrow,
	StyledHomePageCasesHeadline,
	StyledHomePageCasesSection,
	StyledWrapperOfHeaderArrow,
} from "./HomePageCases.styles";

import FilterButtonComponent from "../filterButton/fillterButton.component";
import ListOfCasesComponent from "../listOfCases/ListOfCases.component";
import { CaseCasesMain } from "../casesXGPTPage/caseCases/CaseCases.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCases } from "../../redux/cases/cases.selectors";
import { switchCasesType } from "../../redux/cases/cases.action";

const HomePageCasesComponent = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const collection = useSelector(selectAllCases);
	// const handleClickEvent = () => {
	// 	navigate("/cases");
	// 	dispatch(switchCasesType(collection));
	// };
	const { t } = useTranslation();
	return (
		<StyledHomePageCasesSection>
			<StyledWrapperOfHeaderArrow>
				<StyledHomePageCasesHeadline>
					{t("main.homepage.casesSection.headline")}
				</StyledHomePageCasesHeadline>
				{/* <StyledHomePageCasesArrow
					src={arrowBtn}
					alt="button"
					onClick={handleClickEvent}
				/> */}
			</StyledWrapperOfHeaderArrow>
			<CaseCasesMain>
				<ListOfCasesComponent
					top="13px"
					routepage="homepage"
				/>
			</CaseCasesMain>
		</StyledHomePageCasesSection>
	);
};

export default HomePageCasesComponent;
