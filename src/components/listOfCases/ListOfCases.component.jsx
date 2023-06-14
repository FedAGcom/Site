import React from "react";
import {useSelector} from "react-redux";

import {
	StyledAboutProjectPartOfCase,
	StyledButtonOfPreview,
	StyledListOfCases,
	StyledNameOfProject,
	StyledPreviewImageOfListElement,
	StyledPreviewOfListElement,
	StyledTechStackOfCase,
	StyledProjectTagsButton,
	StyledProjectTagsButtonSpan
} from "./ListOfCases.styles";

import {
	selectCasesCollection,
	selectCasesMainButton
} from "../../redux/cases/cases.selectors";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


const ListOfCasesComponent = ({ top, routepage }) => {
	const navigate = useNavigate();
	const {t} = useTranslation();

	const casesCollections = useSelector(selectCasesCollection);
	const mainButton = useSelector(selectCasesMainButton);

	return (
		<StyledListOfCases routepage={routepage} top={top}>
			{
				casesCollections.map((data) => {
					return (
						<StyledPreviewOfListElement key={data.key} routepage={routepage}>
							<StyledPreviewImageOfListElement routepage={routepage} src={data.imgSource} alt={data.name}/>

							<StyledAboutProjectPartOfCase routepage={routepage}>
								<StyledNameOfProject namewidth={data.nameWidth} routepage={routepage}>
									{t(`main.homepage.casesSection.cases.${data.name}.headline`)}
								</StyledNameOfProject>


								<StyledTechStackOfCase>
									{
										data.tags.map((tag) => (
											<StyledProjectTagsButton
												className="btnTags"
												key={tag.key}
												tag="true">

												<StyledProjectTagsButtonSpan
													tag="true">
													{t(`main.homepage.casesSection.cases.${data.name}.tags.${tag.tagName}`)}
												</StyledProjectTagsButtonSpan>

											</StyledProjectTagsButton>
										))
									}
								</StyledTechStackOfCase>

							</StyledAboutProjectPartOfCase>

							<StyledButtonOfPreview className="button-arrow" alt={mainButton.name}
								onClick={() => {navigate(`/cases-study${data.navTo}`)}}/>

						</StyledPreviewOfListElement>
					)
				})
			}

		</StyledListOfCases>
	);
};

export default ListOfCasesComponent;