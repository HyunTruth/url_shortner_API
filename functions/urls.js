const Urls = require('../db/urls');

module.exports = {
  checkExistence(url) {
    return Urls
    .where({ url })
    .fetch()
    .then((result) => {
      if (result) {
        return result.toJSON();
      }
      return [];
    })
    .catch(err => (Promise.reject(err)));
  },

  addNewUrls(url) {
    return new Urls({
      url,
      visits: 0
    })
    .save()
    .then(result => (result.toJSON()))
    .catch(err => (Promise.reject(err)));
  },

};
