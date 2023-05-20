import { combineReducers } from "redux";

import dropdownReducer from "./dropdown/dropdown.reducer";
import technologyReducer from "./technology/technology.reducer";
import casesReducer from "./cases/cases.reducer";

export default combineReducers({
	dropdown: dropdownReducer,
	technology: technologyReducer,
	cases: casesReducer
});