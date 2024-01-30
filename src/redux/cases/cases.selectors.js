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
export const selectITCases = createSelector(
	[selectCases],
	cases => cases.informational_technologies
);
export const selectLearningCases = createSelector(
	[selectCases],
	cases => cases.learning
);
export const selectHistoryCases = createSelector(
	[selectCases],
	cases => cases.history
);
export const selectTransportCases = createSelector(
	[selectCases],
	cases => cases.transport
);
export const selectScienceCases = createSelector(
	[selectCases],
	cases => cases.science
);

export const selectCasesCollection = createSelector(
	[selectCases],
	cases => cases.collection
);

export const selectCollection = caseUrlParam =>
	createSelector(
		[selectAllCases],
		allCases => allCases ? allCases[caseUrlParam] : null
	);

export const selectCollectionSingle = createSelector(
	[selectCases],
	cases => cases.collectionSingle
);