const db = require('../config');

const Urls = db.Model.extend({
  tableName: 'urls',
});

module.exports = db.model('Urls', Urls);
