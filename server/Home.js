let express = require('express'),
    Router = express.Router();

let devhots = require('./mock/home/devhots'),
    office = require('./mock/home/office'),
    webdev = require('./mock/home/frontend'),
    mobiledev = require('./mock/home/mobdev');

Router.get('/api/devhots', function (req, res) {
    res.json(devhots);
});
Router.get('/api/office', function (req, res) {
    res.json(office);
});
Router.get('/api/mobiledev', function (req, res) {
    res.json(mobiledev);
});
Router.post('api/webdev', function (req, res) {
    res.json(webdev);
});
module.exports = Router;
