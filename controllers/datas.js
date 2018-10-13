const argv = require('yargs').argv;
const request = require('request');
let apiKey = '*';

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index');
    });
    
    app.post('/', (req, res) => {
        let city = argv.c || req.body.city
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        request(url, (err, res, body) => {
        if(err){
            console.log('error:', err);
        } else {
            let weather = JSON.parse(body)
            let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            console.log('body', body)
            console.log('Message:', message)
        }
    });
        res.render('index')
        console.log(req.body.city)
    })

}
