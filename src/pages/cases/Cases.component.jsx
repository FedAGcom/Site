import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import CasesPage from "../../components/casesPage/CasesPage.component";
import Spinner from "../../components/spinner/spinner.component";
import SingleCasePage from "../../components/casesXGPTPage/CasesXGPTPage";


const CasesComponent = () => {
	return (
		<Suspense fallback={<Spinner top="true" />} >
			<Routes>
				<Route path="/" element={<CasesPage />} />
				<Route path='/:caseName' element={<SingleCasePage/>}/>
			</Routes>
		</Suspense>
	)
};

export default CasesComponent;