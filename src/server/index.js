const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.set('json spaces', 2)

 app.use(bodyParser.json());