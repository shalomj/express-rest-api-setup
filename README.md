# Express REST API Setup
My REST API setup for Node.js, Express, and MongoDB

### Setup
Install dependencies
```sh
$ npm install
```

Rename `.env.sample` file to `.env` and setup environment-specific variables.

For example
```dosini
NODE_ENV=local
PORT=5000
DB_CONNECTION_URI=mongodb://localhost/restapi
DB_NAME=restapi
DB_USER=dbuser
DB_PASS=dbpass
```

### Usage
```sh
$ npm start
```
Or run with Nodemon
```sh
$ npm run server
```