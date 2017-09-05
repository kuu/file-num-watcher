# file-num-watcher
An HTTP server to return how many files are in the watch folder

## Install
* Install [Node.js](https://nodejs.org/)
* Clone source code and install dependencies
```
$ git clone git@github.com:kuu/file-num-watcher.git
$ cd file-num-watcher
$ npm install
```

## Run
* Start the server with specifying port and watch folder full path (the default port is 3000)
```
$ PORT={port number} WATCH_FOLDER={/path/to/watch-folder} npm start
```
* Now you can access `/api/queue`
```
$ curl http://localhost:3000/api/queue
{"num":0}
```

## Stop
* Run the following command in the same directory
```
$ npm stop
```
