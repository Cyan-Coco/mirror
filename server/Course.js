let express = require('express'),
    Router = express.Router();
let courses = require('./mock/course/courses');
console.log(courses.courseList[0].list);
Router.post('/api/recentread', function (req, res) {

});
Router.get('/api/course', function (req, res) {

});
Router.get('/api/courses', function (req, res) {
    let {search}=req.query;
    let newAry=[];
    if(search){
        courses.courseList.map((item,index)=>{
            item.list.map((item,index)=>{
                item.content.indexOf(search)>-1?newAry.push(item):null;
            })
        });
        res.json(courses);
    }else{
        res.json(courses);
    }
});
module.exports = Router;
