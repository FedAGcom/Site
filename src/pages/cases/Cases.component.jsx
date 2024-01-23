import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import CasesPage from "../../components/casesPage/CasesPage.component";
import SKKODPage from "../../components/SKKODPage/SKKODPage.component";
import Spinner from "../../components/spinner/spinner.component";
import CasesXGPTPage from "../../components/casesXGPTPage/CasesXGPTPage";


const CasesComponent = () => {
	return (
		<Suspense fallback={<Spinner top="true" />} >
			<Routes>
				<Route path="/" element={<CasesPage />} />
				{/* <Route path='/skkod' element={<SKKODPage />} /> */}
				<Route path='/:caseName' element={<CasesXGPTPage/>}/>
			</Routes>
		</Suspense>
	)
};

export default CasesComponent;