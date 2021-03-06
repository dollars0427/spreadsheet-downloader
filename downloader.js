var fs = require('fs');
var google = require('googleapis');
var request = require('request');
var log4js = require('log4js');
var logger = log4js.getLogger('Downloader');

var OAuth2Client = google.auth.OAuth2;
var oauthSetting = JSON.parse(fs.readFileSync('oauth.conf', 'utf8'));

var sheetConfigPath = process.argv[2];
var outputPath = process.argv[3];

//If the path of spreadsheet config not found, run print usage
if (!sheetConfigPath || !outputPath) {

	printUsage();

	process.exit(1);

}

var sheetConfig = JSON.parse(fs.readFileSync(sheetConfigPath, 'utf8'));

//Print the usage of the script.
function printUsage() {

	var out = "Usgae: " + process.argv[1] + " [path of spreadsheet config file]" + " [path of output file]";

	console.log(out);
}

var drive = null;

//Check the oauth token is existed. If not existed, show error and exit.

try {
	var oauth2Client = new OAuth2Client(oauthSetting.CLIENT_ID,
		oauthSetting.CLIENT_SECRET, oauthSetting.REDIRECT_URL);

	var getToken = fs.readFileSync('token.saved', 'utf8');

	token = JSON.parse(getToken);

	oauth2Client.setCredentials(token);

	getFileInfo(oauth2Client);

} catch (err) {
	logger.error(err.message);
	process.exit(1);
}

/**
 * Get the file info by google drive api.
 *
 * @params {object} oauthClient
 *
 */

function getFileInfo(oauthClient) {

	drive = google.drive({
		version: 'v2',
		auth: oauthClient
	});

	drive.files.get({
		fileId: sheetConfig.sheetId
	}, function(err, info) {

		if (err) {

			logger.error(err);

			return;
		}

		logger.debug('The Target file is : ' + info.title);

		var exportLinks = info.exportLinks['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

		downloadCsv(exportLinks);
	});
}

/**
 * Downolad the spreadsheet with csv format.
 *
 * @params {string} exportLinks
 *
 */

function downloadCsv(exportLinks) {

	var accessToken = drive._options.auth.credentials.access_token;

	var params = {
		access_token: accessToken
	};

	request.get({
			url: exportLinks,
			qs: params
		})
		.on('response', function(res) {

			var fws = fs.createWriteStream(outputPath);

			res.pipe(fws);
		});
}
