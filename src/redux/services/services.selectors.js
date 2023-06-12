import {createSelector} from "reselect";

const selectServices = state => state.services;

export const selectAllServices = createSelector(
	[selectServices],
	services => services.all
);