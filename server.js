const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const DB = require('./db');
const usersRoute = require('./routes/users.sample');

// Init environment config
dotenv.config();

// Connect to the database
DB.init().connect();

// Setup Express server
const app = express();

// Middleware to parse request payload to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint handler
app.use('/users', usersRoute);

// 404 Not found handler
app.use((req, res, next) => {
    const err = new Error('404 Not Found');

    err.status = 404;

    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: "failed",
        message: err.message
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold);
});
