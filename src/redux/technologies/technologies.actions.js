import TechnologiesActionTypes from "./technologies.types";


export const switchTechnologiesType = (techCollection) => ({
	type: TechnologiesActionTypes.SWITCH_TECHNOLOGIES_TYPE,
	payload: techCollection
});
