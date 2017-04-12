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

  fetchURL(id) {
    return Urls
    .where({ id })
    .fetch()
    .then((result) => {
      if (result) {
        return result.toJSON();
      }
      return Promise.reject('ID does not exist');
    })
    .catch(err => (Promise.reject(err)));
  },

  incrementVisits(id) {
      return Urls
      .where({ id })
      .fetch()
      .then((result) => {
        if (result) {
          result = result.toJSON();
          const visits = result.visits + 1
          return Urls
          .where({ id })
          .save({ visits }, { patch: true });
        }
        return Promise.reject('ID does not exist');
      })
      .catch(err => Promise.reject(err));
    },

  addNewUrls(url) {
    return module.exports.checkRecordNumber()
    .then((rowNums) => {
      if(rowNums <= 10000) {
        return new Urls({
          url,
          visits: 0
        })
        .save()
        .then(result => (result.toJSON()))
      }
      return Promise.reject('Number of records exceed the limit!')
    })
    .catch(err => (Promise.reject(err)));
  },

  checkRecordNumber(){
    return Urls
    .query()
    .count()
    .then((result) => {
      if(result) {
        return result[0]['count(*)'];
      } else {
        return 0;
      }
    })
  },
};
