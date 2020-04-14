const mongoose = require('mongoose');
const colors = require('colors');

const DB = {};

/**
 * Setup listeners for mongoose connection
 */
DB.init = function () {
    mongoose.connection.on('connecting', () => console.log('Connecting to database...'.brightBlue));

    mongoose.connection.on('connected', () => console.log(`Database connected: ${mongoose.connection.host}`.green.bold));

    mongoose.connection.on('error', this._handleError);

    return this;
};

/**
 * Connect to database
 */
DB.connect = async function () {
    try {
        this.connection = await mongoose.connect(
            process.env.DB_CONNECTION_URI,
            {
                dbName: process.env.DB_NAME,
                user: process.env.DB_USER,
                pass: process.env.DB_PASS,
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        );
    } catch (err) {
        this._handleError(err);
    }
};

/**
 * Log database error and end the process
 */
DB._handleError = function (err) {
    console.log(`Database connection error: ${err.message}`.red);

    process.exit(1);
};

module.exports = DB;