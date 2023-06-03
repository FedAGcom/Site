const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const myEmail = 'muhammadk2103@gmail.com';
const passOfMyEmail = "jqtsliqxepnxltww";
// const email = 'navruz.kudratov971@gmail.com';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

function sendEmail(requestData) {
	return new Promise((resolve, reject) => {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: myEmail,
				pass: passOfMyEmail,
			},
		});
		const mail_configs = {
			from: myEmail,
			to: requestData.email,
			subject: "The FedAG Team",
			html: `
				<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
				<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
				<head>
					<meta>
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<title>%{request.firstName} %{request.lastName}</title>
					<style>
						* {
				        margin: 0;
				        padding: 0;
				        box-sizing: border-box;
						}
						a {
				        text-decoration: none;
				        color: white;
						}
						body {
				        font-family: "Nunito Sans", "Inter", sans-serif;
				        background-color: #d8c7f0;
						}
						.container {
				        position: relative;
				        top: 1vh;
				        height: 1000px;
				        max-width: 600px;
				        margin: 0 auto;
				        background-color: #272727;
						}
						@media only screen and (max-width: 500px) {
				        .container {
				            max-width: 98vw;
				        }
				        div .both-links {
				            left: 0px;
				            top: 0;
				        }
				        div .header {
				            left: 20vw;
				        }
					      div .image {
					        left: 9.5vw;
					      }
				        div .content {
				            left: 2vw;
				            padding: 20px;
				            width: 94vw;
				          }
				        p.thanks {
				            left: 2vw;
				        }
				        div .logo-image {
				            left: 2vw;
				            top: 0;
				        }
				      }   
						.header-wrapper {
						    background: wheat;
						    border-bottom-left-radius: 20px;
						    border-bottom-right-radius: 20px;
						}
						.header {
				        position: relative;
				        left: 186px;
				        height: 62px;
				        width: 60%;
				        background-size: contain;
				        background-repeat: no-repeat;
				        background-image: url("https://ci5.googleusercontent.com/proxy/EJP-WMue0t8ZFB3G0xgSuiQq3nnFH02_sGNst73zBFpCqX2hmcfwUztUk1PG_6oJmooLcAIzdRh_N6mEpyZR4Zy9La5FFS4TkQ6DpWgMUnB3aIghb90RPzuVLaePjMARkIYKvG-rNdTC7b4IW0WUMvKPUR3q-xJDWEauSZmFuAydcOD8op_9W314g8RtXTXzEOU4byTqce6KrzcEIf8=s0-d-e1-ft#https://mssmca.stripocdn.email/content/guids/CABINET_1cd37d5902ae57335ac43f3a6003a3c330a9ea40ab1e1d183b323f14c688bcbf/images/logo2_ghb.png");
						}		
						.image {
				        position: relative;
				        top: 20px;
				        left: 160px;
				        width: 80%;
				        height: 153px;
				        background-repeat: no-repeat;
				        background-size: contain;
				        background-image: url("https://mssmca.stripocdn.email/content/guids/CABINET_9aa36f49cdb5185ad35ee0f7a5c7d9380ade3ae69ada3493ecaa145d1284bee9/images/25469811_developer_male_ICK.png");
						}
						.logo-image {
				        position: relative;
				        top: 20px;
				        left: 82px;
				        background-size: cover;
				        background-repeat: no-repeat;
				        background-image: url("https://mssmca.stripocdn.email/content/guids/9d3f39f8-e766-45a7-a05b-44f53bd48435/images/logo.png");
				        width: 114px;
				        height: 114px;
						}
						.both-links {
				        position: relative;
				        display: flex;
				        flex-direction: column;
				        gap: 24px;
				        top: 20px;
				        left: 171px;
				        height: 114px;
						}
						.phone-link, .mail-link {
				        position:   relative;
				        top: 24px;
				        height: 20px;
				        line-height: 20px;
						}
						.phone-img, .mail-img {
				        width: 20px;
				        height: 20px;
						}
						.logo-wrapper {
				        display: flex;
				        flex-direction: row;
				        justify-content: flex-start;
				        position: relative;
				        height: 178px;
				        top: 20px;
				        background-size: contain;
				        background-repeat: no-repeat;
				        background-position: right 0vw bottom 0vw;
				        background-image: url("https://mssmca.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/20347363_v1072014converted_1_GkL.png");
						}
						.content {
				        position: relative;
				        top: 20px;
				        border-width: 2px;
				        border-style: solid;
				        border-color: #4ca2f8;
				        border-radius: 20px;
				        left: 82px;
				        width: 436px;
				        height: 405px;
				        background-size: cover;
				        background-repeat: no-repeat;
				        background-image: url("https://mssmca.stripocdn.email/content/guids/CABINET_9aa36f49cdb5185ad35ee0f7a5c7d9380ade3ae69ada3493ecaa145d1284bee9/images/group_347_1.png");
				        padding: 40px;
						}
						.thanks {
						    position: relative;
						    left: 82px;
						    font-size: 20px;
						    color: white;
						    width: 230px;
						}
				
						.paragraph {
						    color: white;
						}
						.footer {
				        min-width: 100%;
				        position: absolute;
				        top: 94.5%;
				        border-top-right-radius: 20px;
				        border-top-left-radius: 20px;
				        background-color: #B81034;
				        padding: 20px;
				        text-align: center;
				        color: #ffffff;
				        font-size: 14px;
						}
						.info {
				        font-weight: bold;
				        color: #B81034;
				      }
					</style>
				</head>
				<body>
					<div class="container">
					    <div class="header-wrapper">
					      <div class="header"></div>
					    </div>
					    <div class="image"></div>
					    <div class="content">
					      <p class="paragraph">
					        Hi <b>${requestData.firstName} ${requestData.lastName}</b>,
					        <br><br>
					        We have received your application. Thank you for your interest in our company. We will review your submission and get in touch with you soon.
					        <br><br>
					        Here's the information you provided:
					        <br>
					        <br>First Name: <b>${requestData.firstName}</b>
					        <br>Last Name: <b>${requestData.lastName}</b>
					        <br>Company: <b>${requestData.company}</b>
					        <br>Email: 
					        <b><a href="mailto:${requestData.email}" target="_blank">${requestData.email}</a>
					        </b>
					        <br><br>
					        If any of this information is incorrect, please reply to this email to let us know.
					      </p></div>
				      <div class="logo-wrapper">
				        <div class="logo-image"></div>
				        <div class="both-links">	
				          <a target="_blank" href="tel:+79113515055" class="phone-link">
				            <img src="https://mssmca.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/envelope_1.png" alt="+7 (911) 351-50-55" title="+7 (911) 351-50-55" class="phone-img">
				            +7 (911) 351-50-55
				          </a>
				          <a target="_blank" class="mail-link" href="mailto:ask.fedag@gmail.com?subject=The%20FedAG%20team">
				            <img src="https://tlr.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/envelope.png" alt="ask.fedag@gmail.com" title="ask.fedag@gmail.com" class="mail-img">
				            ask.fedag@gmail.com
								</a>
				        </div></div>
				
				      <p class="thanks">
				        Thanks, The FedAG team
				      </p>	
					      
					    <div class="footer">
					      © 2023 FedAG. All rights reserved.
					    </div>
					</div>	
				</body>
				</html>
			`,
		};

		transporter.sendMail(mail_configs, function(error, info) {
			if (error) {
				return reject({ message: `An error has occurred` });
			}
			return resolve({ message: info });
		});
	});
}

app.post("/", (req, res) => {
	console.log(req.body)
	sendEmail(req.body)
		.then((response) => res.send(response.message))
		.catch((error) => res.status(500).send(error.message));
});

app.listen(PORT, () => {
	console.log(`server is listening at https://localhost:${PORT} port`)
})

