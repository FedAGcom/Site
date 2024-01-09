import React from "react";
import {useSelector} from "react-redux";

import {
	StyledAboutProjectPartOfCase,
	StyledListOfCases,
	StyledNameOfProject,
	StyledPreviewImageOfListElement,
	StyledPreviewOfListElement,
	StyledTechStackOfCase,
	StyledProjectTagsButton,
	StyledProjectTagsButtonSpan
} from "./ListOfCases.styles";

import {
	selectCasesCollection
} from "../../redux/cases/cases.selectors";
import {useTranslation} from "react-i18next";
import LinkButtonComponent from "../linkButton/LinkButton.component";


const ListOfCasesComponent = ({ top, routepage }) => {
	const {t} = useTranslation();

	const casesCollections = useSelector(selectCasesCollection);
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
													{t(`main.homepage.casesSection.cases.${data.name}.tags.${tag.tagName || tag.categoryName}`)}
												</StyledProjectTagsButtonSpan>

											</StyledProjectTagsButton>
										))
									}
								</StyledTechStackOfCase>

							</StyledAboutProjectPartOfCase>
							
						</StyledPreviewOfListElement>
					)
				})
			}

		</StyledListOfCases>
	);
};

export default ListOfCasesComponent;