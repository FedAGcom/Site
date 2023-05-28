import {createSelector} from "reselect";

export const selectDropdown = state => state.dropdown;

export const selectDropdownHidden = createSelector(
	[selectDropdown],
	dropdown => dropdown.hidden
);