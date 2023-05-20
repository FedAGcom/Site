import CasesActionTypes from "./cases.types";

export const switchCasesType = (casesCollection) => ({
	type: CasesActionTypes.SWITCH_CASES_TYPE,
	payload: casesCollection
});