const xGpt = require("../../assets/cases/x-gpt.png")
const personalAccount = require("../../assets/cases/persAccount.png")
const rsImg = require("../../assets/cases/rs.png")
const museumImg = require("../../assets/cases/museum.png")
const telegramWebIMG = require("../../assets/cases/telegramWeb.png")

const gptHeroImg = require("../../assets/cases/xgpt/gptLogo.png")
const gptSumImg = require("../../assets/cases/xgpt/gptMob.png")
const gptFuncImgL = require("../../assets/cases/xgpt/gptDetails.png")
const gptFuncImgSmallL = require("../../assets/cases/xgpt/gptSpeed.png")
const gptFuncImgSmallR = require("../../assets/cases/xgpt/gptOriginal.png")
const gptFuncImgR = require("../../assets/cases/xgpt/gptLogin.png")

const skkodHeroImg = require("../../assets/cases/personal-account/preview.png")
const skkodSumImg = require("../../assets/cases/personal-account/overview.png")
const skkodFuncImgL = require("../../assets/cases/personal-account/first-functionality.png")
const skkodFuncImgSmallL = require("../../assets/cases/personal-account/first-small-functionality.png")
const skkodFuncImgSmallR = require("../../assets/cases/personal-account/second-small-functionality.png")
const skkodFuncImgR = require("../../assets/cases/personal-account/second-functionality.png")

const skkodFeedbackImg = require("../../assets/cases/personal-account/customer.png")



const rsHeroImg = require("../../assets/cases/rs/rsHero.png")
const rsSumImg = require("../../assets/cases/rs/rsSum.png")
const rsFuncImgL = require("../../assets/cases/rs/rsFuncL.png")
const rsFuncImgSmallL = require("../../assets/cases/rs/rsFuncSmallL.png")
const rsFuncImgSmallR = require("../../assets/cases/rs/rsFuncSmallR.png")
const rsFuncImgR = require("../../assets/cases/rs/rsFuncR.png")



const museumHeroImg = require("../../assets/cases/museum/hero.png")
const museumSumImg = require("../../assets/cases/museum/sum.png")
const museumFuncImgL = require("../../assets/cases/museum/funcL.png")
const museumFuncImgSmallR = require("../../assets/cases/museum/funcSmallR.png")
const museumFuncImgSmallL = require("../../assets/cases/museum/funcSmallL.png")
const museumFuncImgR = require("../../assets/cases/museum/funcR.png")
const museumFeedbackImg = require("../../assets/cases/museum/feedback.png")

const coHeroImg = require("../../assets/cases/telegram-app/hero.png")
const coSumImg = require("../../assets/cases/telegram-app/sum.png")
const coFuncImgL = require("../../assets/cases/telegram-app/funcL.png")
const coFuncImgSmallR = require("../../assets/cases/telegram-app/funcSmallR.png")
const coFuncImgSmallL = require("../../assets/cases/telegram-app/funcSmallL.png")
const coFuncImgR = require("../../assets/cases/telegram-app/funcR.png")
const coFeedbackImg = require("../../assets/cases/telegram-app/feedback.png")


