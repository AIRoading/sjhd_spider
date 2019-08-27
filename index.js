
'use strict'

const Crawler = require('crawler');
const fs = require("fs");

let crawler = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        done();
    }
});

crawler.queue({
  //  uri: 'http://www.example.com/image.jpg',
   uri:'http://www.szhuodong.com/',
  //  filename: 'myImage.jpg',
   encoding: "utf-8",
   forceUTF8:true,
   filename:"index.html",
   jQuery: false
});
