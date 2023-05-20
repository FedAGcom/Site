import CasesActionTypes from "./cases.types";

import {casesListData} from "./casesList.data";

const INITIAL_STATE = {
	...casesListData,
	collection: casesListData.all
}

const casesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CasesActionTypes.SWITCH_CASES_TYPE:
			return {
				...state,
				collection: action.payload
			}
		default:
			return state
	}
};

export default casesReducer;