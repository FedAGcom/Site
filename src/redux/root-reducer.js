import { combineReducers } from "redux";

import dropdownReducer from "./dropdown/dropdown.reducer";
import technologiesReducer from "./technologies/technologies.reducer";
import casesReducer from "./cases/cases.reducer";
import employeesReducer from "./employees/employees.reducer";

export default combineReducers({
	dropdown: dropdownReducer,
	technologies: technologiesReducer,
	cases: casesReducer,
	employees: employeesReducer
});