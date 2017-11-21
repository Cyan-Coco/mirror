import React, {Component} from 'react';
import './DefaultRoute.less'
const coverImg = require('./cover.png');
export default class DefaultRoute extends Component {
    constructor(){
        super();
        this.state={list:[]}
    }
    componentWillMount(){

    }

    componentWillMount(){
            fetch('http://localhost:54999/api/devhots',{
                credentials:'include',
                method:'get',
                headers:{"Accept":'application/json'}
            }).then((res)=>{
                return res.json()
            }).then((jsonData)=>{
                console.log(jsonData);
                this.setState({
                    list:jsonData.list
                })
            })
    }

    render() {

        return (
            <div className="DefaultRoute">
                {
                  /*
                   <img src={coverImg}/>
                   <h1>W3CSchool</h1>
                   <p className="firstPara"><span>康晶=></span> 统筹进度、后台、MOCK</p>
                   <p><span>赵沛=></span> 仓库全家桶</p>
                   <p><span>素素=></span> 个人中心、注册登录</p>
                   <p><span>俊俊=></span> 学习页面</p>
                   <p><span>甜甜=></span> 课程页面</p>
                   <p><span>婉月=></span> 首页</p>
                  */
                }

            </div>
        )
    }
}
