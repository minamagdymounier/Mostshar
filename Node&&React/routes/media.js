var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/sliderItems', function(req, res, next) {
    const items = fs.readFileSync('PagesRecords/MediaPage/SliderPosts.json');
    console.log("OK");
    const items1 = JSON.parse(items);

    res.send({Posts:items1}).status(200);
});
router.get('/mediaItems', function(req, res, next) {
    const items = fs.readFileSync('PagesRecords/MediaPage/MediaItems.json');
    const items1 = JSON.parse(items);
    let arr=[];
    for(let i=parseInt( req.query.beg);i<parseInt( req.query.end);i++) {
        if(i>=items1.length){
            console.log("Hello")
            break;
        }
        arr.push(items1[i])
    }
    res.send({Posts:arr}).status(200);
});
router.get('/getpost', function(req, res, next) {
    const items = fs.readFileSync('PagesRecords/MediaPage/SliderPosts.json');
    console.log("OK");
    let items1 = JSON.parse(items);
    let item=null;
    for(let i=0;i<items1.length;i++) {
        if(items1[i].id===parseInt( req.query.number1)){
            item=items1[i];
            break;
        }
    }
    const mediaitems = fs.readFileSync('PagesRecords/MediaPage/MediaItems.json');
     items1 = JSON.parse(mediaitems);
    for(let i=0;i<items1.length;i++) {
        if(items1[i].id===parseInt( req.query.number1)){
            item=items1[i];
            break;
        }
    }
    res.send({Post:item}).status(200);
});

module.exports = router;
