let express = require('express'),
    Router = express.Router();
let courses = require('./mock/course/courses');
console.log(courses.courseList[0].list);
Router.post('/api/recentread', function (req, res) {

});
Router.get('/api/course', function (req, res) {

});
Router.get('/api/courses', function (req, res) {
    res.json(courses);
});
module.exports = Router;
