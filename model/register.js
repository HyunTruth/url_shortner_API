const Urls = require('../functions/urls');

module.exports = {
  post(req) {
    destination = req.query.url;
    console.log(destination);
    return Urls.checkExistence(destination)
    .then((exists) => {
      if (exists.length) {
        console.log(exists);
      } else {
        return Urls.addNewUrls(destination);
      }
    })
  }
};
