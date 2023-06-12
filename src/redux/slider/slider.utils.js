import viktorIcon from "../../assets/homepage/slider/viktor.png";
import maksimIcon from "../../assets/homepage/slider/ekaterina.png";
export const temporaryArray = [
	{
		"quote": "There were tight deadlines and a difficult task. We searched for specialists for a long time and only FEDAG had the necessary experts. Recommended!",
		"caseName": "CO.Transfers",
		"imageSource": maksimIcon,
		"index": 3,
		"key": "slide4ii"
	},
	{
		"quote": "The effectiveness of decisions and the speed of the team's work left us with a pleasant feeling. We did not expect such indicators.",
		"clientName": "Slide 5",
		"caseName": "SKKOD Clinic",
		"imageSource": viktorIcon,
		"key": "slide5ii"
	}
];

export function leftButtonClicked(previous, next) {
	let leftOfPrevious = temporaryArray.pop();
	temporaryArray.unshift(next);

	return leftOfPrevious;
}

export function rightButtonClicked(previous) {
	let rightOfNext = temporaryArray.shift();
	temporaryArray.push(previous);

	return rightOfNext;
}

export default temporaryArray;
