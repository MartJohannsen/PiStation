const express = require('express');

const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const app = express();
const path = __dirname + "/views/";


// For at de enkelte filer kan anvendes fra browser:
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path));

app.get('/', function(req, res){
    res.sendFile(path + 'index.html', function(err){
        
    });
});

app.listen(port || process.env);
console.log("Is now running!");

/*
var server = http.createServer(function(request, response){

    var request = require('request');
    request(url, function(err, res, body){
        //console.log(body);
        var weatherdata = JSON.parse(body);
        console.log(weatherdata);
        var celcius = Number((weatherdata.currently.temperature- 32) * 0.5556).toFixed(1);
        response.write("<h1>" + celcius + "</h1>");
        response.write("<h1>" + weatherdata.timezone + "</h1>");
        
        response.end();
    })
}).listen(3000 || process.env);
*/