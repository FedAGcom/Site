const angularImage = require("../../assets/homepage/technologies/angular.png");
const javaImage = require("../../assets/homepage/technologies/java.png");
const pythonImage = require("../../assets/homepage/technologies/python.png");
const reactImage = require("../../assets/homepage/technologies/react.png");
const phpImage = require("../../assets/homepage/technologies/php.png");
const vueImage = require("../../assets/homepage/technologies/vue.png");

export const technologiesData = {
	"frontend": [
		{
			"name": "Angular",
			"imgSource": angularImage,
			"key": "angularIconImage"
		},
		{
			"name": "React",
			"imgSource": reactImage,
			"key": "reactIconImage"

		},
		{
			"name": "Vue",
			"imgSource": vueImage,
			"key": "vueIconImage"

		}
	],
	"backend": [
		{
			"name": "Java",
			"imgSource": javaImage,
			"key": "javaIconImage"

		},
		{
			"name": "Python",
			"imgSource": pythonImage,
			"key": "pythonIconImage"

		},
		{
			"name": "Php",
			"imgSource": phpImage,
			"key": "phpIconImage"

		}
	],
	"devops": [],
	"popular": [
		{
			"name": "Angular",
			"imgSource": angularImage,
			"key": "angularIconImage"

		},
		{
			"name": "Java",
			"imgSource": javaImage,
			"key": "javaIconImage"

		},
		{
			"name": "Python",
			"imgSource": pythonImage,
			"key": "pythonIconImage"

		},
		{
			"name": "React",
			"imgSource": reactImage,
			"key": "reactIconImage"

		},
		{
			"name": "Php",
			"imgSource": phpImage,
			"key": "phpIconImage"

		},
		{
			"name": "Vue",
			"imgSource": vueImage,
			"key": "vueIconImage"
		}
	],
	"buttons": [
		{
			"name": "Popular",
			"btnWidth": "110px",
			"spanWidth": "70px",
			"key": "popularBtn"
		},
		{
			"name": "Frontend",
			"btnWidth": "121px",
			"spanWidth": "81px",
			"key": "frontendBtn"
		},
		{
			"name": "Backend",
			"btnWidth": "117px",
			"spanWidth": "77px",
			"key": "backendBtn"
		},
		{
			"name": "DevOps",
			"btnWidth": "113px",
			"spanWidth": "73px",
			"key": "devOpsBtn"
		}
	]
}
