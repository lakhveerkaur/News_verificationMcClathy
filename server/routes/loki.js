const Router = require('express').Router()
    , loki = require('lokijs')
    , db = new loki('loki.json')
    , news = db.addCollection('news');

Router.post('/saveStatus', (req, res) => {
  console.log('inside save status');
  let status = req.body.status;
  console.log('params - > ', status);
  console.log('inside save status  -- > ');
  news.insert({status: status});
});


module.exports = Router;
