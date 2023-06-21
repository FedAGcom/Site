import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import CasesPage from "../../components/casesPage/CasesPage.component";
import CasesStudyPage from "../../components/casesStudyPage/CasesStudyPage.component";
import Spinner from "../../components/spinner/spinner.component";


const CasesComponent = () => {
	return (
		<Suspense fallback={<Spinner top="true" />} >
			<Routes>
				<Route path="/" element={<CasesPage />} />
				<Route path='/:caseId' element={<CasesStudyPage />} />
			</Routes>
		</Suspense>
	)
};

export default CasesComponent;