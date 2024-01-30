import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import leftArrow from "../../assets/arrow-back-outline.svg";
import rigtArrow from "../../assets/arrow-forward-outline.svg";
import {
	StyledAboutProjectPartOfCase,
	StyledListOfCases,
	StyledNameOfProject,
	StyledPreviewImageOfListElement,
	StyledPreviewOfListElement,
	StyledTechStackOfCase,
	StyledProjectTagsButton,
	StyledProjectTagsButtonSpan,
	StyledArrowSlider,
} from "./ListOfCases.styles";

import { selectAllCases, selectCasesCollection } from "../../redux/cases/cases.selectors";
import { useTranslation } from "react-i18next";
import LinkButtonComponent from "../linkButton/LinkButton.component.jsx";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FilterButtonComponent from "../filterButton/fillterButton.component.jsx";
import { switchCasesType } from "../../redux/cases/cases.action.js";

const ListOfCasesComponent = ({ top, routepage }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const param = useParams();
	let paramId = Object.values(param)[0];
	const casesCollections = useSelector(selectCasesCollection);
	const dispatch = useDispatch();
	const collection = useSelector(selectAllCases);
	const settings = {
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<>
			{routepage !== "cases" && (
				<FilterButtonComponent
					collection="cases"
					top="-18px"
				/>
			)}

			<StyledListOfCases
				routepage={routepage}
				top={top}>
				{routepage !== "cases" && (
					<Slider {...settings}>
						{casesCollections
							.filter((data) => paramId !== data.urlNew)
							.map((data) => {
								return (
									<React.Fragment key={data.key}>
										<StyledPreviewOfListElement routepage={routepage}>
											<StyledPreviewImageOfListElement
												routepage={routepage}
												src={data.imgSource}
												alt={data.name}
											/>

											<StyledAboutProjectPartOfCase routepage={routepage}>
												<StyledNameOfProject
													namewidth={data.nameWidth}
													routepage={routepage}>
													{t(
														`main.homepage.casesSection.cases.${data.name}.headline`
													)}
												</StyledNameOfProject>

												<StyledTechStackOfCase>
													{data.tags.map((tag) => (
														<StyledProjectTagsButton
															className="btnTags"
															key={tag.key}
															tag="true">
															<StyledProjectTagsButtonSpan tag="true">
																{t(
																	`main.homepage.casesSection.cases.${
																		data.name
																	}.tags.${tag.tagName || tag.categoryName}`
																)}
															</StyledProjectTagsButtonSpan>
														</StyledProjectTagsButton>
													))}
												</StyledTechStackOfCase>
												<LinkButtonComponent
													onClick={() =>{ 
														navigate(`/cases${data.navTo}`)
														dispatch(switchCasesType(collection));
													}}
													bgcolor={"white"}
													color={"#B81034"}></LinkButtonComponent>
											</StyledAboutProjectPartOfCase>
										</StyledPreviewOfListElement>
									</React.Fragment>
								);
							})}
					</Slider>
				)}
				{routepage === "cases" && (
					<>
						{casesCollections.map((data) => {
							return (
								<React.Fragment key={data.key}>
									<StyledPreviewOfListElement routepage={routepage}>
										<StyledPreviewImageOfListElement
											routepage={routepage}
											src={data.imgSource}
											alt={data.name}
										/>

										<StyledAboutProjectPartOfCase routepage={routepage}>
											<StyledNameOfProject
												namewidth={data.nameWidth}
												routepage={routepage}>
												{t(
													`main.homepage.casesSection.cases.${data.name}.headline`
												)}
											</StyledNameOfProject>

											<StyledTechStackOfCase>
												{data.tags.map((tag) => (
													<StyledProjectTagsButton
														className="btnTags"
														key={tag.key}
														tag="true">
														<StyledProjectTagsButtonSpan tag="true">
															{t(
																`main.homepage.casesSection.cases.${
																	data.name
																}.tags.${tag.tagName || tag.categoryName}`
															)}
														</StyledProjectTagsButtonSpan>
													</StyledProjectTagsButton>
												))}
											</StyledTechStackOfCase>
											<LinkButtonComponent
												onClick={() => {
													navigate(`/cases${data.navTo}`);
													dispatch(switchCasesType(collection));
											}}
												bgcolor={"white"}
												color={"#B81034"}></LinkButtonComponent>
										</StyledAboutProjectPartOfCase>
									</StyledPreviewOfListElement>
								</React.Fragment>
							);
						})}
					</>
				)}
			</StyledListOfCases>
		</>
	);
};

export default ListOfCasesComponent;
