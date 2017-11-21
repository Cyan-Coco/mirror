let express = require('express'),
    Router = express.Router();
let sliders = require('./mock/home/devhots');
Router.get('/api/devhots', function (req, res) {
    res.json(sliders);
});
Router.get('/api/office', function (req, res) {
    res.send('office');
});
Router.get('/api/mobiledev', function (req, res) {
    res.send('mobiledev');
});
Router.post('api/webdev', function (req, res) {
    res.send('webdev');
});



module.exports = Router;
