require('dotenv').config({ path: '../.env'})

const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
const getAnime = (request, response) => {
    pool.query('select id, title, type, score from anime limit 100', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

module.exports = {
    getAnime
}