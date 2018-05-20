const express = require('express')
const app = express()
const hbs = require('hbs')

require('./hbs/helpers/helpers')


const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'mauricio perea rodríguez'
    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});