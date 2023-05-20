import {createSelector} from "reselect";

const selectCases = state => state.cases

export const selectCasesMainButton = createSelector(
	[selectCases],
	cases => cases.mainButton
);

export const selectCasesButton = createSelector(
	[selectCases],
	cases => cases.buttons
);

export const selectAllCases = createSelector(
	[selectCases],
	cases => cases.all
);

export const selectMarketplaceCases = createSelector(
	[selectCases],
	cases => cases.marketplace
);

export const selectEnterpriseCases = createSelector(
	[selectCases],
	cases => cases.enterprise
);

export const selectCorporateWebsiteCases = createSelector(
	[selectCases],
	cases => cases.corporate_website
);

export const selectHealthAndCareCases = createSelector(
	[selectCases],
	cases => cases.health_and_care
);

export const selectGamingCases = createSelector(
	[selectCases],
	cases => cases.gaming
);

export const selectCasesCollection = createSelector(
	[selectCases],
	cases => cases.collection
);