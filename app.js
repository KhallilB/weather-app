const argv = require('yargs').argv;
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true, newUrlParser: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

const request = require('request')
let apiKey = '8ab2dcf2e766a0cfb3ff7dd4baf947f4';

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

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});