require('dotenv').config();
const dbConnection = require('./config/database');
const express = require('express');
const app = require('express')();
const path = require("path");
app.use(express.static(path.join(__dirname, "client/src")));

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    // app.use(express.static(path.join(__dirname, '../client')))
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../client'))
    // })

    app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}!`));
    console.log('Connected to MongoDB');

}).catch(console.error);
