let express = require('express'),
    Router = express.Router();
let study = require('./mock/study/study');
Router.get('/api/studydata', function (req, res) {
    //获取所有的学习数据，学习页面的首页显示了数据的一部分（前端页面把数据截取一部分即可），点击更多即显示所有的数据即可
    res.json(study);
});
module.exports = Router;
