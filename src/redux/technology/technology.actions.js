import TechnologyActionTypes from "./technology.types";


export const switchTechnologyType = (techCollection) => ({
	type: TechnologyActionTypes.SWITCH_TECHNOLOGY_TYPE,
	payload: techCollection
});
