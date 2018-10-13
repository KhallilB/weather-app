const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true, newUrlParser: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

require('./controllers/datas')(app);

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});