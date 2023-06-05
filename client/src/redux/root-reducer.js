import { combineReducers } from "redux";

import dropdownReducer from "./dropdown/dropdown.reducer";
import technologiesReducer from "./technologies/technologies.reducer";
import casesReducer from "./cases/cases.reducer";
import employeesReducer from "./employees/employees.reducer";
import sliderReducer from "./slider/slider.reducer";
import servicesReducer from "./services/services.reducer";

export default combineReducers({
	slider: sliderReducer,
	dropdown: dropdownReducer,
	technologies: technologiesReducer,
	cases: casesReducer,
	employees: employeesReducer,
	services: servicesReducer
});