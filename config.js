const connection = require('./keys');

const knex = require('knex')({
  client: 'mysql',
  connection,
  pool: { min: 0, max: 7 },
});

const db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;
