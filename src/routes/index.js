
const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', function (req, res, next) {
    //res.status(200).send('../html/index.html');
    res.status(200).sendFile(path.join(__dirname + '/index.html'))
});

module.exports = router;
