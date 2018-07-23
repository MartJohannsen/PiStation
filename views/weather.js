
// Problemet med denne fil er, at jeg prøver på at køre node, i browseren. Dette duer ikke..
// umiddelbart ligner det på internettet, at man skal bruge browserify!


var url = "https://api.darksky.net/forecast/3319dec1260c33b7321eaa5123cf4473/55.730857,12.494023?exclude=[minutely,hourly,daily,flags]?units=[si]";

function getWeather(){
    
        var request = require('request');
        request(url, function(err, res, body){
            //console.log(body);
            var weatherdata = JSON.parse(body);
            console.log(weatherdata);
            var celcius = Number((weatherdata.currently.temperature- 32) * 0.5556).toFixed(1);
            document.getElementById('weather').innerHTML = celcius;
            document.getElementById('weather').innerHTML = weatherdata.timezone;
            
            response.end();
        });
    };

    


