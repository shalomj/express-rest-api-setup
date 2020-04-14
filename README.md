# Express REST API Setup
My REST API setup for Node.js, Express, and MongoDB

### Setup
Install dependencies
```sh
$ npm install
```

Create a `.env` file in the root directory of the project. Copy and setup environment-specific variables from `.env.sample` file or below:
```dosini
NODE_ENV=local
DB_CONNECTION_URI=
DB_NAME=
DB_USER=
DB_PASS=
```

### Usage
```sh
$ npm start
```
Or run with Nodemon
```sh
$ npm run server
```