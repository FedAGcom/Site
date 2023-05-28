import sliderActionTypes from "./slider.types";
import {sliderData} from "./slider.data";
import temporaryArray from "./slider.utils";

const INITIAL_STATE = {
	...sliderData,
	"previous": sliderData.slides[4],
	"current": sliderData.slides[0],
	"next": sliderData.slides[1],
	"temporaryArray": temporaryArray
};

const sliderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case sliderActionTypes.LEFT_BUTTON_CLICKED:
			return {
				...state,
				next: state.current,
				current: state.previous,
				previous: action.payload
			}

		case sliderActionTypes.RIGHT_BUTTON_CLICKED:
			return {
				...state,
				previous: state.current,
				current: state.next,
				next: action.payload
			}

		default:
			return state
	}
}

export default sliderReducer;