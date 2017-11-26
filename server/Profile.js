/********require all modules will use************/
let express = require('express'),
    path = './server/mock/profile/userData.json',
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
    /***write data to json file*/
    writeData = (path, data, callback) => {
        fs.writeFile(path, JSON.stringify(data), callback)
    },
    /***secret the string which user's password*/
    hashHex = (pwdStr) => {
        let md5 = crypto.createHash('md5');
        return md5.update(pwdStr).digest('hex').slice(0, 16);
    },
    /**distinct user favorite array*/
    distinctFn = (ary) => {
        return Array.from(new Set(ary));
    };
/*******************************/
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
    };
/*******************************************/

Router.post('/api/login', function (req, res) {
    let {userName, userPwd} = req.body;
    let userId;
    userPwd = hashHex(userPwd);
    readData(path).then((data) => {
        data = JSON.parse(data);
        let findResult = data.find((item) =>
        item.userName == userName && item.userPwd == userPwd);
        userId = findResult && findResult.userId;
        return findResult;
    }).then((accessLogin) => {
        if (!accessLogin) {
            res.json({code: 0, message: '账号密码错误，请重试'})
        } else {
            req.session.user = {userName, userId};
            res.json({code: 1, message: '登录成功，Enjoy IT', user: accessLogin})
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
        return data.map((item, index) => {
            if (item.userName == userName) {
                if (item.lastSign == new Date().toString().slice(0, 21)) {
                    res.json({code: 0, message: '您今日已签到，请勿重复签到'});
                    return item;
                }
                else {
                    item.lastSign = new Date().toString().slice(0, 21);
                    item.userExp = item.userExp + 10;
                    res.json({code: 1, message: '恭喜你，签到成功', user: item});
                    return item;
                }
            } else {
                return item
            }
        })
    }).then((data) => {
        writeData(path, data, function (err) {
            if (err) {
                console.log(err);
            }
        })
    })
});
Router.post('/api/account', function (req, res) {
    //传递的数据有存在localStorage里的userId还有当前没有收藏的这一项，是favorite
    let {userId, favorite} = req.body;
    readData(path).then((data) => {
        data = JSON.parse(data);
        data.map((item, index) => {
            if (item.userId == userId) {
                console.log(item);
                let inFavorites = item.userFavorites.find((item, index) => item === favorite);
                if(inFavorites){
                    item.userFavorites = item.userFavorites.filter((item, index) => item !== favorite);
                    res.json({code: 0, message: '已取消收藏'});
                    return item;
                }
                else {
                    item.userFavorites.push(favorite), res.json({code: 1, message: '收藏成功，请到我的页面>我的收藏查看'});
                    return item;
                }
            }
            else {
                res.end();
                return item;
            }
        });
        return data;
    }).then((data)=>{
        writeData(path,data,function (err) {
            err && console.log(err);
        })
    })
});

module.exports = Router;
