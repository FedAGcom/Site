import React, { Suspense } from "react";
import Spinner from "../spinner/spinner.component";
import { Limit } from "./casePageElements/limits.styles";
import CaseHero from "./caseHero/CaseHero.component";
import { CaseSummary } from "./caseSummary/CaseSummary.components";
import CaseTask from "./caseTasks/CaseTask.component";
import CaseFunctions from "./caseFunctions/CaseFunctions.component";
import CaseResult from "./caseResult/CaseResult.component";
import ModifiedApplication from "./caseApplication/CaseApplication.component";
import CaseCases from "./caseCases/CaseCases.component";

function CasesXGPTPage() {
	return (
		<Suspense fallback={<Spinner top="true" />}>
			<Limit>
				<CaseHero />
				<CaseSummary />
				<CaseTask />
				<CaseFunctions />
				<CaseResult />
			</Limit>
			<ModifiedApplication />
			<CaseCases />
		</Suspense>
	);
}

export default CasesXGPTPage;
