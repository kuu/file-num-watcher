const fs = require('fs');
const path = require('path');
const express = require('express');
const debug = require('debug')('file-num-watcher');

const router = express.Router();
const WATCH_FOLDER = process.env.WATCH_FOLDER || process.cwd();

/* GET the number of files in the watch folder. */
router.get('/queue', (_, res) => {
  debug('--- the files in the watch folder:');
  const fileList = fs.readdirSync(WATCH_FOLDER).filter(file => {
    const isFile = fs.statSync(path.join(WATCH_FOLDER, file)).isFile();
    debug(`${file} (${isFile ? 'file' : 'dir'})`);
    return isFile;
  });
  debug('---');
  res.json({num: fileList.length});
});

module.exports = router;
