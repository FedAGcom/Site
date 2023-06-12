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
					"key": "allTBMobileDevelopmentTag",
					"tagBtnWidth": ["188px", "169px"],
					"tagSpanWidth": ["148px", "129px"]
				},
				{
					"tagName": "Java",
					"key": "allTBJavaTag",
					"tagBtnWidth": ["71px", "67px"],
					"tagSpanWidth": ["31px", "27px"],
				},
				{
					"tagName": "Kotlin",
					"key": "allTBKotlinTag",
					"tagBtnWidth": ["82px", "77px"],
					"tagSpanWidth": ["42px", "37px"]
				},
				{
					"tagName": "Social media bot",
					"key": "allTBSocialMediaBotTag",
					"tagBtnWidth": ["159px", "144px"],
					"tagSpanWidth": ["119px", "104px"]
				},
				{
					"tagName": "SQL",
					"key": "AllTBSqlTag",
					"tagBtnWidth": ["71px", "67px"],
					"tagSpanWidth": ["31px", "27px"]
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
					"key": "allPACInformationTechnologyTag",
					"tagBtnWidth": ["207px", "186px"],
					"tagSpanWidth": ["167px", "146px"]
				},
				{
					"tagName": "JavaScript",
					"key": "allPACJavaScriptTag",
					"tagBtnWidth": ["112px", "103px"],
					"tagSpanWidth": ["72px", "63px"]
				},
				{
					"tagName": "SQL",
					"key": "allPACSqlTag",
					"tagBtnWidth": ["71px", "67px"],
					"tagSpanWidth": ["31px", "27px"]
				},
				{
					"tagName": "Health and care",
					"key": "allPACHealthAndCareTag",
					"tagBtnWidth": ["154px", "140px"],
					"tagSpanWidth": ["114px", "100px"]
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
					"key": "allOPCGamingTag",
					"tagBtnWidth": ["96px", "89px"],
					"tagSpanWidth": ["56px", "49px"]
				},
				{
					"tagName": "TypeScript",
					"key": "allOPCTypeScriptTag",
					"tagBtnWidth": ["115px", "105px"],
					"tagSpanWidth": ["75px", "65px"]
				},
				{
					"tagName": "Enterprise",
					"key": "allOPCEnterpriseTag",
					"tagBtnWidth": ["114px", "105px"],
					"tagSpanWidth": ["74px", "65px"]
				},
				{
					"tagName": "Angular",
					"key": "allOPCAngularTag",
					"tagBtnWidth": ["109px", "91px"],
					"tagSpanWidth": ["59px", "51px"]
				},
				{
					"tagName": "Java",
					"key": "allOPCJavaTag",
					"tagBtnWidth": ["71px", "67px"],
					"tagSpanWidth": ["31px", "27px"]
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
					"key": "enterpriseOPCGamingTag",
					"tagBtnWidth": ["96px", "89px"],
					"tagSpanWidth": ["56px", "49px"]
				},
				{
					"tagName": "TypeScript",
					"key": "enterpriseOPCTypeScriptTag",
					"tagBtnWidth": ["115px", "105px"],
					"tagSpanWidth": ["75px", "65px"]
				},
				{
					"tagName": "Enterprise",
					"key": "enterpriseOPCEnterpriseTag",
					"tagBtnWidth": ["114px", "105px"],
					"tagSpanWidth": ["74px", "65px"]
				},
				{
					"tagName": "Angular",
					"key": "enterpriseOPCAngularTag",
					"tagBtnWidth": ["109px", "91px"],
					"tagSpanWidth": ["59px", "51px"]
				},
				{
					"tagName": "Java",
					"key": "enterpriseOPCJavaTag",
					"tagBtnWidth": ["71px", "67px"],
					"tagSpanWidth": ["31px", "27px"]
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
					"key": "healthCarePACInformationTechnologyTag",
					"tagBtnWidth": ["207px", "186px"],
					"tagSpanWidth": ["167px", "146px"]
				},
				{
					"tagName": "JavaScript",
					"key": "healthCarePACJavaScriptTag",
					"tagBtnWidth": ["112px", "103px"],
					"tagSpanWidth": ["72px", "63px"]
				},
				{
					"tagName": "SQL",
					"key": "healthCarePACSqlTag",
					"tagBtnWidth": ["71px", "67px"],
					"tagSpanWidth": ["31px", "27px"]
				},
				{
					"tagName": "Health and care",
					"key": "healthCarePACHealthAndCareTag",
					"tagBtnWidth": ["154px", "140px"],
					"tagSpanWidth": ["114px", "100px"]
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
					"key": "gamingOPCGamingTag",
					"tagBtnWidth": ["96px", "89px"],
					"tagSpanWidth": ["56px", "49px"]
				},
				{
					"tagName": "TypeScript",
					"key": "gamingOPCTypeScriptTag",
					"tagBtnWidth": ["115px", "105px"],
					"tagSpanWidth": ["75px", "65px"]
				},
				{
					"tagName": "Enterprise",
					"key": "gamingOPCEnterpriseTag",
					"tagBtnWidth": ["114px", "105px"],
					"tagSpanWidth": ["74px", "65px"]
				},
				{
					"tagName": "Angular",
					"key": "gamingOPCAngularTag",
					"tagBtnWidth": ["109px", "91px"],
					"tagSpanWidth": ["59px", "51px"]
				},
				{
					"tagName": "Java",
					"key": "gamingOPCJavaTag",
					"tagBtnWidth": ["71px", "67px"],
					"tagSpanWidth": ["31px", "27px"]
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