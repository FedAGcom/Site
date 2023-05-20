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


const ListOfCasesComponent = ({ top, routepage }) => {
	const navigate = useNavigate();

	const casesCollections = useSelector(selectCasesCollection);
	const mainButton = useSelector(selectCasesMainButton);

	return (
		<StyledListOfCases top={top}>
			{
				casesCollections.map((data) => {
					return (
						<StyledPreviewOfListElement key={data.key} routepage={routepage}>
							<StyledPreviewImageOfListElement routepage={routepage} src={data.imgSource} alt={data.name}/>

							<StyledAboutProjectPartOfCase routepage={routepage}>
								<StyledNameOfProject namewidth={data.nameWidth} routepage={routepage}>
									{data.name}
								</StyledNameOfProject>


								<StyledTechStackOfCase>
									{
										data.tags.map((tag) => (
											<StyledProjectTagsButton className="btnTags" btnwidth={tag.tagBtnWidth[0]} respbtnwidth={tag.tagBtnWidth[1]} key={tag.key} tag="true">
												<StyledProjectTagsButtonSpan spanwidth={tag.tagSpanWidth[0]} respspanwidth={tag.tagSpanWidth[1]} tag="true">
													{tag.tagName}
												</StyledProjectTagsButtonSpan>
											</StyledProjectTagsButton>
										))
									}
								</StyledTechStackOfCase>

							</StyledAboutProjectPartOfCase>

							<StyledButtonOfPreview className="button-arrow" alt={mainButton.name}
								onClick={() => {navigate("/cases-study")}}/>

						</StyledPreviewOfListElement>
					)
				})
			}

		</StyledListOfCases>
	);
};

export default ListOfCasesComponent;