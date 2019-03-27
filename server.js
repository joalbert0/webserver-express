const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
//.................
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');





app.get('/', (req, res) => {
    //res.send('Hello World');
    //let salida = {
    //  nombre: 'fernando',
    // edad: 32,
    // url: req.url

    //};
    //res.get('Hola Data')
    res.render('home', {
        nombre: 'fernando',
        //  anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {
    res.render('about', {});

});

//..........
app.listen(port, () => {
    console.log(`escuchando peticiones puerto ${ port }`);
});