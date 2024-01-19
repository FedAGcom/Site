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
import { Navigate, useParams } from "react-router-dom";
import { selectCollectionSingle } from "../../redux/cases/cases.selectors";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

function CasesXGPTPage() {
	const {caseName} = useParams()
	const casesCollections = useSelector(selectCollectionSingle);
	const currentCase = casesCollections[caseName]
	if(!currentCase){
			console.log(caseName)
			console.log(currentCase);
			console.log("redirect");
		return <Navigate to={"/cases"}/>
		
	}
	
	return (
		<Suspense fallback={<Spinner top="true" />}>
			<Limit>
				<CaseHero case={currentCase} />
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
