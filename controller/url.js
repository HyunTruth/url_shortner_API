const url = require('../model/url');

module.exports = {
  get:
  (req, res) => {
    return url.get(req)
    .then((result) => {
      res.redirect(301, result.url);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  },
};
