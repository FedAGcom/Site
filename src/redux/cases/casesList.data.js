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

export const casesListData = {
	"all": [
		{
			"key": "X-GPTCase",
			"imgSource": xGpt,
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
		{
			"key": "InteractiveTablesForMuseumCase",
			"imgSource": museumImg,
			"url": "interactive-tables",
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
			"navTo": "/itm"

		},
		{
			"key": "TelegramWebAppCase",
			"imgSource": telegramWebIMG,
			"url": "telegram-web-app",
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
			"heroHeader":"gptHeroHeader",
			"heroParagraph": "gptHeroParagraph",
			"heroBadge":["education"],
			"heroImg": gptHeroImg,
			"sumHeaderDesk": "gptSumHDesk",
			"sumHeaderMob": "gptSumHMob",
			"sumHeaderP": "gptSumHP",
			"sumGridTime":"gptTime",
			"sumGridTimeSpent": "gptTimeSpent",
			"sumGridMoney": "gptMoney",
			"sumGridMoneySpent": "gptMoneySpent",
			"sumTech":"gptTech",
			"sumTechStack": ["Python", "FastAPI", "React.js"],
			"sumImg":gptSumImg,
			"taskHeader":"gptTaskHeader",
			"taskParagraph":"gptTaskParagraph",
			"funcHeader":"gptFuncHeader",
			"funcList":["registration", "edit", "generate", "fill"],
			"funcImgLeft":gptFuncImgL,
			"funcImgSmallL": gptFuncImgSmallL,
			"funcImgSmallR": gptFuncImgSmallR,
			"funcImgRight": gptFuncImgR,
			"resHeader": "gptResHeader",
			"resParagraph":"gptResParagraph"
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