import React from "react";
import { CaseResultMain } from "./CaseResult.styles";
import { Separator } from "../casePageElements/limits.styles";
import CasePageHeader from "../casePageElements/CasePageHeader";
import CasePageParagraph from "../casePageElements/CasePageParagraph";
import { useTranslation } from "react-i18next";
import liArrow from "../../../assets/cases/li-vector.svg";

function CaseResult(props) {
	const { t } = useTranslation()

	const currentCase = props.case

	return (
		<Separator>
			<CaseResultMain>
				<CasePageHeader>{t(`main.homepage.singleCase.${currentCase.name}.resHeader`)}</CasePageHeader>
				<CasePageParagraph>
				{t(`main.homepage.singleCase.${currentCase.name}.resParagraph`)}
				</CasePageParagraph>
				{currentCase.resultList ? currentCase.resultList.map((el)=>{
						return (
						<li key={el}>
							<img
								src={liArrow}
								alt=">"
							/>
							<CasePageParagraph>
							{t(`main.homepage.singleCase.${currentCase.name}.resList.${el}`)}
							</CasePageParagraph>
						</li>

						)
					}) : null}
			</CaseResultMain>
		</Separator>
	);
}

export default CaseResult;
