let express = require('express'),
    Router = express.Router();
let courses = require('./mock/course/courses');
console.log(courses.courseList[0].list);
Router.post('/api/recentread', function (req, res) {

});
Router.get('/api/course', function (req, res) {

});
Router.get('/api/courses', function (req, res) {
    if(req.query.search){
         let resolveAry=[];
        courses.courseList.map((item,index)=>{
            return  item.list.map((item,index)=>{
                item.content.indexOf(req.query.search)>=0? resolveAry[resolveAry.length]=item:null;
             })
         });
        res.json(resolveAry);
    }else {
        res.json(courses);
    }

});
module.exports = Router;
