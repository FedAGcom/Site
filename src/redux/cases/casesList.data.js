const xGpt = require("../../assets/cases/x-gpt.png")
const personalAccount = require("../../assets/cases/persAccount.png")
const rsImg = require("../../assets/cases/rs.png")
const museumImg = require("../../assets/cases/museum.png")
const telegramWebIMG = require("../../assets/cases/telegramWeb.png")

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
			"navTo": "/X-GPT"
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
			"navTo": "/personal-account"
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
			"navTo": "/rs"

		}
	],
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
			"navTo": "/personal-account"
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