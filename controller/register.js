const register = require('../model/register');

module.exports = {
  post:
  (req, res) => {
    const dataIncomplete = (
      !req.query.url
    );
    if (dataIncomplete) {
      res.status(400).send('post data incomplete');
    }
    return register.post(req)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  },
};
