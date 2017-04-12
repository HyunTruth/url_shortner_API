const Urls = require('../functions/urls');

module.exports = {
  get(req) {
    id = req.params.id
    return Urls.incrementVisits(id)
    .then((incrementResult) => {
      return Urls.fetchURL(id)
    })
    .catch(err => (Promise.reject(err)));
  }
};
