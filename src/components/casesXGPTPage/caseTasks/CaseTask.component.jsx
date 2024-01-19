import React from "react";
import { Separator } from "../casePageElements/limits.styles";
import { CaseTaskMain } from "./CaseTask.styles";
import CasePageParagraph from "../casePageElements/CasePageParagraph";
import CasePageHeader from "../casePageElements/CasePageHeader";

function CaseTask() {
	return (
		<Separator>
			<CaseTaskMain>
				<CasePageHeader>Реализация задач</CasePageHeader>
				<CasePageParagraph>
					В начале разработки проведено исследование предметной области,
					определены требования. Была использована методология Agile для гибкой
					разработки. Интеграция с ChatGPT4 API была выполнена с применением
					асинхронных запросов. Взаимодействие между FastAPI и React
					обеспечивает быструю и отзывчивую работу приложения.
				</CasePageParagraph>
			</CaseTaskMain>
		</Separator>
	);
}

export default CaseTask;
