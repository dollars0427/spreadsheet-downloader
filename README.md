Spreadsheet-downloader
===

Spreadsheet downloader is a tool for download google spreadsheet by command line.

Install
--------
Note: This requires Node.js v0.10 to run. If you had not install it , you can download it at [http://nodejs.org/download/](http://nodejs.org/download/) . 

1.Download the source or clone the git repository.

2.Switch to the project root directory:

```bash
$ cd spreadsheet-downloader
```

3.Install the dependencies: 

```bash
$ npm install
```

Configuration
-----------
1.Copy the oauth configuration file and edit it: 

```bash
$ cp oauth.conf.sample oauth.conf 
$ vi oauth.conf
```

2.Enter your client id and sercet into the configuration file.

```json
{
"CLIENT_ID" : "THIS_IS_NOT_REAL.apps.googleusercontent.com",
"CLIENT_SECRET" : "THIS_IS_SECRET",
"REDIRECT_URL" : "urn:ietf:wg:oauth:2.0:oob",
"ACCESS_TYPE" : "offline",
"SCOPE" : "https://www.googleapis.com/auth/drive"
}

```

If you don't have your own client id and client secret , please create a project at Google Developers Console , enable the google drive api at APIS and create new Client ID at Credentials page.

**Note: The application type must be "Installed application", and Installed application type must be "other".**

3.Copy the wordsheet configuration file and edit it: 

```bash
$ cp sheet.conf.sample sheet.conf 
$ vi sheet.conf
```

4.Enter the target spreadsheet and worksheet id into the configuration file:

```json
{
"sheetId" : "The spreadsheet id",
"gId" : "The worksheet id"
}
```

Usage
--------
1.Run oauth.js to get the access token of google drive:

```
$node oauth.js
```

2.Run downloader.js to download the spreadsheet with csv format from google drive:

```
$node downloader.js [path of spreadsheet config file] [path of output file]
```

3.After that, you can get the file at your assigned path.

BUG
--------
If there are any bug, please feel feel to open a issues.