import React from "react";
import { CaseResultMain } from "./CaseResult.styles";
import { Separator } from "../casePageElements/limits.styles";
import CasePageHeader from "../casePageElements/CasePageHeader";
import CasePageParagraph from "../casePageElements/CasePageParagraph";

function CaseResult() {
	return (
		<Separator>
			<CaseResultMain>
				<CasePageHeader>Результат</CasePageHeader>
				<CasePageParagraph>
					X-GPT успешно улучшил процесс создания академических работ,
					обеспечивая пользователям удобство, высокое качество текстов и
					сокращение времени на написание. Полученный продукт оценен заказчиком
					и активно используется в образовательных целях.
				</CasePageParagraph>
			</CaseResultMain>
		</Separator>
	);
}

export default CaseResult;
