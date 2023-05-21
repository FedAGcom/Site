import {createSelector} from "reselect";

const selectTechnologies = state => state.technologies;

export const selectFrontendTechnologies = createSelector(
	[selectTechnologies],
	technologies => technologies.frontend
);
export const selectBackendTechnologies = createSelector(
	[selectTechnologies],
	technologies => technologies.backend
);
export const selectDevOpsTechnologies = createSelector(
	[selectTechnologies],
	technologies => technologies.devops
);
export const selectPopularTechnologies = createSelector(
	[selectTechnologies],
	technologies => technologies.popular
);

export const selectTechCollection = createSelector(
	[selectTechnologies],
	technologies => technologies.collection
);

export const selectTechnologiesButtons = createSelector(
	[selectTechnologies],
	technologies => technologies.buttons
);