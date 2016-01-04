var express = require('express');
var app = express();
var http = require("http");
var queryString = require('querystring');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/allItems",function(req,res){
    var body="";
    http.get({
        hostname:"localhost",
        port:8080,
        path:"/admin/items"
    },function(response){
        response.on("data",function(my_data){
            body += my_data;
        });
        response.on("end",function(){
            var my_str=JSON.parse(body);
            res.send(my_str);
        })
    });
});

app.get("/inputs",function(req,res){
    var body="";
    http.get({
        hostname:"localhost",
        port:8080,
        path:"/admin/getinputs"
    },function(response){
        response.on("data",function(my_data){
            body += my_data;
        });
        response.on("end",function(){
            var my_str=JSON.parse(body);
            res.send(my_str);
        })
    });
});

app.post("/input",function(req,res,next){
    var postData = queryString.stringify({
       barcode : req.body.inputs
    });

    var options = {
        hostname:"localhost",
        port:8080,
        path:"/admin/inputs",
        method:"POST",
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
        }
    };
    var require=http.request(options,function(response){
                response.on("data",function(){
                });
                response.on("end",function(){
                });
    });

    require.write(postData);
    require.end();
});

app.get("/promotions",function(req,res){
    res.send([
              {
                "type": "BUY_TWO_GET_ONE_FREE",
                "barcodes": [
                            "ITEM000000",
                            "ITEM000001",
                            "ITEM000005"
                          ]
              }
            ]);
});


var server=app.listen(3000,function(){
    console.log("%s:%s",server.address().address,server.address().port);
});

