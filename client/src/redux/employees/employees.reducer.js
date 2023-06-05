import {employeesList} from "./employees.data";

const INITIAL_STATE = {
	...employeesList
};

const employeesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state
	}
};

export default employeesReducer;