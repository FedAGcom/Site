import sliderActionTypes from "./slider.types";
import {leftButtonClicked, rightButtonClicked} from "./slider.utils";

export const leftBtnClicked = (previous, next) => ({
	type: sliderActionTypes.LEFT_BUTTON_CLICKED,
	payload: leftButtonClicked(previous, next)
})

export const rightBtnClicked = (previous) => ({
	type: sliderActionTypes.RIGHT_BUTTON_CLICKED,
	payload: rightButtonClicked(previous)
});