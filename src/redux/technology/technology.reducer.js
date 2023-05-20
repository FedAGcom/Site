import TechnologyActionTypes from "./technology.types";

import {technologyListData} from "./technologyList.data";

const INITIAL_STATE = {
	...technologyListData,
	collection: technologyListData.popular
}

const technologyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TechnologyActionTypes.SWITCH_TECHNOLOGY_TYPE:
			return {
				...state,
				collection: action.payload
			}
		default:
			return state
	}
};

export default technologyReducer;