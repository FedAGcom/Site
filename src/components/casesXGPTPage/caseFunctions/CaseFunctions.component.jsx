import React from "react";
import { Separator } from "../casePageElements/limits.styles";
import {
	CaseFunctionsImgs,
	CaseFunctionsList,
	CaseFunctionsMain,
} from "./CaseFunctions.styles";
import CasePageHeader from "../casePageElements/CasePageHeader";
import liArrow from "../../../assets/cases/li-vector.svg";
import CasePageParagraph from "../casePageElements/CasePageParagraph";
import ImgDetail from "../../../assets/cases/xgpt/gptDetails.png";
import ImgSpeed from "../../../assets/cases/xgpt/gptSpeed.png";
import ImgOrigin from "../../../assets/cases/xgpt/gptOriginal.png";
import ImgLogin from "../../../assets/cases/xgpt/gptLogin.png";
import { useTranslation } from "react-i18next";

function CaseFunctions(props) {
	const {t} = useTranslation()
	const currentCase = props.case
	return (
		<Separator>
			<CaseFunctionsMain>
				<CasePageHeader>{t(`main.homepage.singleCase.${currentCase.name}.funcHeader`)}</CasePageHeader>
				<CaseFunctionsList>
					{currentCase.funcList.map((el)=>{
						return (
						<li key={el}>
							<img
								src={liArrow}
								alt=">"
							/>
							<CasePageParagraph>
							{t(`main.homepage.singleCase.${currentCase.name}.funcList.${el}`)}
							</CasePageParagraph>
						</li>

						)
					})}
				</CaseFunctionsList>
				<CaseFunctionsImgs>
					<div class="leftColumn">
						<img
							src={currentCase.funcImgLeft}
							alt="pic"
						/>
					</div>
					<div class="rightColumn">
						<div class="upperWrap">
							<img
								src={currentCase.funcImgSmallL}
								alt="pic"
							/>
							<img
								src={currentCase.funcImgSmallR}
								alt="pic"
							/>
						</div>
						<img
							src={currentCase.funcImgRight}
							alt="pic"
						/>
					</div>
				</CaseFunctionsImgs>
			</CaseFunctionsMain>
		</Separator>
	);
}

export default CaseFunctions;
