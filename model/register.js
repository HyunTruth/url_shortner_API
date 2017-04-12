const Urls = require('../functions/urls');

module.exports = {
  post(req) {
    destination = req.query.url;
    return Urls.checkExistence(destination)
    .then((exists) => {
      const linkInfo = {};
      if (exists.url) {
        linkInfo.url = 'http://localhost:3000/'+ exists.id;
        return {
          status: 200,
          linkInfo,
        };
      } else {
        return Urls.addNewUrls(destination)
        .then((newlyAddedUrl) => {
          linkInfo.url = 'http://localhost:3000/'+ newlyAddedUrl.id;
          return {
            status: 201,
            linkInfo,
          };
        })
      }
    })
    .catch((err) => (Promise.reject(err)));
  }
};
