const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './database/todo_db.sqlite'
    },
    useNullAsDefault: true
});

module.exports = knex;