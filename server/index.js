const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/anime', db.getAnime);

app.listen(port, () => {
    console.log(`App running on port ${port}`)
});