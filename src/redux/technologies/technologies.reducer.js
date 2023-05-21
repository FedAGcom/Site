import TechnologiesActionTypes from "./technologies.types";

import {technologiesData} from "./technologies.data";

const INITIAL_STATE = {
	...technologiesData,
	collection: technologiesData.popular
}

const technologiesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TechnologiesActionTypes.SWITCH_TECHNOLOGIES_TYPE:
			return {
				...state,
				collection: action.payload
			}
		default:
			return state
	}
};

export default technologiesReducer;