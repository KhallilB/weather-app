const argv = require('yargs').argv;
const request = require('request');

module.exports = (app) => {
    
    let appid = process.env.apiKey

    //HOME PAGE
    app.get('/', (req, res) => {
        res.render('home-data');
    });


    app.post('/', (req, res) => {
        let city = req.body.city;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${appid}`
      
        request(url, (err, response, body) => {
            
          if(err){

            res.render('home-data', {weather: null, error: 'Error, please try again'});

          } else {

            let weather = JSON.parse(body)

            if(weather.main == undefined){

              res.render('home-data', {weather: null, error: 'Error, please try again'});

            } else {

              let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
              res.render('home-data', {weather: weatherText, error: null});

            }
          }
        });
      })
    

}