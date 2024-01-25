import viktorIcon from "../../assets/homepage/slider/viktor.png";
import maksimIcon from "../../assets/homepage/slider/ekaterina.png";
import pavelIcon from '../../assets/homepage/slider/pavel.png';
export const temporaryArray = [
	{
		"quote": "There were tight deadlines and a difficult task. We searched for specialists for a long time and only FEDAG had the necessary experts. Recommended!",
		"caseName": "CO.Transfers",
		"imageSource": maksimIcon,
		"index": 0,
		"key": "slide1ii"
	},
	{
		"quote": "The effectiveness of decisions and the speed of the team's work left us with a pleasant feeling. We did not expect such indicators.",
		"caseName": "SKKOD Clinic",
		"imageSource": viktorIcon,
		"index": 1,
		"key": "slide2ii"
	},
	{
		"quote": "No one took on our project because they were afraid to entrust their specialists to us and considered us a small company. But FEDAG believed in us and did everything right!",
		"caseName": "LuckyCase.ru",
		"imageSource": pavelIcon,
		"index": 2,
		"key": "slide3ii"
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
