import React from "react";
import { CaseCasesMain } from "./CaseCases.styles";
import { Separator } from "../casePageElements/limits.styles";
import CasePageHeader from "../casePageElements/CasePageHeader";
import ListOfCasesComponent from "../../listOfCases/ListOfCases.component";

function CaseCases() {
	return (
		<Separator>
			<CaseCasesMain>
				<CasePageHeader>Похожие кейсы</CasePageHeader>
				<ListOfCasesComponent />
			</CaseCasesMain>
		</Separator>
	);
}

export default CaseCases;
