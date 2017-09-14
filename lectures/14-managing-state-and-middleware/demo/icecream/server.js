'use strict';

require('dotenv').config();

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));





app.get('/stores/find', (request, response) => {
    let sql = `SELECT * FROM stores
            WHERE ${request.query.field}=$1;`;

    client.query(sql, [request.query.val])
        .then(result => {
            console.log( result.rows); response.send(result.rows)})
        .catch(console.error);
});

app.get('/stores', (request, response) => {
    console.log( 'server sending stores');
    client.query(`SELECT * FROM stores;`)
        .then(result => response.send(result.rows))
        .catch(console.error);
});





app.get('*', (request, response) => response.sendFile('index.html', { root: './public' }));

loadDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));







function loadStores() {
    client.query('SELECT COUNT(*) FROM stores')
        .then(result => {
            if (!parseInt(result.rows[0].count)) {
                fs.readFile('./public/data/stores.json', (err, fd) => {
                    JSON.parse(fd.toString()).forEach(ele => {
                        client.query(`
                            INSERT INTO
                            stores (name, location, "bestSeller")
                            VALUES ($1, $2, $3);
                        `,
                            [ele.name, ele.location, ele.bestSeller]
                        ).catch(console.error);
                    })
                })
            }
        })
}

function loadDB() {
    client.query(`
        CREATE TABLE IF NOT EXISTS
        stores (
        store_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        "bestSeller" VARCHAR(255)
        );`
    )
        .then(loadStores)
        .catch(console.error);
}
