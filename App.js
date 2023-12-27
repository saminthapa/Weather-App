const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
const e = require('express');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
 
    app.post('/',(req,res)=>{
        
        const querry = req.body.cityname
     https.get('https://api.openweathermap.org/data/2.5/weather?q='+ querry +'&appid=464c657a48e0059cacd2b36f330490cd&units=metric', (response)=>{
         response.on('data', (data)=>{
             const weatherData = JSON.parse(data);
             const temp = weatherData.main.temp;
             const description = weatherData.weather[0].description;
             res.write("<h1>The temperature of "+ querry +" is "+ temp +" degree celcius.</h1>")
             res.write("<h2>The weather description is "+ description +" .</h2>")
         })
     })
    })

}).listen(8000);

