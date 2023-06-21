const telegramBot = require("../../assets/cases/preview1.png")
const personalAccount = require("../../assets/cases/preview2.png")
const onlinePlayground = require("../../assets/cases/preview3.png")

export const casesListData = {
	"all": [
		{
			"key": "telegramBotCase",
			"imgSource": telegramBot,
			"url": "telegram-bot",
			"name": "Telegram bot application",
			"nameWidth": ["348px", "302px"],
			"tags": [
				{
					"categoryName": "Mobile development",
					"key": "allTBMobileDevelopmentTag"
				},
				{
					"tagName": "Java",
					"key": "allTBJavaTag"
				},
				{
					"tagName": "Kotlin",
					"key": "allTBKotlinTag"
				},
				{
					"categoryName": "Social media bot",
					"key": "allTBSocialMediaBotTag"
				},
				{
					"tagName": "SQL",
					"key": "AllTBSqlTag"
				}
			],
			"navTo": "/telegram-bot"
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
					"tagName": "JavaScript",
					"key": "allPACJavaScriptTag"
				},
				{
					"tagName": "SQL",
					"key": "allPACSqlTag"
				},
				{
					"categoryName": "Health and care",
					"key": "allPACHealthAndCareTag"
				}
			],
			"navTo": "/personal-account"
		},
		{
			"key": "onlinePlaygroundCase",
			"imgSource": onlinePlayground,
			"url": "online-playground",
			"name": "Online playground platform",
			"nameWidth": ["389px", "312px"],
			"tags": [
				{
					"categoryName": "Gaming",
					"key": "allOPCGamingTag"
				},
				{
					"tagName": "TypeScript",
					"key": "allOPCTypeScriptTag"
				},
				{
					"categoryName": "Enterprise",
					"key": "allOPCEnterpriseTag"
				},
				{
					"tagName": "Angular",
					"key": "allOPCAngularTag"
				},
				{
					"tagName": "Java",
					"key": "allOPCJavaTag"
				}
			],
			"navTo": "/online-playground"

		}
	],
	"marketplace": [],
	"enterprise": [
		{
			"key": "onlinePlaygroundCase",
			"imgSource": onlinePlayground,
			"url": "online-playground",
			"name": "Online playground platform",
			"nameWidth": ["389px", "312px"],
			"tags": [
				{
					"categoryName": "Gaming",
					"key": "enterpriseOPCGamingTag"
				},
				{
					"tagName": "TypeScript",
					"key": "enterpriseOPCTypeScriptTag"
				},
				{
					"categoryName": "Enterprise",
					"key": "enterpriseOPCEnterpriseTag"
				},
				{
					"tagName": "Angular",
					"key": "enterpriseOPCAngularTag"
				},
				{
					"tagName": "Java",
					"key": "enterpriseOPCJavaTag"
				}
			],
			"navTo": "/online-playground"
		}
	],
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
					"key": "healthCarePACInformationTechnologyTag"
				},
				{
					"tagName": "JavaScript",
					"key": "healthCarePACJavaScriptTag"
				},
				{
					"tagName": "SQL",
					"key": "healthCarePACSqlTag"
				},
				{
					"categoryName": "Health and care",
					"key": "healthCarePACHealthAndCareTag"
				}
			],
			"navTo": "/personal-account"
		}
	],
	"gaming": [
		{
			"key": "onlinePlaygroundCase",
			"imgSource": onlinePlayground,
			"url": "online-playground",
			"name": "Online playground platform",
			"nameWidth": ["389px", "312px"],
			"tags": [
				{
					"categoryName": "Gaming",
					"key": "gamingOPCGamingTag"
				},
				{
					"tagName": "TypeScript",
					"key": "gamingOPCTypeScriptTag"
				},
				{
					"categoryName": "Enterprise",
					"key": "gamingOPCEnterpriseTag"
				},
				{
					"tagName": "Angular",
					"key": "gamingOPCAngularTag"
				},
				{
					"tagName": "Java",
					"key": "gamingOPCJavaTag"
				}
			],
			"navTo": "/online-playground"
		}
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
		},
		{
			"name": "Gaming",
			"btnWidth": "110px",
			"spanWidth": "70px",
			"key": "gamingBtn"
		}
	]
}