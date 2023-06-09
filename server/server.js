const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require('path');

const myEmail = 'muhammadk2103@gmail.com';
const passOfMyEmail = "jqtsliqxepnxltww";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ limit: "25mb" }));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(
		__dirname, '../client/build'
	)));

	app.get('*', function(req, res) {
		res.sendFile(path.join
			(__dirname, '../client/build', 'index.html')
		);
	});
}

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
				<!DOCTYPE html>
				<html lang="en">
				  <head>
				    <meta name="viewport" content="width=device-width, initial-scale=1.0">
				    <title>The FedAG team.</title>
				    <style>
				      @media only screen and (max-width: 600px) {
				        body, h2, p {
				          font-size: 16px;
				          line-height: 1.4;
				        }
				        img, table {
				          max-width: 100% !important;
				          width: 100% !important;
				        }
				        table td {
				          padding: 0;
				          margin: 0;
				        }
				      }
				    </style>
				  </head>
				  <body style="background-color: #f4f4f4; font-family: Arial, sans-serif; font-size: 18px; line-height: 1.5; color: #333;">
				    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 20px;">
				      <tr>
				        <td align="center" style="padding-bottom: 20px;">
				          <img src="https://ci5.googleusercontent.com/proxy/EJP-WMue0t8ZFB3G0xgSuiQq3nnFH02_sGNst73zBFpCqX2hmcfwUztUk1PG_6oJmooLcAIzdRh_N6mEpyZR4Zy9La5FFS4TkQ6DpWgMUnB3aIghb90RPzuVLaePjMARkIYKvG-rNdTC7b4IW0WUMvKPUR3q-xJDWEauSZmFuAydcOD8op_9W314g8RtXTXzEOU4byTqce6KrzcEIf8=s0-d-e1-ft#https://mssmca.stripocdn.email/content/guids/CABINET_1cd37d5902ae57335ac43f3a6003a3c330a9ea40ab1e1d183b323f14c688bcbf/images/logo2_ghb.png" alt="Company Logo" style="display: block; max-width: 200px; width: 100%;">
				        </td>
				      </tr>
				      <tr>
				        <td>
				          <h2 style="font-size: 24px; margin-bottom: 20px;">Thank you for your request!</h2>
				          <p style="margin-bottom: 20px;">Dear ${requestData.firstName} ${requestData.lastName},<br><br>We have received your request for more information about ${requestData.company}. Our team will be in touch with you soon to answer any questions you may have.<br><br>Best Regards,<br>The FedAG team.</p>
				          <table cellspacing="0" cellpadding="0" border="0" width="100%">
				            <tr>
				              <td width="35%" style="font-weight: bold; padding-bottom: 10px;">Name:</td>
				              <td>${requestData.firstName} ${requestData.lastName}</td>
				            </tr>
				            <tr>
				              <td style="font-weight: bold; padding-bottom: 10px;">Company:</td>
				              <td>${requestData.company}</td>
				            </tr>
				            <tr>
				              <td style="font-weight: bold; padding-bottom: 10px;">Email:</td>
				              <td>${requestData.email}</td>
				            </tr>
				          </table>
				        </td>
				      </tr>
				    </table>
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
	sendEmail(req.body)
		.then((response) => res.send(response.message))
		.catch((error) => res.status(500).send(error.message));
});

app.post('/contact-us', (req, res) => {
	sendEmail(req.body)
		.then((response) => res.send(response.message))
		.catch((error) => res.status(500).send(error.message));
});

app.post('/career', (req, res) => {
	sendEmail(req.body)
		.then((response) => res.send(response.message))
		.catch((error) => res.status(500).send(error.message));
})

app.listen(PORT, () => {
	console.log(`server is listening at https://localhost:${PORT} port`)
});