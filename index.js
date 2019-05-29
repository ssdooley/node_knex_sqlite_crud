const express = require("express");
const apiRoute = require('./routes/api');
const knex = require('./database');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/api', apiRoute);

app.listen('3000', function (req, res, next) {
    console.log("before checking for a database");
    knex.schema.hasTable('todo').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('todo', function(t) {
            t.increments('id').primary();
            t.string('title', 150);
            t.boolean('is_done');
            console.log("I should not be here if the database exists")
            });
        }
    });
});

