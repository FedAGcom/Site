import {createSelector} from "reselect";

const selectEmployees = state => state.employees;

export const selectMainEmployees = createSelector(
	[selectEmployees],
	employees => employees.main
);

export const selectGeneralEmployees = createSelector(
	[selectEmployees],
	employees => employees.general
);

export const selectScoreEmployees = createSelector(
	[selectEmployees],
	employees => employees.score
);