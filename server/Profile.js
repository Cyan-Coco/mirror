let express = require('express'),
    path = './mock/profile/userData.json',
    fs = require('fs'),
    Router = express.Router();
/*****************************************/
let readData = (path) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) {
                    return reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },
    writeData = (path, data) => {
        fs.writeFile(path, JSON.stringify(data), function (err) {
            err ? console.log(err) : console.log('数据写入成功');
        })
    };
/*******************************************/

Router.post('/api/login', function (req, res) {
    let {userName, userPwd} = req.body;
    console.log(req.body);
    readData(path).then((data) => {
        data=JSON.parse(data);
        return data.find((item) =>item.userName==userName&&item.userPwd==userPwd);
    }).then((accessLogin)=>{
       if(!accessLogin){
         res.json({code:0,message:'账号密码错误，请重试'})
       }else {
           res.json({code:1,message:'登录成功，Enjoy IT'})
       }
    })
});
Router.post('/api/signup', function (req, res) {

});
Router.get('/api/sign', function (req, res) {

});
Router.post('/api/accout', function (req, res) {

});


module.exports = Router;
