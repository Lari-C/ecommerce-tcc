const sqlite = require('sqlite3').verbose();
const dbName = 'ecommerce.db';
const db = new sqlite.Database(dbName, (err) => {
    if(err) return console.error(err);
});

module.exports = db;
