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
    next({
        status: 404,
        message: '404 Not Found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
        .json({
            status: "failed",
            message: err.message
        });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold);
});
