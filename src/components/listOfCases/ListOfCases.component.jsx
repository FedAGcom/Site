import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

import { selectCasesCollection } from "../../redux/cases/cases.selectors";
import { useTranslation } from "react-i18next";
import LinkButtonComponent from "../linkButton/LinkButton.component.jsx";
import { useNavigate, useParams } from "react-router-dom";

const ListOfCasesComponent = ({ top, routepage }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const param = useParams();
	let paramId = Object.values(param)[0];
	const casesCollections = useSelector(selectCasesCollection);

	let filteredList = casesCollections.filter((data) => paramId !== data.url);
	const [cur, setCur] = useState(1);
	const len = filteredList.length;
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const numOfEL = () => {
		let num = 0;
		if (width > 1100) {
			num = 1;
		}
		return num;
	};
	const prevClick = () => {
		setCur(cur - 1 < numOfEL() ? len - 1 : cur - 1);
	};
	const nextClick = () => {
		setCur(cur >= len - 1 ? numOfEL() : cur + 1);
	};

	return (
		<>
			{routepage !== "cases" && (
				<StyledArrowSlider
					position="left"
					src={leftArrow}
					alt="prev"
					onClick={prevClick}
				/>
			)}
			<StyledListOfCases
				routepage={routepage}
				top={top}>
				{filteredList.map((data, index) => {
					return routepage !== "cases" ? (
						(cur - index === numOfEL() || cur - index === 0) && (
							<StyledPreviewOfListElement
								key={data.key}
								routepage={routepage}>
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
										onClick={() => navigate(`/cases${data.navTo}`)}
										bgcolor={"white"}
										color={"#B81034"}></LinkButtonComponent>
								</StyledAboutProjectPartOfCase>
							</StyledPreviewOfListElement>
						)
					) : (
						<StyledPreviewOfListElement
							key={data.key}
							routepage={routepage}>
							<StyledPreviewImageOfListElement
								routepage={routepage}
								src={data.imgSource}
								alt={data.name}
							/>

							<StyledAboutProjectPartOfCase routepage={routepage}>
								<StyledNameOfProject
									namewidth={data.nameWidth}
									routepage={routepage}>
									{t(`main.homepage.casesSection.cases.${data.name}.headline`)}
								</StyledNameOfProject>

								<StyledTechStackOfCase>
									{data.tags.map((tag) => (
										<StyledProjectTagsButton
											className="btnTags"
											key={tag.key}
											tag="true">
											<StyledProjectTagsButtonSpan tag="true">
												{t(
													`main.homepage.casesSection.cases.${data.name}.tags.${
														tag.tagName || tag.categoryName
													}`
												)}
											</StyledProjectTagsButtonSpan>
										</StyledProjectTagsButton>
									))}
								</StyledTechStackOfCase>
								<LinkButtonComponent
									onClick={() => navigate(`/cases${data.navTo}`)}
									bgcolor={"white"}
									color={"#B81034"}></LinkButtonComponent>
							</StyledAboutProjectPartOfCase>
						</StyledPreviewOfListElement>
					);
				})}
			</StyledListOfCases>
			{routepage !== "cases" && (
				<StyledArrowSlider
					src={rigtArrow}
					alt="next"
					onClick={nextClick}
				/>
			)}
		</>
	);
};

export default ListOfCasesComponent;
