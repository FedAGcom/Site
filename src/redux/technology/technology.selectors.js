import {createSelector} from "reselect";

const selectTechnology = state => state.technology;

export const selectFrontendTechnologies = createSelector(
	[selectTechnology],
	technology => technology.frontend
);
export const selectBackendTechnologies = createSelector(
	[selectTechnology],
	technology => technology.backend
);
export const selectDevOpsTechnologies = createSelector(
	[selectTechnology],
	technology => technology.devops
);
export const selectPopularTechnologies = createSelector(
	[selectTechnology],
	technology => technology.popular
);

export const selectTechCollection = createSelector(
	[selectTechnology],
	technology => technology.collection
);

export const selectTechnologyButtons = createSelector(
	[selectTechnology],
	technology => technology.buttons
);