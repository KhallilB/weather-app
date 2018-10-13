const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/weather-app', { useNewUrlParser: true })

require('./controllers/datas')(app);

module.exports = (app);

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});