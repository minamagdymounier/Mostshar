var express = require('express');
const mediaRouter = require('./media');
var mostasharRouter = require('./mostashar');
var newsRouter = require('./news');
var router = express.Router();

/* GET home page. */
router.use('/media', mediaRouter);

/*For your pages*/
//router.use('/mostashar', mostasharRouter);
//router.use('/news', newsRouter);

module.exports = router;