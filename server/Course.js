let express = require('express'),
    Router = express.Router();
let courses = require('./mock/course/courses');
Router.post('/api/recentread', function (req, res) {

});
Router.get('/api/course', function (req, res) {
    let {id} = req.query,result;
    if(id){
        let outIndex=id.split('')[0],
            innerIndex=id.split('')[1];
        result= courses.courseList[outIndex].list[innerIndex-1];
        result ?
            res.json(result):
            res.json({code:0,message:'获取课程失败'})
    }
});

Router.get('/api/courses', function (req, res) {
    if (req.query.search) {
        let resolveAry = [];
        courses.courseList.map((item, index) => {
            return item.list.map((item, index) => {
                item.content.search(req.query.search) >= 0 ?
                    resolveAry[resolveAry.length] = item :
                    null;
            })
        });
        res.json(resolveAry);
    }
    else {
        res.json(courses);
    }

});

module.exports = Router;
