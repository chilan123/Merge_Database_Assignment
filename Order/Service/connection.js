const dotenv = require("dotenv");
// Function to connect to the database
const {Client} = require("pg");

    dotenv.config();

    const client = new Client({
        user: process.env.POSTGRE_USER,
        host: process.env.POSTGRE_HOST,
        database: process.env.POSTGRE_DB,
        password: process.env.POSTGRE_PW, // Remove the space at the beginning of the password
        port: process.env.POSTGRE_PORT
    });

    client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
    })
    .catch((error) => {
        console.error('Error connecting to PostgreSQL:', error);
        throw error;
    });

module.exports = client;
