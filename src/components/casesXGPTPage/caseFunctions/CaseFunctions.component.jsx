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

function CaseFunctions() {
	return (
		<Separator>
			<CaseFunctionsMain>
				<CasePageHeader>Функционал</CasePageHeader>
				<CaseFunctionsList>
					<li>
						<img
							src={liArrow}
							alt=">"
						/>
						<CasePageParagraph>
							Регистрация/вход в личный кабинет
						</CasePageParagraph>
					</li>
					<li>
						<img
							src={liArrow}
							alt=">"
						/>
						<CasePageParagraph>Просмотр и редактирование</CasePageParagraph>
					</li>
					<li>
						<img
							src={liArrow}
							alt=">"
						/>
						<CasePageParagraph>
							Генерация работы с помощью GPT-технологии
						</CasePageParagraph>
					</li>
					<li>
						<img
							src={liArrow}
							alt=">"
						/>
						<CasePageParagraph>Заполнение формы с работой</CasePageParagraph>
					</li>
				</CaseFunctionsList>
				<CaseFunctionsImgs>
					<div class="leftColumn">
						<img
							src={ImgDetail}
							alt="pic"
						/>
					</div>
					<div class="rightColumn">
						<div class="upperWrap">
							<img
								src={ImgOrigin}
								alt="pic"
							/>
							<img
								src={ImgSpeed}
								alt="pic"
							/>
						</div>
						<img
							src={ImgLogin}
							alt="pic"
						/>
					</div>
				</CaseFunctionsImgs>
			</CaseFunctionsMain>
		</Separator>
	);
}

export default CaseFunctions;
