/********require all modules will use************/
let express = require('express'),
    path = './mock/profile/userData.json',
    userDefault = require('./mock/profile/userImg'),
    fs = require('fs'),
    Router = express.Router(),
    crypto = require('crypto');
/*****************************************/

/************read data from json file*/
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
    /***wirte data to json file*/
    writeData = (path, data, callback) => {
        fs.writeFile(path, JSON.stringify(data), callback)
    },
    /***secret the string which user's password*/
    hashHex = (pwdStr) => {
        let md5 = crypto.createHash('md5');
        return md5.update(pwdStr).digest('hex').slice(0, 16);
    };
/*******************************************/

/**************user info model**********/
let userModel =
    {
        userId: 1,
        userVip: false,
        userRead: [],
        userFavorites: [],
        userImg: userDefault,
        userName: "",
        userPwd: "",
        userExp: 0,
        lastSign: ""
    }
/*******************************************/


Router.post('/api/login', function (req, res) {
    let {userName, userPwd} = req.body;
    userPwd = hashHex(userPwd);
    readData(path).then((data) => {
        data = JSON.parse(data);
        return data.find((item) => item.userName == userName && item.userPwd == userPwd);
    }).then((accessLogin) => {
        if (!accessLogin) {
            res.json({code: 0, message: '账号密码错误，请重试'})
        } else {
            res.json({code: 1, message: '登录成功，Enjoy IT'})
        }
    })
});
Router.post('/api/signup', function (req, res) {
    let {userName, userPwd, userImg} = req.body,
        editUserModel = userModel;
    userPwd = hashHex(userPwd);
    readData(path).then((data) => {
        data = JSON.parse(data);
        return data;
    }).then((data) => {
        data.find((item) => item.userName == userName) ?
            /****************************************************/
            res.json({code: 0, message: '用户名重复，请更改后重试'}) : (
            /****************************************************/
            editUserModel.userId = data.length + 1,
                editUserModel.userName = userName,
                userImg ? editUserModel.userImg = userImg : null,
                editUserModel.userPwd = userPwd,
                data[data.length] = editUserModel,
                writeData(path, data, function (err) {
                    err ?
                        console.log(err) :
                        res.json({code: 1, message: '恭喜你，注册成功'})
                })
            /****************************************************/
        )

    })
});
Router.get('/api/sign', function (req, res) {
    let {userName} = req.query;
    readData(path).then((data) => {
        data = JSON.parse(data);
        return data
    }).then((data) => {
      return  data.map((item, index) => {
            if(item.userName==userName){
                if(item.lastSign==new Date().toDateString()){
                    res.json({code: 0, message: '您今日已签到，请勿重复签到'});
                    return item;
                }
                else {
                    item.lastSign=new Date().toDateString();
                    item.userExp=item.userExp+10;
                    res.json({code:1,message:'恭喜你，签到成功'});
                    return item;
                }
            }else {
                return item
            }
        })
    }).then((data)=>{
        writeData(path,data,function (err) {
            if(err){
                console.log(err);
            }
        })
    })
});
Router.post('/api/accout', function (req, res) {

});


module.exports = Router;
