const telegramBot = require("../../assets/cases/preview1.png")
const personalAccount = require("../../assets/cases/preview2.png")
const onlinePlayground = require("../../assets/cases/preview3.png")

export const casesListData = {
	"all": [
		{
			"key": "telegramBotCase",
			"imgSource": telegramBot,
			"name": "Telegram bot application",
			"nameWidth": ["348px", "302px"],
			"tags": [
				{
					"tagName": "Mobile development",
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
					"tagName": "Social media bot",
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
					"tagName": "Health and care",
					"key": "allPACHealthAndCareTag"
				}
			],
			"navTo": "/personal-account"
		},
		{
			"key": "onlinePlaygroundCase",
			"imgSource": onlinePlayground,
			"name": "Online playground platform",
			"nameWidth": ["389px", "312px"],
			"tags": [
				{
					"tagName": "Gaming",
					"key": "allOPCGamingTag"
				},
				{
					"tagName": "TypeScript",
					"key": "allOPCTypeScriptTag"
				},
				{
					"tagName": "Enterprise",
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
			"name": "Online playground platform",
			"nameWidth": ["389px", "312px"],
			"tags": [
				{
					"tagName": "Gaming",
					"key": "enterpriseOPCGamingTag"
				},
				{
					"tagName": "TypeScript",
					"key": "enterpriseOPCTypeScriptTag"
				},
				{
					"tagName": "Enterprise",
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
					"tagName": "Health and care",
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
			"name": "Online playground platform",
			"nameWidth": ["389px", "312px"],
			"tags": [
				{
					"tagName": "Gaming",
					"key": "gamingOPCGamingTag"
				},
				{
					"tagName": "TypeScript",
					"key": "gamingOPCTypeScriptTag"
				},
				{
					"tagName": "Enterprise",
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