Spreadsheet-downloader
===

Spreadsheet downloader is a tool for download google spreadsheet by command line.

Install
--------
Note: This requires Node.js v0.10 to run. If you had not install it , you can download it at [http://nodejs.org/download/](http://nodejs.org/download/) . 

1.Download the source or clone the git repository:
```
$ git@10.180.51.88:sardoip/spreadsheet-downloader.git
```

2.Switch to the project root directory:
```
$ cd spreadsheet-downloader
```

3.Install the dependencies: 
```
$ npm install
```

Usage
--------
1.Run oauth.js to get the access token of google drive:
```
$node oauth.js
```

2.Run downloader.js to download the spreadsheet with csv format from google drive:
`$node downloader.js [target file id] [worksheet gid]`

BUG
--------
If there are any bug, please feel feel to open a issues.





