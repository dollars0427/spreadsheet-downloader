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
1.Copy the configuration file and edit it: 

```bash
$ cp option.conf.sample option.conf 
$ vi option.conf
```

2.Enter your client id and sercet to the configuration file.

```json
{
"CLIENT_ID" : "THIS_IS_NOT_REAL.apps.googleusercontent.com",
"CLIENT_SECRET" : "THIS_IS_SECRET",
"REDIRECT_URL" : "urn:ietf:wg:oauth:2.0:oob",
"ACCESS_TYPE" : "offline",
"SCOPE" : "https://www.googleapis.com/auth/drive"
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
$node downloader.js [target file id] [worksheet gid]
```

3.After that, you can get the file in spreadsheet-downloader/downloaded folder.

BUG
--------
If there are any bug, please feel feel to open a issues.