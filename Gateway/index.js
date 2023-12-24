const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
// const functions = require('./routes/routes');
const proxy = require('express-http-proxy');

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/user', proxy('http://localhost:3001'));  //MySql
app.use('/order', proxy('http://localhost:3002')); //PostgreSQL
app.use('/inventory', proxy('http://localhost:3003')); //MongoDB

// app.use('/', functions);

app.listen(process.env.PORT, () => {
    console.log('Server run on port: ', process.env.PORT);
});
