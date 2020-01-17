const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use(routes);
app.use((req, res, next )=>{
    console.log("Last Middleware")
    res.sendStatus(404);
})

module.exports = app;





