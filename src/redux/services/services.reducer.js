import {servicesList} from "../services/services.data";


const INITIAL_STATE = {
	...servicesList
};

const servicesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state
	}
};

export default servicesReducer;