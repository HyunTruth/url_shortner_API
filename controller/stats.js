const stats = require('../model/stats');

module.exports = {
  get:
  (req, res) => {
    return stats.get(req)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  },
};
