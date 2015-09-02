var fs = require('fs');
var google = require('googleapis');
var request = require('request');
var log4js = require('log4js');
var logger = log4js.getLogger('Downloader');

var OAuth2Client = google.auth.OAuth2;
var oauthSetting = JSON.parse(fs.readFileSync('option.conf', 'utf8'));

var target = process.argv[2];

if (!target) {

	printUsage();

	process.exit(1);

}

function printUsage() {

	var out = "Usgae: " + process.argv[1] + " [target file id]";

	console.log(out);
}

var drive = null;

try {
	var oauth2Client = new OAuth2Client(oauthSetting.CLIENT_ID,
		oauthSetting.CLIENT_SECRET, oauthSetting.REDIRECT_URL);

	var getToken = fs.readFileSync('token.saved', 'utf8');

	var token = JSON.parse(getToken);

	oauth2Client.setCredentials(token);

	getFileInfo(oauth2Client);

} catch (err) {
	logger.error(err.message);
	process.exit(1);
}

function getFileInfo(oauthClient){

    drive = google.drive({version:'v2',auth: oauthClient});

    drive.files.get({fileId:target},function(err,info){

        if(err){

            logger.error(err);

            return;
        }

        logger.debug('The export links of this worksheets is: '
        + info.exportLinks['text/csv']);

        

    });
}
