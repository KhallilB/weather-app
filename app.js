const express = require('express');
const app = express();
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('We Working!')
});

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});