export const casesListData = {
	"all": [
		{
			"key": "X-GPTCase",
			"imgSource": xGpt,
			"urlNew": "x-gpt",
			"url": "X-GPT",
			"name": "X-GPT",
			"nameWidth": ["408px", "80px"],
			"tags": [
				{
					"tagName": "Information technologies",
					"key": "allXCInformationTechnologyTag"
				},
				{
					"tagName": "Python",
					"key": "allXCPythonTag"
				},
				{
					"tagName": "FastAPI",
					"key": "allXCFastAPITag"
				},
				{
					"tagName": "React.js",
					"key": "allXCReactTag"
				},
				{
					"categoryName": "Education",
					"key": "AllXCEducationTag"
				}
			],
			"navTo": "/x-gpt"
		},
		{
			"key": "personalAccountCase",
			"imgSource": personalAccount,
			"url": "personal-account",
			"urlNew": "skkod",
			"name": "Personal account",
			"nameWidth": ["239px", "207px"],
			"tags": [
				{
					"tagName": "Information technologies",
					"key": "allPACInformationTechnologyTag"
				},
				{
					"tagName": "Java Spring",
					"key": "allPACJavaSpringTag"
				},
				{
					"tagName": "React.js",
					"key": "allPACReact.jsTag"
				},
				{
					"categoryName": "Health and care",
					"key": "allPACHealthAndCareTag"
				}
			],
			"navTo": "/skkod"
		},
		{
			"key": "RSCase",
			"imgSource": rsImg,
			"url": "rs",
			"urlNew": "rs",
			"name": "RS",
			"nameWidth": ["389px", "80px"],
			"tags": [
				{
					"tagName": "Information technologies",
					"key": "allRSCInformationTechnologyTag"
				},
				{
					"tagName": "Java Spring",
					"key": "allRSCJavaSpringTag"
				},
				{
					"tagName": "React.js",
					"key": "allRSCReact.jsTag"
				},
				{
					"categoryName": "Health and care",
					"key": "allRSCHealthAndCareTag"
				}
			],
			"navTo": "/rs"

		},
		{
			"key": "InteractiveTablesForMuseumCase",
			"imgSource": museumImg,
			"url": "interactive-tables",
			"urlNew": "museum",
			"name": "Interactive tables for museum",
			"nameWidth": ["499px", "312px"],
			"tags": [
				{
					"categoryName": "Science and education",
					"key": "allITMCScinceAndEducationTag"
				},
				{
					"tagName": "C#",
					"key": "allITMCC#Tag"
				},
				{
					"tagName": "History",
					"key": "allITMCHistoryTag"
				},
				{
					"tagName": "Unity",
					"key": "allITMCUnityTag"
				}
			],
			"navTo": "/museum"

		},
		{
			"key": "TelegramWebAppCase",
			"imgSource": telegramWebIMG,
			"url": "telegram-web-app",
			"urlNew": "telegram-app",
			"name": "Telegram Web App for transfers",
			"nameWidth": ["350px", "312px"],
			"tags": [
				{
					"categoryName": "Transport",
					"key": "allTWACTransportTag"
				},
				{
					"tagName": "FastAPI",
					"key": "allTWACFastAPITag"
				},
				{
					"tagName": "Aiogram",
					"key": "allTWACAiogramTag"
				}
			],
			"navTo": "/telegram-app"

		}
	],
	"SingleCaseAll":{
		"x-gpt":{
			"name":"x-gpt",
			"heroBadge":["education"],
			"heroImg": gptHeroImg,
			"sumTechStack": ["Python", "FastAPI", "React.js"],
			"sumImg":gptSumImg,
			"funcList":["registration", "edit", "generate", "fill"],
			"client": false,
			"clientFeedback": false,
			"resultList": false,
			"funcImgLeft":gptFuncImgL,
			"funcImgSmallL": gptFuncImgSmallL,
			"funcImgSmallR": gptFuncImgSmallR,
			"funcImgRight": gptFuncImgR,
		},
		"skkod":{
			"name":"skkod",
			"heroBadge":["health and care"],
			"heroImg": skkodHeroImg,
			"sumTechStack": ["Java Spring", "React.js"],
			"sumImg":skkodSumImg,
			"funcList":["registration", "post", "appointment", "adminPanel", "load", "calendar", "pay", "info"],
			"client": true,
			"clientFeedback": true,
			"resultList": ["design", "prototype", "avatar", "user-way","inner-base", "online-pay"],
			"funcImgLeft":skkodFuncImgL,
			"funcImgSmallL": skkodFuncImgSmallL,
			"funcImgSmallR": skkodFuncImgSmallR,
			"funcImgRight": skkodFuncImgR,
			"feedbackImg":skkodFeedbackImg,
		},
		"rs":{
			"name":"rs",
			"heroBadge":["work", "staff"],
			"heroImg": rsHeroImg,
			"sumTechStack": ["Java Spring", "React.js"],
			"sumImg":rsSumImg,
			"funcList":["registration", "testCreate", "test", "testAuto", "profile", "interview", "adminPage", "info"],
			"client": false,
			"clientFeedback": false,
			"resultList": [],
			"funcImgLeft":rsFuncImgL,
			"funcImgSmallL": rsFuncImgSmallL,
			"funcImgSmallR": rsFuncImgSmallR,
			"funcImgRight": rsFuncImgR,
		},
		"museum":{
			"name":"museum",
			"heroBadge":["Science and education"],
			"heroImg": museumHeroImg,
			"sumTechStack": ["C#", "Unity"],
			"sumImg": museumSumImg,
			"funcList":["infoPage","interactive","audio","video"],
			"client": true,
			"clientFeedback": true,
			"resultList": [],
			"funcImgLeft":museumFuncImgL,
			"funcImgSmallL": museumFuncImgSmallL,
			"funcImgSmallR": museumFuncImgSmallR,
			"funcImgRight": museumFuncImgR,
			"feedbackImg":museumFeedbackImg,
		},
		"telegram-app":{
			"name":"telegram-app",
			"heroBadge":["Transport"],
			"heroImg": coHeroImg,
			"sumTechStack": ["Aiogram", "Fast API"],
			"sumImg": coSumImg,
			"funcList":["order","find","share"],
			"client": true,
			"clientFeedback": true,
			"resultList": [],
			"funcImgLeft":coFuncImgL,
			"funcImgSmallL": coFuncImgSmallL,
			"funcImgSmallR": coFuncImgSmallR,
			"funcImgRight": coFuncImgR,
			"feedbackImg":coFeedbackImg,
		}
	},
	"marketplace": [],
	"enterprise": [],
	"corporate_website": [],
	"health_and_care": [
		{
			"key": "personalAccountCase",
			"imgSource": personalAccount,
			"url": "personal-account",
			"name": "Personal account",
			"nameWidth": ["239px", "207px"],
			"tags": [
				{
					"tagName": "Information technologies",
					"key": "allPACInformationTechnologyTag"
				},
				{
					"tagName": "Java Spring",
					"key": "allPACJavaSpringTag"
				},
				{
					"tagName": "React.js",
					"key": "allPACReact.jsTag"
				},
				{
					"categoryName": "Health and care",
					"key": "allPACHealthAndCareTag"
				}
			],
			"navTo": "/skkod"
		},
		{
			"key": "RSCase",
			"imgSource": rsImg,
			"url": "rs",
			"name": "RS",
			"nameWidth": ["389px", "80px"],
			"tags": [
				{
					"tagName": "Information technologies",
					"key": "allRSCInformationTechnologyTag"
				},
				{
					"tagName": "Java Spring",
					"key": "allRSCJavaSpringTag"
				},
				{
					"tagName": "React.js",
					"key": "allRSCReact.jsTag"
				},
				{
					"categoryName": "Health and care",
					"key": "allRSCHealthAndCareTag"
				}
			],
			"navTo": "/rs"

		},
	],
	
	"mainButton": {
		"name": "mainButton"
	},

	"buttons": [
		{
			"name": "All",
			"btnWidth": "67px",
			"spanWidth": "27px",
			"key": "allBtn"
		},
		{
			"name": "Marketplace",
			"btnWidth": "151px",
			"spanWidth": "111px",
			"key": "marketplaceBtn"
		},
		{
			"name": "Enterprise",
			"btnWidth": "132px",
			"spanWidth": "92px",
			"key": "enterpriseBtn"
		},
		{
			"name": "Corporate website",
			"btnWidth": "205px",
			"spanWidth": "165px",
			"key": "corporateWebsiteBtn"
		},
		{
			"name": "Health and care",
			"btnWidth": "182px",
			"spanWidth": "142px",
			"key": "healthAndCareBtn"
		}
	]
}