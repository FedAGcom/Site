import React from "react";
import {
	CapeSummaryImg,
	CaseSummaryGrid,
	CaseSummaryMain,
	CaseSummaryText,
	CaseSummaryWrapper,
} from "./CaseSummary.styles";
import { Separator } from "../casePageElements/limits.styles";
import CasePageBadge from "../casePageElements/CasePageBadge";
import MobImg from "../../../assets/cases/xgpt/gptMob.png";
import CasePageParagraph from "../casePageElements/CasePageParagraph";
import CasePageHeader from "../casePageElements/CasePageHeader";
export function CaseSummary() {
	return (
		<CaseSummaryMain>
			<Separator>
				<CaseSummaryWrapper>
					<CaseSummaryText>
						<CasePageHeader show="desk">
							Краткое описание проекта
						</CasePageHeader>
						<CasePageHeader show="mob">Описание проекта</CasePageHeader>
						<CasePageParagraph>
							Веб-приложение X-GPT разработано с целью упростить процесс
							создания академических работ.
						</CasePageParagraph>
					</CaseSummaryText>
					<CaseSummaryGrid>
						<div class="block">
							<h3>Время разработки</h3>
							<h3 class="block__red">1 месяц</h3>
						</div>
						<div class="block">
							<h3>Бюджет</h3>
							<h3 class="block__red">300.000 ₽</h3>
						</div>
						<div class="block">
							<h3>Используемые технологии</h3>
							<div class="badge__wrapper">
								<CasePageBadge color={"#B81034"}>Python</CasePageBadge>
								<CasePageBadge color={"#B81034"}>FastAPI</CasePageBadge>
								<CasePageBadge color={"#B81034"}>React.js</CasePageBadge>
							</div>
						</div>
					</CaseSummaryGrid>
					<CapeSummaryImg>
						<img
							src={MobImg}
							alt="Summary"
						/>
					</CapeSummaryImg>
				</CaseSummaryWrapper>
			</Separator>
		</CaseSummaryMain>
	);
}
