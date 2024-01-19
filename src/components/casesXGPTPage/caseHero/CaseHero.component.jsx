import React from "react";

import { Separator } from "../casePageElements/limits.styles";

import { useNavigate } from "react-router-dom";
import arrowToLeft from "../../../assets/arrow_to_left.svg";
import { StyledLinkToBack } from "../../casesPage/CasesPage.styles";
import {
	CaseHeroImg,
	CaseHeroImgWrapper,
	CaseHeroText,
	CaseWrapper,
} from "./CaseHero.styles";
import GptLogo from "../../../assets/cases/xgpt/gptLogo.png";
import CasePageBadge from "../casePageElements/CasePageBadge";
import CasePageParagraph from "../casePageElements/CasePageParagraph";

function CaseHero() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(-1);
	};
	return (
		<Separator>
			<StyledLinkToBack onClick={handleClick}>
				<img
					src={arrowToLeft}
					alt="arrow-to-back"
				/>
				<p>Back</p>
			</StyledLinkToBack>
			<CaseWrapper>
				<CaseHeroText>
					<h1>X-GPT</h1>
					<CasePageParagraph>
						Веб-приложение для создания академических работ.
					</CasePageParagraph>
					<CasePageBadge color={"#AEAEAE"}>Обучение</CasePageBadge>
				</CaseHeroText>
				<CaseHeroImgWrapper>
					<CaseHeroImg src={GptLogo} />
				</CaseHeroImgWrapper>
			</CaseWrapper>
		</Separator>
	);
}

export default CaseHero;
