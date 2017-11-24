const express = require('express'),
    app = express(),
    BodyParser = require('body-parser'),
    expressSession = require('express-session');

/**导入路由中间件*******/
let Home = require('./Home'),
    Course = require('./Course'),
    Study = require('./Study'),
    Profile = require('./Profile'),
    DefaultPort = require('./PORT');

/*********************/

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUSH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    //当客户端向服务器发送跨域的时候，会先发送option请求，如果服务器返回的响应头Access-Control-Allow-Methods里又‘POST’请求的时候，才会再次向后台发送POST亲贵
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
})
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());
app.use(expressSession({
    secret: 'sevenw3c',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: true}
}))

/**router middleware*/
app.use('/course', Course);  //课程页路由
app.use('/study', Study);    //学习页路由
app.use('/profile', Profile);   //个人中心路由
app.use('/resource', express.static('../resource'));  //静态文件资源路由
app.use('/', Home);    //首页路由
/*********************/
app.listen(DefaultPort, function () {
    console.log(`服务启动成功，正在监听 ${DefaultPort} 端口`);
});
