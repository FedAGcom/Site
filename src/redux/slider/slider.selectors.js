import {createSelector} from "reselect";

export const selectSlider = state => state.slider;

export const selectSliderPrevious = createSelector(
	[selectSlider],
	slider => slider.previous
);
export const selectSliderCurrent = createSelector(
	[selectSlider],
	slider => slider.current
);
export const selectSliderNext = createSelector(
	[selectSlider],
	slider => slider.next
);
export const selectSliderPagination = createSelector(
	[selectSlider],
	slider => slider.pagination
);

