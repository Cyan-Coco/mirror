let express = require('express'),
    Router = express.Router();
let devhots = require('./mock/home/devhots'),
    office = require('./mock/home/office'),
    webdev = require('./mock/home/frontend'),
    mobiledev = require('./mock/home/mobdev');

Router.get('/api/devhots', function (req, res) {
    if(req.query){
        let {offset,limit} = req.query;
        devhots.articles.list
    }

    res.json(devhots);
});
Router.get('/api/office', function (req, res) {
    console.log(`刘婉月在 ${new Date()}访问了 /api/office接口`);
    res.json(office);
});
Router.get('/api/mobiledev', function (req, res) {
    console.log(`刘婉月在 ${new Date()}访问了 /api/mobiledev接口`);
    res.json(mobiledev);
});
Router.get('/api/webdev', function (req, res) {
    console.log(`刘婉月在 ${new Date()}访问了 /api/webdev接口`);
    res.json(webdev);
});
module.exports = Router;
