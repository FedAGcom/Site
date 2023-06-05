import viktorIcon from "../../assets/homepage/slider/viktor.png";
import pavelIcon from "../../assets/homepage/slider/pavel.png";
export const temporaryArray = [
	{
		"quote": "No one took on our project because they were afraid to entrust their specialists to us and considered us a small company. But FEDAG believed in us and did everything right!",
		"clientName": "Slide 3",
		"caseName": "LuckyCase.ru",
		"imageSource": viktorIcon,
		"index": 2,
		"key": "slide3ii"
	},
	{
		"quote": "The effectiveness of decisions and the speed of the team's work left us with a pleasant feeling. We did not expect such indicators.",
		"clientName": "Slide 4",
		"caseName": "SKKOD Clinic",
		"imageSource": pavelIcon,
		"index": 3,
		"key": "slide4ii"
	},
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
