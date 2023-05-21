const defaultMakarenkoGleb = require("../../assets/employees/makarenkogleb1.png");
const activeMakarenkoGleb = require("../../assets/employees/makarenkogleb2.png");
const fedor = require("../../assets/employees/fedor.png");
const alexander = require("../../assets/employees/alexander.png");
const person1 = require("../../assets/employees/person1.png");
const person2 = require("../../assets/employees/person2.png");
const person3 = require("../../assets/employees/person3.png");
const person4 = require("../../assets/employees/person4.png");
const person5 = require("../../assets/employees/person5.png");

export const employeesList = {
	"score": [
		{
			"key": "score32",
			"scorePercentage": "+32%",
			"scoreDefinition": "Average Increased Conversion"
		},
		{
			"key": "score59",
			"scorePercentage": "+59%",
			"scoreDefinition": "Average Increased Revenue"
		}
	],
	"main": [
		{
			"key": "mainCEOFedor",
			"name": "Fedor",
			"position": "CEO",
			"imageSource": [fedor]
		},
		{
			"key": "mainCTOAlexander",
			"name": "Alexander",
			"position": "CTO",
			"imageSource": [alexander]
		}
	],

	"general": [
		{
			"key": "glebmakarenko",
			"name": "Gleb Makarenko",
			"position": "Project manager (3+ years)",
			"imageSource": [defaultMakarenkoGleb, activeMakarenkoGleb]
		},
		{
			"key": "person1",
			"name": "person1",
			"position": "developer",
			"imageSource": [person1, person1]
		},
		{
			"key": "person2",
			"name": "person2",
			"position": "developer",
			"imageSource": [person2, person2]
		},
		{
			"key": "person3",
			"name": "person3",
			"position": "developer",
			"imageSource": [person3, person3]
		},
		{
			"key": "person4",
			"name": "person4",
			"position": "developer",
			"imageSource": [person4, person4]
		},
		{
			"key": "person5",
			"name": "person5",
			"position": "developer",
			"imageSource": [person5, person5]
		},
	]
}