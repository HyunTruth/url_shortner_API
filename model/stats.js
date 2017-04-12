const Urls = require('../functions/urls');

module.exports = {
  get(req) {
    id = req.params.id
    return Urls.fetchURL(id)
    .then((fetchResult) => {
      delete fetchResult.id;
      delete fetchResult.url;
      return fetchResult;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
  }
};
